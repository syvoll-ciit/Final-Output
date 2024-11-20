import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

/* styles */
import './Navbar.css';
import logo from '../assets/8cuts.png';

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="8cuts Logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/feedback-form">Submit Feedback</Link>
        <Link to="/feedback-list">View Feedback</Link>
        {user ? (
          <button onClick={() => auth.signOut()}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
