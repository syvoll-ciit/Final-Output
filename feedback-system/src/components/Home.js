import React from 'react';
import { Link } from 'react-router-dom';

/* styles */
import './Home.css';
import burgerImage from '../assets/burger.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-section">
        <img src={burgerImage} alt="Burger Yummy" className="burger-image" />
      </div>
      <div className="feedback-section">
      <div className="feedback-title">
        <div className="title-customer">CUSTOMER</div>
        <div className="title-feedbacks">FEEDBACKS</div>
      </div>
        <p className="description">
        Your feedback is incredibly important to us! 
        By sharing your thoughts, you're directly contributing to making our food, service, and atmosphere 
        better for everyone. We take every comment seriously, and your input allows us to fine-tune our 
        menu, enhance customer service, and create an even more enjoyable dining environment. 
        Thank you for helping us grow and deliver the best burgers possible!
        </p>
        <div className="feedback-buttons">
          <Link to="/feedback-form">
            <button className="submit-feedback-button">Submit Feedback</button>
          </Link>
          <div class="divider"/>
          <Link to="/feedback-list">
            <button className="view-feedback-button">View Feedbacks</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
