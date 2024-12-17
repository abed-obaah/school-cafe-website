import React, { useEffect, useState } from "react";

const WinnerAnimation = ({ participants, winner }) => {
  const [displayedName, setDisplayedName] = useState("");
  const [isDrawing, setIsDrawing] = useState(true);

  useEffect(() => {
    if (!participants || participants.length === 0) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedName(participants[index]);
      index = (index + 1) % participants.length;
    }, 100); // Speed of the animation

    // Stop the animation after 5 seconds and show the winner
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setDisplayedName(winner);
      setIsDrawing(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [participants, winner]);

  return (
    <div style={styles.container}>
      <div style={{ ...styles.nameBox, backgroundColor: isDrawing ? "#f0f0f0" : "#4caf50" }}>
        <h1 style={styles.nameText}>{displayedName}</h1>
      </div>
      {!isDrawing && (
        <p style={styles.winnerText}>
          🎉 Congratulations, <strong>{winner}</strong>! 🎉
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#282c34",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  nameBox: {
    padding: "20px 40px",
    borderRadius: "10px",
    border: "2px solid #fff",
    marginBottom: "20px",
    textAlign: "center",
  },
  nameText: {
    fontSize: "2em",
    fontWeight: "bold",
  },
  winnerText: {
    fontSize: "1.5em",
    marginTop: "20px",
  },
};

export default WinnerAnimation;
