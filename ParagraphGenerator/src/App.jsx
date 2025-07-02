import { useState } from 'react'

import './App.css'

function App() {
  const [input,setInput] = useState("");
  const [paragraph,setParagraph] = useState("");

  const words = [
    "The quick brown fox",
    "jumps over the lazy dog",
    "React makes UI easy",
    "JavaScript is fun",
    "Web development is creative",
    "Design patterns improve code",
    "Learning by doing is effective",
    "Consistency beats perfection",
    "Practice makes perfect",
    "Clean code is powerful",
    
  ];

  const generateParagraph = () =>{
    const wordLength = parseInt(input);
    if(isNaN(wordLength) || wordLength<=0){
      setParagraph("Please enter a valid number");
      return;
    }

    let result="";
    for(let i=0;i<wordLength;i++){
      const randomIndex = Math.floor(Math.random()* words.length);
      result+= words[randomIndex] + " ";
    }
    setParagraph(result.trim());
  }

  return (
    <div>
      <h2>Para Generator</h2>
      <div>
        <input placeholder="Enter Number Of Words" onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={generateParagraph}>Generate</button>
        </div>
        <div>
          {paragraph}
        </div>
    </div>
  )
}

export default App
