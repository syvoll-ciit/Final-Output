import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

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
    <div>
      <h2>Customer Feedback</h2>
      {feedbacks.map((feedback) => (
        <div key={feedback.id}>
          <p>{feedback.text}</p>
          <small>{feedback.createdAt.toDate().toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
