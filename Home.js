import React from 'react'
import './Home.css';
import arrow from '../assets/arrow.png'

const Home = () => {
  return (
    <div className='home '>
      <div className="home-text">
        <h1>Welcome to E-cell Vesit</h1>
        <p>"To Nurture Entrepreneurial skills among VESITians and to increase the number of StartUps from VESIT"</p>
        <button className='btn'>Explore more <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Home

