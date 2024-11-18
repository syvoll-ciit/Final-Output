import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Customer Feedback System</h1>
      <p>
        This platform allows you to share your experiences and view feedback from other customers.
      </p>
      <div>
        <Link to="/feedback-form">
          <button>Submit Feedback</button>
        </Link>
        <Link to="/feedback-list">
          <button>View Feedback</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
