"use client"
import React from 'react'
// import style from "../app/hero.module.css" 

const Home = () => {
  return (
    <div>
        <section className='hero' style={{backgroundImage: ""}}>
 {/* Welcome Section */}
 <div className="welcome-section">
        <h1>Welcome;</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search Here" />
        </div>
        </div>
        </section>
    </div>
  )
}

export default Home