import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

/* styles */
import './Navbar.css';
import logo from '../assets/8cuts.png';
import logoutIcon from '../assets/logout.png';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading user state</div>;

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
          <img
            src={logoutIcon}
            alt="Logout"
            className="logout-icon"
            onClick={() => auth.signOut()}
          />
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
