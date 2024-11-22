import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

/* styles */
import './Feedback.css';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'feedbacks'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const feedbackArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbacks(feedbackArray);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="feedback-container">
      <div className="feedback-list">
        <h2>Customer Feedback</h2>
        {feedbacks.map((feedback) => (
          <div className="feedback-item" key={feedback.id}>
            <h3>{feedback.title}</h3>
            <p>{feedback.text}</p>
            <small>
              Written by: {feedback.user} on {feedback.createdAt.toDate().toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;