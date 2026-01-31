import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        setMessage(response.data.message)
      })
      .catch(error => {
        setMessage("Error connecting to backend :(")
        console.error(error)
      })
  }, [])

  return(
    <div className="min-h-screen bg-gray-100 flex items-centre justify centre">
       <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Adelaide Uni Eats</h1>
          <p className="text-gray-700">Backend Status: </p>
          <p className="text-xl font-mono mt-2 p-2 bg-gray-100 rounded">
            {message}
            </p>
            </div>
            </div>
  )
}
export default App
