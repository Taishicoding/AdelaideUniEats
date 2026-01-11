# Software Requirements Specifications Document
**Project:** Adelaide Uni Eats <br>
**Team:** Taishi Morgan, Sam Lotus <br>
**Version:** 1.0  <br>
**Date:**  09/01/2026

---
## 1. Introduction
***Adelaide Uni Eats*** is a peer to peer food delivery system dissimilar to other food delivery systems as it does not include the merchant (Restaurant), instead customers(students) can post a job which a deliverer(student) can accept an then deliver to precise university location.

---
## 2. Project Scope 
### In Scope - The Minimum Viable Product
* **Authentication:** Email based verification restricted to '@adelaide.edu.au' emails
* **Bounty Marketplace:** Handling Job posting (customer/requester) and the Job accepting (Deliverer)
* **Payments:** Using Escrow payment system - As of current implementing Stripe as chosen payment API
* **Communication:** Real time text chat - As of current implementing Socket IO as chat API
* **Location:** North Terrace Campus and nearby businesses of walkable distance

### Out of Scope (Version 1)
* **Merchant Input:** The food merchant will not be a stakeholder within this project
* **GPS/Map:** There will be no driver tracker or interactive pin dropping map
* **Native Apps:** App will be developed solely as a web application through React
* **Menu:** Food items from merchants will not be fully updated 
* **Payment:** Dispute and salary will be initially resolved manually

---
## 3. Functional Requirements
Specific behaviors that the system must uphold.
* **FR-01 (Authentication):** The system shall not allow sign up if email address does not match '@adelaide.edu.au' domain and has been verified.
* **FR-02 (Safety):** The system shall hold funds in Escrow state until Requester confirms products have been received and checked against receipt.
* **FR-03 (Bounty Marketplace):** The system shall prevent a deliverer from accepting a job if they already have two active jobs.
* **FR-04 (Chat):** The chat functionality shall only become active between requester and deliverer once job has been accepted.

--- 
## 4. User Personas
**Sarah** (Customer/Requester) 
* *Situation:* During exam period, studying in a Hub study room, but doesn't have time to go to Rundle Mall and back as well as waiting for food ~ 40 minutes.
* *Issue:* Hungry, however will not be able to sacrifice time to get food
* *Goal:* For food to be delivered by a trusted person for a small fee directly to study room.

**Jake** (Deliverer)
* *Situation:* Already in Rundle Mall for personal meal or after work.
* *Issue:* Has spare time and is looking for ways to earn extra money.
* *Goal:* To pick up someone elses food on the way back to uni and complete a short detour to earn money.


