import React from 'react';

export default function Profiles({ Leaderboard }) {
  return (
    <div id="profile">
      {Item(Leaderboard)}
    </div>
  );
}

function Item(data) {
  return (
    <>
      {data.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item">
            <div className="info">
              <h3 className="name text-dark">{value.username}</h3>
              <span>Wallet Balance: {value.wallet_balance}</span>
              <span>Tasks Completed: {value.tasks_completed}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
