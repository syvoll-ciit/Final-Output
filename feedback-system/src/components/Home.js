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
        <p className="feedback-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="feedback-buttons">
          <Link to="/feedback-form">
            <button className="submit-feedback-button">Submit Feedback</button>
          </Link>
          <Link to="/feedback-list">
            <button className="view-feedback-button">View Feedbacks</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
