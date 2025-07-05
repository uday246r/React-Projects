import { useState } from 'react'

import './App.css'

function App() {
  const [num, setNum] = useState("")
  const [error, setError] = useState("");

  const handleInput = (e) =>{
    setError("");
    const val = e.target.value
    if(isNaN(val)){
      setNum(val);
      setError("Enter a valid number");
    }
    else{
      setNum(val);
    }
  }

  const handleSubmit = () =>{
    num.length == 10 ? alert("OTP sent sucessfully") : alert("Write a valid Mobile Number")
    setNum("")
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-black text-white">
    <div className="border w-full max-w-md rounded-xl p-8 font-semibold">
      
      <div className="text-center mb-8">
       <h1 className="text-2xl font-bold">Login via OTP</h1>
       <p className="text-gray-600 text-sm italic mt-1">Enter your mobile number to receive OTP</p>
      </div>
      
      <div className="space-y-6">
       <div className="space-y-2">
         <label className="text-gray-300 text-sm font-medium">Mobile Number</label>
         <input type="text" placeholder='Enter your mobile number'value={num} onChange={handleInput} className="w-full px-3 py-3 mb-1 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"/>
         <p className="text-red-400 mt-1 flex items-center">{error}</p>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900" onClick={ handleSubmit }>Send OTP</button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">By continuing, you agree to our{' '}
          <a href="#"className="text-blue-400 hover:text-blue-300 transition-colors">Terms of Service</a>
        </p>
      </div>
     </div>
   </div>
  )
}

export default App
