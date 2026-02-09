const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const { Router } = require('express');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const { email, password, full_name, phone_number } = req.body;

        if(!email.endsWith('@adelaide.edu.au')){
            return res.status(401).json({ error: "Must use an @adelaide.edu.au ending email address"});
        }

        const userExist = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userExist.rows.length > 0){
            return res.status(401).json({error: "User already exists"});
        }
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query(
            "INSERT INTO users (email, password_hash, full_name, phone_number) VALUES ($1, $2, $3, $4) RETURNING *",
            [email, bcryptPassword, full_name, phone_number]
        );
        
        const token = jwt.sign({ user_id: newUser.rows[0].id}, process.env.JWT_SECRET || "secret_key", {expiresIn: "1h"});

        res.json({ token, user: newUser.rows[0]});

    } catch (err) {
        console.error(err);
        res.status(500).json({error: err.message});
    }
 
});

module.exports = router;