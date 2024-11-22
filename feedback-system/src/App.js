import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';

/* styles */
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback-form" element={<FeedbackForm />} />
        <Route path="/feedback-list" element={<FeedbackList />} />
      </Routes>
    </Router>
  );
};

export default App;
