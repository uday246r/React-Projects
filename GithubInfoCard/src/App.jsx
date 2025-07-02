import { useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState("")
  
  
    fetch("https://api.github.com/users/uday246r")
    .then((res)=>res.json())
    .then((info)=>{
      setData(info);
    })
  

  return (
      <div className="container">
        <div className="headerImage">
          <img src="https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?semt=ais_items_boosted&w=740"></img>
        <div className="profilePhoto">
          <img src={data.avatar_url}></img>
        </div>
        </div>
        <div className="details1">
          <strong>{data.name}</strong>
          <p>{data.company}</p>
          <p>{data.location}</p>
        </div>
        <hr/>
        <div className="details2">
          <p>Total Repo : {data.public_repos}</p>
          <p>Profile : {data.user_view_type}</p>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
          <button>Visit GitHub Profile</button>
        </a>
        </div>
    </div>
  )
}

export default App
