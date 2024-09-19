import React from 'react'
import './About.css';
import right from '../assets/right.png';
import background from '../assets/background.jpg';

const about = () => {
  return (
    <>
    <div className="sanjana">
    <div className='about'>
      <div className="about-left">
        <img src={right} alt="" className='about-img' />
      </div>
      <div className="about-right">
        <h2>What is E-cell?</h2>
        <p>VESIT E-Cell is an organization that aims to help you navigate through the constantly evolving world of entrepreneurship and StartUp culture. In our quest to promote the spirit of entrepreneurship among the community, we guide you towards essential questions like “How this realm of entrepreneurship affects us in our day-to-day lives?” and the likes of “Can I construct my StartUp idea into a functional business model?”

As you embark on a journey to find answers to this Question, we tap into your inner potential and seek to refine it with the organisational experience, knowledge and strong skill set.</p>
      </div>
    </div>

    <div className='about'>
    <div className="about-left-1">
        <img src={background} alt="" className='about-img' />
      </div>
      <div className="about-right-1">
        <h2>What We Do ?</h2>
        <p>
        “THE ENTREPRENEUR ALWAYS SEARCHES FOR CHANGE, RESPONDS TO IT, AND EXPLOITS IT AS AN OPPORTUNITY.”

To instil this very essence, throughout the year, E-Cell organizes various seminars/webinars, lectures, innovative games, brainstorming sessions, competitions which is crucial in grooming a new generation of young entrepreneurs.

At the same time, efforts are made to invoke a sense of responsibility towards the nation in students by empowering social StartUps as well. Not only do we inspire you to take the leap of faith, but we also train and armorize you for it, guide you through it and are ready for further leaps.
</p>

      </div>
    </div>

    <div className='about'>
    <div className="about-left-1">
        <img src={background} alt="" className='about-img' />
      </div>
      <div className="about-right-1">
        <h2>Our Vision</h2>
        <p>
        VESIT Entrepreneurship Cell’s vision :

“To Nurture Entrepreneurial skills among VESITians and to increase the number of StartUps from VESIT.”

We are on a mission to build a sustainable StartUp ecosystem, fostering entrepreneurial knowledge and providing opportunities for StartUps, colleges, and corporates to get involved with us.

 


</p>

      </div>
    </div>
    </div>
    

    
    
    

    </>
    
  )
}

export default about

