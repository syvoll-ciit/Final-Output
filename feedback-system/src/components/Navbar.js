import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Navbar.css';

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="navbar">
      <div className="brand">Feedback System</div>
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
