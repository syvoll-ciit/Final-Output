import React, { useState } from 'react';
import { db, auth } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>Submit Your Feedback</h2>
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

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default FeedbackForm;
