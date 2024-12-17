import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import axios from 'axios';

const LuckyDraw = () => {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState('');
  const [rolling, setRolling] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(true); // Show modal by default
  const [username, setUsername] = useState(''); // Store username
  const { width, height } = useWindowSize();

  // const participants = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank']; // Example participants


  useEffect(() => {
    const raffleSubmitted = localStorage.getItem('raffleSubmitted');
    if (raffleSubmitted === 'true') {
      setShowModal(false); // If already submitted, don't show the modal
    }
  }, []);


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


  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get('https://schoolcafe.ng/api/raffle_entries.php');
        if (response.data.success) {
          // Map the participant names from the API response
          const fetchedParticipants = response.data.entries.map(entry => entry.username);
          setParticipants(fetchedParticipants);
        } else {
          alert('Failed to fetch participants. Please try again.');
        }
      } catch (error) {
        alert('An error occurred while fetching participants.');
      }
    };

    fetchParticipants();
  }, []);

  

  useEffect(() => {
    // Countdown mechanism
    const interval = setInterval(async () => {
      const currentTime = new Date();
      const targetTime = new Date();
      targetTime.setHours(10, 0, 0, 0); // Set to 10 AM

      if (currentTime >= targetTime) {
        clearInterval(interval); // Stop the countdown when it's time

        try {
          // Fetch the winner from the backend
          const response = await axios.get('https://schoolcafe.ng/api/raffle.php');
          if (response.data.winner) {
            setWinner(response.data.winner);
            setRolling(false);
            setShowConfetti(true);
          } else {
            alert('No winner available or an error occurred.');
          }
        } catch (error) {
          alert('Failed to fetch winner. Please try again later.');
        }
      }
    }, 1000); // Check every second

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://schoolcafe.ng/api/raffle.php', { username });
      if (response.data.success) {
        alert('Submission successful! Winner announced at 10 AM.');
        localStorage.setItem('raffleSubmitted', 'true'); // Save submission status
        setShowModal(false); // Close the modal
      } else if (response.data.error === 'Username already submitted') {
        alert('You have already entered the raffle.');
        localStorage.setItem('raffleSubmitted', 'true'); // Save submission status
        setShowModal(false); // Close the modal
      } else {
        alert(response.data.error || 'Submission failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };
  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom, #ff512f, #dd2476)',
        color: '#fff',
        fontFamily: '"Arial", sans-serif',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {showConfetti && <Confetti width={width} height={height} />}
      
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '10px',
              width: '80%',
              maxWidth: '400px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '20px' }}>Enter Raffle</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '20px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  color: '#000',
                }}
              />
              <button
                type="submit"
                style={{
                  background: '#ff512f',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#fff700',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          marginBottom: '20px',
        }}
      >
        Lucky Draw
      </h1>

      <div
        style={{
          width: '80%',
          maxWidth: '600px',
          height: '100px',
          overflow: 'hidden',
          background: '#fff',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#000',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          border: '8px solid #ffcc00',
          borderStyle: 'dotted',
          marginBottom: '30px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            animation: rolling ? 'roll 0.3s infinite linear' : 'none',
            display: 'flex',
            flexDirection: 'column',
            transform: rolling ? 'translateY(-100%)' : 'translateY(0)',
            transition: 'transform 0.5s ease-out',
          }}
        >
          {rolling
            ? participants.map((name, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '10px',
                    margin: '5px 0',
                  }}
                >
                  {name}
                </div>
              ))
            : winner}
        </div>
      </div>

      <style>
        {`
          @keyframes roll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default LuckyDraw;
