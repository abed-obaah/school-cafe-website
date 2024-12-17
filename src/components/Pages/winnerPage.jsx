import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WinnerPage = () => {
  const [winner, setWinner] = useState(null);
  const [animationLink, setAnimationLink] = useState('');
  const [error, setError] = useState('');

  const fetchWinner = async () => {
    try {
      const response = await axios.get('https://schoolcafe.ng/api/winner.php');
      
      // Ensure the response contains the expected data
      if (response.data && response.data.winner) {
        setWinner(response.data.winner);
        setAnimationLink(response.data.animationLink);
        setError(''); // Clear any previous error
      } else {
        setError('No winner data available.');
      }
    } catch (err) {
      setError('Error fetching the winner. Please try again later.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWinner();
  }, []);

  return (
    <div>
      <h2>Raffle Winner</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {winner ? (
        <div>
          <h3>Congratulations!</h3>
          <p>The winner is: <strong>{winner}</strong></p>
          <p>
            View the animation: <a href={animationLink} target="_blank" rel="noopener noreferrer">{animationLink}</a>
          </p>
        </div>
      ) : (
        !error && <p>Fetching winner details...</p>
      )}
    </div>
  );
};

export default WinnerPage;
