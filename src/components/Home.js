import React, { useState } from 'react';
import { useAppDispatch,useAppSelector } from '../Utils/Store'; // Import the custom hooks
import { setUsername } from '../Utils/Store'; // Import your action creators

const Home = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.user.username);

  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSetUsername = () => {
    const newUsername = prompt('Enter your name:');
    if (newUsername) {
      dispatch(setUsername(newUsername)); // Dispatch the setUsername action with the payload
    }
  };

  const handleSubscribe = () => {
    setIsSubscribed(true);
    setMessage('Thank you for subscribing!');
  };

  const handleUnsubscribe = () => {
    setIsSubscribed(false);
    setMessage('You have unsubscribed.');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Hello, {username}!</p>
      <button onClick={handleSetUsername}>Set Username</button>

      <div>
        <h2>Newsletter Subscription</h2>
        {isSubscribed ? (
          <div>
            <p>You are subscribed to our newsletter!</p>
            <button onClick={handleUnsubscribe}>Unsubscribe</button>
          </div>
        ) : (
          <div>
            <p>Subscribe to our newsletter:</p>
            <input type="email" placeholder="Enter your email" />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        )}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Home;
