import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate to navigate to the event details
import './Event.css';
import arrow from '../assets/arrow.png';


const Events = () => {
    const initialEvents = [
        {
          id: 1,  // Add unique ID to each event
          date: '2024',
          title: 'Minimum Viable Product',
          description: 'The goal is to develop a functional prototype quickly to test your core idea before investing significant time and resources into a full-scale product.',
        },
        {
          id: 2,  // Add unique ID to each event
          date: '2024',
          title: 'Business Canvas Model',
          description: 'The Business Model Canvas is a strategic management tool used to visualize and develop a business model.',
        },
        {
          id: 3,  // Add unique ID to each event
          date: '2024',
          title: 'World Entrepreneur Day',
          description: 'Details about the third event. It was an incredible experience for everyone involved.',
        },
    ];

    const [events, setEvents] = useState(initialEvents);
    const [moreEventsVisible, setMoreEventsVisible] = useState(false);
    const navigate = useNavigate();  // Use navigate hook for navigation

    const moreEvents = [
        {
          id: 4,  // Add unique ID to each event
          date: '2024',
          title: 'Event Title 4',
          description: 'Details about the fourth event. It was a breakthrough event.',
        },
        {
          id: 5,  // Add unique ID to each event
          date: '2025',
          title: 'Event Title 5',
          description: 'Details about the fifth event. A memorable experience for all.',
        },
        {
          id: 6,  // Add unique ID to each event
          date: '2026',
          title: 'Event Title 6',
          description: 'Details about the sixth event. One of the best in recent years.',
        },
    ];

    const handleClick = () => {
        if (!moreEventsVisible) {
            // Show more events
            setEvents((prevEvents) => [...prevEvents, ...moreEvents]);
        } else {
            // Show less (revert to initial events)
            setEvents(initialEvents);
        }
        setMoreEventsVisible(!moreEventsVisible);
    };

    const handleExploreClick = (id) => {
        navigate(`/event/${id}`);  // Navigate to the event details page using event ID
    };

    return (
        <div className="one">
            <div className="timeline-container">
                <div className="timeline">
                    {events.map((event, index) => (
                        <div className="event" key={index}>
                            <div className="event-date">{event.date}</div>
                            <div className="event-content">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                {/* <button className='btn' onClick={() => handleExploreClick(event.id)}>
                                    Explore more <img src={arrow} alt="arrow" />
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="load-more-button" onClick={handleClick}>
                    {moreEventsVisible ? 'Show Less' : 'Show More Events'}
                </button>
            </div>
        </div>
    );
};

export default Events;
