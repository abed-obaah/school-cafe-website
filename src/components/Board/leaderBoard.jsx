import React, { useEffect, useState } from 'react';
import Share from '../../assets/Ashare.svg'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useUserContext } from '../../UserContext';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  // const topRanking = [
  //   { name: 'Stanley Onos', score: 1075, position: 1, school: 'Delta State University Abraka', level: 'Novice' },
  //   { name: 'Tejiri Runo', score: 1009, position: 2, school: 'Delta State University Abraka', level: 'Novice' },
  //   { name: 'Stanley Okaji', score: 689, position: 3, school: 'Delta State University Abraka', level: 'Novice' },
  // ];

  // const userRanking = { name: 'Tejiri Runo', score: 1009, position: 2, level: 'Novice' };

  // const rankingList = [
  //   { name: 'Esther Anahi', score: 667, level: 'Novice' },
  //   { name: 'Esther Anahi', score: 667, level: 'Novice' },
  // ];


  const [rankingList, setRankingList] = useState([]);
  const [topRanking, setTopRanking] = useState([]);
  const [userRanking, setUserRanking] = useState(null);
  const [meRanking, setMeRanking] = useState([])
  const [loading, setLoading] = useState(true);
  const { user } = useUserContext();

  useEffect(() => {
    // Fetch leaderboard data from the API
    axios
      .get(`https://schoolcafe.ng/api/getLeaderboard.php?user_id=${user.id}`)
      .then((response) => {
        const data = response.data;
        console.log("leaderBoard:", data)
        // Assuming the API returns the data in the structure below:
        // data.message, data.leaderboard
        setRankingList(data.leaderboard || []);
        setMeRanking(data.user || []);
        setTopRanking((data.leaderboard || []).slice(0, 3));
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching leaderboard data:", error);
        setLoading(false);
      });
  }, []);



  return (
    <div className="flex flex-col p-4 space-y-6 md:p-8">
        <div className="mb-4">
                    <Link to={'/dashboard'}>
                   
                <a href="#" className="text-sm text-[#B3B3B3]">&lt; back to Dashboard</a>
                </Link>
            </div>

      <div className="flex flex-col mt-10 space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:ml-auto md:mr-auto w-[90%]">
      <div className="md:w-2/3 space-y-6 border border-gray-300 rounded-lg p-4">
  <div className="flex items-center justify-between pb-1">
    <h3 className="text-lg font-semibold relative inline-block">
      Top 3 Ranking
      <span className="absolute left-0 right-0 -bottom-2 h-[6px] w-[50%] bg-blue-500 rounded-full"></span>
    </h3>
    <span className="ml-auto text-blue-500">
      <img
        src={Share}
        alt={userRanking?.username}
        className="w-6 h-6"
      />
    </span>
  </div>

  <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-3">
    {topRanking.map((user, index) => (
      <div
        key={index}
        className={`relative rounded-lg p-4 text-center w-full border border-gray-300 
        ${index === 1 ? 'bg-[#1D7BC7] text-white' : 'bg-white'}`}
      >
        <span className="absolute top-2 right-2 text-xs font-semibold text-black bg-[#FFD400] px-2 py-1 rounded-lg">
          {user.level}
        </span>

        <img
          src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
          alt={user.username}
          className="rounded-full mx-auto mb-2 w-24 h-24 md:w-32 md:h-32 border-4 border-blue-500"
        />
        <h4 className={`font-bold text-base ${index === 1 ? 'text-white' : 'text-black'} max-w-[130px] mx-auto border-b-4 border-blue-500 pb-1`}>
          {user.username}
        </h4>

        {/* Add a conditional check for user.school */}
        {user.school && (
          <p className={`text-base my-4 ${index === 1 ? 'text-blue-200' : 'text-gray-500'}`}>
            {user.school.split(' ').slice(0, 2).join(' ')}<br />
            {user.school.split(' ').slice(2).join(' ')}
          </p>
        )}

        <p className={`font-regular text-sm mt-2 ${index === 1 ? 'text-blue-100' : 'text-[#888888]'}`}>
          Score
        </p>
        <p className={`font-bold text-xl mt-2 ${index === 1 ? 'text-blue-100' : 'text-black'}`}>
          {user.tasks_completed}
        </p>
        <p className={`font-normal ${index === 1 ? 'text-white' : 'text-[#B3B3B3]'}`}>
          {user.position} Position
        </p>
      </div>
    ))}
  </div>
</div>


        {/* User Ranking Section */}
        <div className="bg-white rounded-lg p-4 text-center border border-gray-300 w-full md:w-[350px]">
          <div className="flex items-center justify-between pb-5">
            <h3 className="text-lg font-semibold relative inline-block">
              Top 3 Ranking
              <span className="absolute left-0 right-0 -bottom-2 h-[6px] w-[50%] bg-blue-500 rounded-full"></span>
            </h3>

            <span className="ml-auto text-blue-500">
              <img
                src={Share}
                alt={meRanking.username}
                className="w-6 h-6"
              />
            </span>
          </div>

         
          <div className="border border-gray-300 rounded-lg p-4 w-full h-auto mx-auto relative">
            <span className="absolute top-2 right-2 font-semibold text-black bg-[#FFD400] px-2 py-0.5 rounded-lg text-xs">
              {meRanking.level}
            </span>

            <img
              src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
              alt={meRanking.username}
              className="rounded-full mx-auto mb-3 w-24 h-24 md:w-32 md:h-32"
            />
            <h4 className="font-bold text-base">{meRanking.username}</h4>
            <p className="font-bold mt-2">Score: {meRanking.tasks_completed}</p>
            <p className="font-bold text-blue-500">Position: {meRanking.position}</p>
          </div>

          <button
            type="submit"
            className="w-full mt-5 bg-[#1D7BC7] text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Perform Task
          </button>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="mt-8 space-y-6 w-full sm:w-[80%] md:w-[70%] xl:w-[65%] xl:ml-8 mx-auto px-4 sm:px-6 lg:px-12">
  <ul className="space-y-4 border rounded-md">
    {rankingList.map((user, index) => (
      <li key={index} className="flex flex-col sm:flex-row items-center border-b justify-between bg-white p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        
        {/* Left Side: Rank and User Info */}
        <div className="flex items-center space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
          <p className="font-bold text-xl sm:text-2xl text-center sm:text-left text-gray-700">{index + 1}.</p>
          <img
            src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
            alt={user.username}
            className="rounded-full w-16 h-16 sm:w-14 sm:h-14 mx-auto sm:mx-0 border-2 border-gray-300"
          />
          <div className="text-center sm:text-left">
            <p className="font-semibold text-lg sm:text-sm text-gray-800">{user.username}</p>
          </div>
        </div>

        {/* Middle Section: Level Badge */}
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <span className="bg-gradient-to-r bg-[#FFD400] text-black px-2 py-0.5 rounded-md text-xs sm:text-sm">
            {user.level}
          </span>
        </div>

        {/* Right Side: Score */}
        <div className="flex flex-col items-center justify-center sm:justify-end w-full sm:w-auto">
        <p className="font-bold text-sm sm:text-sm text-gray-800">NGN {user.wallet_balance}</p>
          <p className="font-bold text-sm sm:text-sm text-gray-800">{user.tasks_completed}</p>
          
        </div>

      </li>
    ))}
  </ul>
</div>






    </div>
  );
};

export default Leaderboard;
