import { useState } from 'react'
import './App.css';

function App() {
  const [feed, setFeed] = useState([
    { label: "Followers", count: "80K" },
    { label: "Likes", count: "803K" },
    { label: "Photos", count: "1.4K" }  
  ])

  return (
    <div className="container">
    <div className="header-image">
      <img src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg"></img>
     <div className="profile-image">
      <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"></img>
     </div>
    </div>

    <div className="profile-info">
      <h2>Rita Correia <span>32</span></h2>
      <p>London</p>
    </div>

      <hr/>

    <div className="feed-stats">
      {
      feed.map((item,index)=>(
        <div key={index} className="stat">
        <strong>{item.count}</strong>
        <p>{item.label}</p>
        </div>
      ))
      }

      </div>
    </div>
  )
}

export default App
