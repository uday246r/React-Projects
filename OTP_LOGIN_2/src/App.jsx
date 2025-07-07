import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const OTPCount = 4; 
  const [otp, setOTP] = useState(new Array(OTPCount).fill(""));
  const [inp, setInp] = useState([]);

  const refArr = useRef([]);

  useEffect(()=>{
    refArr.current[0]?.focus();
  },[])
  
  const handleInput = (e,index) =>{
    const val = e.target.value.trim()
    if(isNaN(val)) return
    const newArray = [...inp]
    newArray[index]=val.slice(-1)
    setInp(newArray)

    val && refArr.current[index+1]?.focus();
  }

  const handleOnKeyDown = (e,index) =>{
    console.log(e);
    if(!e.target.value && e.key === "Backspace") refArr.current[index-1]?.focus()
    if(e.key == "ArrowLeft") refArr.current[index-1]?.focus()
    if(e.key == "ArrowRight") refArr.current[index+1]?.focus()
  }

  const handleSubmit = (e) =>{
    // const finalOTP = inp.filter(val => val?.trim()).length
    const finalOTP = inp.join("");
    finalOTP.length===otp.length ? alert("Success") : alert("Enter valid OTP")
    setInp(new Array(OTPCount).fill("")); //Resets 4 input boxes to empty
  }

  return (
    <div className="min-h-screen bg-black-500 bg-black text-white flex items-center justify-center">
      <div className="border-2 w-full max-w-md">

        <div className="mt-3">
          <h1 className="text-center font-semibold text-2xl">Login via OTP</h1>
        </div>

        <div className="flex justify-center mt-5">{
          otp.map((val,index)=>(
            <input key={index}
            value={inp[index]}
            ref = {(val)=>(refArr.current[index]=val)}
            onChange={(e)=> handleInput(e,index)}
            onKeyDown={(e)=>handleOnKeyDown(e,index)}
            className="bg-white text-black text-center m-1 p-4 text-xl w-full max-size-fit"/>
          ))
        }
        </div>

        <div>
          <button 
          onClick={handleSubmit}
          className="text-center m-7 font-semibold py-3 px-3 text-md w-full max-w-sm bg-blue-600 hover:bg-blue-700 rounder-md transition-colors duration-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Submit
            </button>
        </div>

      </div>
    </div>
  )
}

export default App
