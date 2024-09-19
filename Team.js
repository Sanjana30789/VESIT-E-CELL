import React from 'react'
import six from '../assets/six.jpg';
import mayank from '../assets/mayank.png';
import sanjana from '../assets/sanjana.png';
import sneha from '../assets/sneha.png';
import shreyash from '../assets/shreyash.png';
import shrushti from '../assets/shrushti.png';

function Team() {
  return (
    <>
    <div className="entire">
    <div className="heading">
    <h1>Introduction of Seniors Members</h1>
    </div>
    <div className='big'>
      <div className="small">
        <img src={mayank} alt="" />
        <div className="pa">
        <p className='para'>Chief Operations Officer</p>
        </div>
        </div>
      <div className="small">
        <img src={sneha} alt="" />
        <div className="pa">
        <p className='para'>Chief Technical Officer - Hardware</p>
        </div>
      </div>
      <div className="small">
        <img src={shreyash} alt="" />
        <div className="pa">
        <p className='para'>Chief Finance Officer</p>
        </div>
      </div>
    </div>
    <div className='big'>
      <div className="small">
        <img src={sanjana} alt="" />
        <div className="pa">
        <p className='para'>Chief Technical Officer - Software</p>
        </div>
      </div>
      <div className="small">
        <img src={shrushti} alt="" />
        <div className="pa">
        <p className='para'>Chief Creative Officer</p>
        </div>
      </div>
      <div className="small">
        <img src={shreyash} alt="" />
        <div className="pa">
        <p className='para'>Chief Finance Officer</p>
        </div>
      </div>
    </div>
    </div>
    
    
    
    

      
      

    </>
    
  )
}

export default Team;


