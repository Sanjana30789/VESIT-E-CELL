import React from 'react'
import './Gallery.css';
// import mayank from '../assets/mayank.png';
// import sanjana from '../assets/sanjana.png';
// import sneha from '../assets/sneha.png';
import right from '../assets/right.png';
import summit from '../assets/summit.jpg';




const Gallery = () => {
  return (
    <div className="b1">
      <div className='gallery'>
      <div className="gall">
        <img src={summit} alt="" />
        
      </div>
      <div className="gall">
        <img src={summit} alt="" />
      </div>
      <div className="gall">
        <img src={summit} alt="" />
      </div>
    </div>
    </div>
    
  )
}

export default Gallery
