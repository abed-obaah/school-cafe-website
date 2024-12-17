import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RafflePage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('https://schoolcafe.ng/api/raffle.php', { username });
    if (response.data.success) {
      alert('Submission successful! Winner announced at 10 AM.');
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('/api/get-username');
      if (response.data.username) setUsername(response.data.username);
    };
    fetchUser();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Raffle</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RafflePage;



// useEffect(() => {
//   const calculateTimeRemaining = () => {
//     const now = new Date();
//     const drawEnd = new Date();
//     drawEnd.setHours(10, 0, 0, 0); // Set the time to 10:00 AM today

//     // If the current time is past 10 AM, set the drawEnd to tomorrow 10 AM
//     if (now > drawEnd) {
//       drawEnd.setDate(drawEnd.getDate() + 1);
//     }

//     const diff = drawEnd - now;
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);
//     const seconds = Math.floor((diff / 1000) % 60);

//     setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);

//     // Stop rolling and fetch winner when the timer reaches 0
//     if (diff <= 0) {
//       setRolling(false);
//       fetchWinner();
//     }
//   };

//   const interval = setInterval(calculateTimeRemaining, 1000);
//   return () => clearInterval(interval); // Clear interval on component unmount
// }, []);

{/* <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>Time Remaining: {timeRemaining}</h3> */}
