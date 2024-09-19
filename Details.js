import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'; // Import the CSS file for styling

const Details = () => {
  const { id } = useParams(); // Get the event ID from the URL

  // Dummy data for the events (you can replace this with actual data or an API call)
  const eventDetails = {
    1: { 
      title: 'Minimum Viable Product', 
      description: 'A detailed description for MVP event. This event covers the fundamentals of building a prototype quickly.', 
    //   img: 'assets/right.png', 
      extraInfo: 'Additional details about MVP including steps, challenges, and best practices.'
    },
    2: { 
      title: 'Business Canvas Model', 
      description: 'A detailed description for BCM event. This session helps you structure your business model using a strategic management template.', 
    //   img: 'assets/right.png',
      extraInfo: 'Explore various business models and use cases of the Business Model Canvas.'
    },
    3: { 
      title: 'World Entrepreneur Day', 
      description: 'A celebration of entrepreneurship and innovation around the world. Learn from experienced entrepreneurs.', 
      img: 'assets/right.png',
      extraInfo: 'Highlights of this event include networking opportunities and keynote speeches from leading entrepreneurs.'
    },
    4: { 
      title: 'Event Title 4', 
      description: 'Details for the fourth event. It was a breakthrough in modern entrepreneurship techniques.', 
      img: 'assets/right.png',
      extraInfo: 'Key takeaways from the event and resources for further learning.'
    },
    // Add more events here if needed
  };

  const event = eventDetails[id];

  if (!event) {
    return <div>Event not found!</div>; // Handle case if event is not found
  }

  return (
    <div className="event-details-container">
      <div className="event-image">
        {/* <img src={event.img} alt={event.title} /> */}
      </div>
      <div className="event-details-content">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p>{event.extraInfo}</p>
      </div>
    </div>
  );
};

export default Details;
