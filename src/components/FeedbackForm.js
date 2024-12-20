import React, { useState } from 'react';
import { db, auth } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

/* styles */
import './Feedback.css';

const FeedbackForm = () => {
  const [user] = useAuthState(auth);
  const [feedback, setFeedback] = useState('');
  const [title, setTitle] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const username = user.displayName || user.email.split('@')[0];
      await addDoc(collection(db, 'feedbacks'), {
        title: title,
        text: feedback,
        createdAt: Timestamp.fromDate(new Date()),
        user: username,
      });
      setFeedback('');
      setTitle('');
      setSuccessMessage('Feedback submitted successfully!');
    } catch (error) {
      setErrorMessage('Error submitting feedback. Please try again.');
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="feedback-container">
      <div className="feedback-left">
        <div className="feedback-form">
          <h2>SUBMIT YOUR FEEDBACK</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Feedback Title"
              required
            />
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              required
            />
            <button type="submit">Submit Feedback</button>
          </form>
          {successMessage && <p className="success">{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      </div>
        <div className="feedback-right">
      </div>
    </div>
  );
};

export default FeedbackForm;
