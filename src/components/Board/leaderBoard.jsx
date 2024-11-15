import React from 'react';
import Share from '../../assets/Ashare.svg'

const Leaderboard = () => {
  const topRanking = [
    { name: 'Stanley Onos', score: 1075, position: 1, school: 'Delta State University Abraka',level: 'Novice' },
    { name: 'Tejiri Runo', score: 1009, position: 2, school: 'Delta State University Abraka' ,level: 'Novice'},
    { name: 'Stanley Okaji', score: 689, position: 3, school: 'Delta State University Abraka',level: 'Novice' },
  ];

  const userRanking = { name: 'Tejiri Runo', score: 1009, position: 2,level: 'Novice' };

  const rankingList = [
    { name: 'Esther Anahi', score: 667, level: 'Novice' },
    
  ];

  return (
    <div className="flex flex-col p-8 space-y-6">
      {/* Top Flexed Section */}
      <div className="flex flex-col mt-16 md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
        {/* Top 3 Ranking Section */}
        <div className="md:w-2/3 space-y-3 border border-gray-300 rounded-lg p-3">
          <div className="flex items-center justify-between pb-1">
            <h3 className="text-lg font-semibold relative inline-block">
              Top 3 Ranking
              <span className="absolute left-0 right-0 -bottom-2 h-[6px] w-[50%] bg-blue-500 rounded-full"></span>
            </h3>
            <span className="ml-auto text-blue-500">
              <img
                src={Share}
                alt={userRanking.name}
                className="mx-auto w-6 h-6"
              />
            </span>
          </div>

          <div className="flex justify-between space-x-3">
            {topRanking.map((user, index) => (
              <div
                key={index}
                className={`relative rounded-lg p-3 text-center w-full border border-gray-300 
                ${index === 1 ? 'bg-[#1D7BC7] text-white' : 'bg-white'}`}
              >
                {/* Level Positioning */}
                <span className="absolute top-2 right-2 text-xs font-semibold text-black bg-[#FFD400] px-2 py-1 rounded-lg">
                  {user.level}
                </span>

                <img
                  src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                  alt={user.name}
                  className="rounded-full mx-auto mb-2 w-32 h-32 border-4 border-blue-500"
                />
                <h4 className={`font-bold text-base ${index === 1 ? 'text-white' : 'text-black'} max-w-[130px] mx-auto border-b-4 border-blue-500 pb-1`}>
                  {user.name}
                </h4>

                <p className={`text-base my-6 ${index === 1 ? 'text-blue-200' : 'text-gray-500'}`}>
                  {user.school.split(' ').slice(0, 2).join(' ')}<br />
                  {user.school.split(' ').slice(2).join(' ')}
                </p>

                <p className={`font-regular text-sm mt-2 ${index === 1 ? 'text-blue-100' : 'text-[#888888]'}`}>
                  Score
                </p>
                <p className={`font-bold text-xl mt-2 ${index === 1 ? 'text-blue-100' : 'text-black'}`}>
                  {user.score}
                </p>
                <p className={`font-normal ${index === 1 ? 'text-white' : 'text-[#B3B3B3]'}`}>
                  {user.position} Position
                </p>
              </div>
            ))}
          </div>
        </div>

  {/* User Ranking Section */}
            <div className="bg-white rounded-lg p-4 text-center border border-gray-300 w-[350px] relative">
            <div className="flex items-center justify-between pb-5">
              <h3 className="text-lg font-semibold relative inline-block">
                Top 3 Ranking
                <span className="absolute left-0 right-0 -bottom-2 h-[6px] w-[50%] bg-blue-500 rounded-full"></span>
              </h3>

              <span className="ml-auto text-blue-500">
                <img
                  src={Share}
                  alt={userRanking.name}
                  className="mx-auto w-6 h-6"
                />
              </span>
            </div>

  {/* User Ranking Card */}
  <div className="border border-gray-300 rounded-lg p-3 w-[250px] h-[350px] mx-auto relative">
    
    {/* Display Level at Top Right */}
    <span className="absolute top-2 right-2  font-semibold text-black bg-[#FFD400] px-2 py-0.2 rounded-lg text-xs">
      {userRanking.level}
    </span>

    <img
      src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
      alt={userRanking.name}
      className="rounded-full mx-auto mb-3 w-32 h-32"
    />
    <h4 className="font-bold text-base text-center">{userRanking.name}</h4>
    <p className="font-bold mt-2 text-base text-center">Score: {userRanking.score}</p>
    <p className="font-bold text-blue-500 text-center">Position: {userRanking.position}</p>
  </div>

  {/* <button className="mt-3 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600">
    Perform Task
  </button> */}
  <button
        type="submit"
        className="w-full mt-10 bg-[#1D7BC7] text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Perform Task
      </button>
</div>

</div>




      {/* Leaderboard Section */}
      <div className="mt-10 md:w-full space-y-4">
        <h4 className="text-lg font-semibold">Leaderboard</h4>
        <ul className="space-y-4">
          {rankingList.map((user, index) => (
            <li key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img
                  src="https://placekitten.com/50/50"
                  alt={user.name}
                  className="rounded-full w-12 h-12"
                />
                <div>
                  <p className="font-semibold">{user.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="font-semibold">{user.score}</p>
                <span className="bg-yellow-400 text-white px-2 py-1 rounded-lg text-sm">
                  {user.level}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
