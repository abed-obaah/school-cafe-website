import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Bars3Icon, XMarkIcon, ClipboardIcon } from '@heroicons/react/24/outline'
import Avatar from '../../assets/avatar.svg';
import Copy from '../../assets/copy.svg';
import Profile from '../../assets/profile.svg';
import Star1 from '../../assets/solar_star-bold-duotone.svg';
import Star2 from '../../assets/solar_star-bold.svg';
import Verify from '../../assets/verify.svg';
// import Profile from '../../assets/profile.svg';
import Tools from './tools';
import TransactionList from './transactionList';
import earning from '../../assets/earning.svg'
import lines from '../../assets/lines.svg'
import leader from '../../assets/leader.svg'
import refer from '../../assets/refer.svg'
import activity from '../../assets/activity.svg'
import refresh from '../../assets/refresh.svg';
import Withdraw from '../../assets/withdraw.svg';
import box from '../../assets/message.svg';
import tv from '../../assets/tv.svg';
import crash from '../../assets/crash.svg';
import { FaTrophy } from 'react-icons/fa';
import axios from 'axios';


const BASE_URL = "https://schoolcafe.ng/api/users.php";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]


const orders = [
  {
    id: 1,
    date: 'July 12, 2021',
    status: 'Easily Calculate your CGPA correctly and have it recorded so you never forget it.',
    name1: 'Easily',
    name2: 'Withdraw',
    name3: 'Your Earnings',
    href: '#',
    buttonText: 'Calculate',
    imageSrc: earning,
    data: 'CGPA',
    icon: Withdraw, 
  },
  {
    id: 2,
    date: 'June 21, 2021',
    status: 'Easily Calculate your CGPA correctly and have it recorded so you never forget it.',
    name1: 'Perform Daily',
    name2: 'Tasks & Earn',
    name3: 'More Money',
    href: '#',
    buttonText: 'Buy Now',
    imageSrc: activity,
    data: 'Airtime',
    icon: box,
  },
  {
    id: 3,
    date: 'June 6, 2021',
    status: 'Easily Calculate your CGPA correctly and have it recorded so you never forget it.',
    name1: 'See Your',
    name2: 'Position On',
    name3: 'Leader Board',
    href: '#',
    buttonText: 'Buy Now',
    imageSrc: leader,
    data: 'Past Question',
    icon: tv,
  },
  {
    id: 4,
    date: 'May 24, 2021',
    status: 'Easily Calculate your CGPA correctly and have it recorded so you never forget it.',
    name1: 'Refer Your',
    name2: 'Friends &',
    name3: 'Earn Money',
    href: '#',
    buttonText: 'Buy Now',
    imageSrc: refer,
    data: 'Data',
    icon: refer,
  },
]


const UserProfile = () => {
  const [userData, setUserData] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error
  const location = useLocation();
  
  // Create a URLSearchParams object to parse the query parameters
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email'); 

  // Function to fetch user data
  const fetchUser = async (email) => {
    try {
      const url = `${BASE_URL}?action=fetchUser&email=${encodeURIComponent(email)}`;
      setLoading(true); // Start loading
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const text = await response.text(); // Get the raw text response
      console.log("Raw Response:", text); // Log the raw response to inspect it

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      // Attempt to parse the JSON
      let data;
      try {
        data = JSON.parse(text); // Parse the text as JSON
      } catch (parseError) {
        throw new Error("Received non-JSON response from the server.");
      }

      setUserData(data.user); // Store the fetched user data (nested under 'user')
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setError(error.message); // Set the error message
    } finally {
      setLoading(false); // Stop loading regardless of success or error
    }
  };

  useEffect(() => {
    // Call fetchUser on page load if email is present
    if (email) {
      fetchUser(email); // Call the fetchUser function with the provided email
    }
  }, [email]); // Dependency array, fetch user when email changes

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if there's an issue
  }



  const handleCopy = () => {
    // Copy the referral code to the clipboard
    navigator.clipboard.writeText(userData.referral_code)
      .then(() => {
        // Optionally, you can show a success message or toast notification
        alert('Referral code copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy referral code. Please try again.');
      });
  };



  return (
    // <div>
    //   {/* Render user data here */}
    //   <h1>User Profile</h1>
    //   {userData && (
    //     <div>
    //       <p>Name: {userData.username}</p> {/* Access username here */}
    //       <p>Email: {userData.email}</p> {/* Access email here */}
    //       {/* Render more user data as needed */}
    //     </div>
    //   )}
    // </div>
    
    <div className="bg-white ">
      {userData && (


        <><div className="relative isolate px-6 pt-10  justify-between items-center mx-auto flex max-w-7xl p-6 lg:px-10">

          <div className="flex items-center">
            <img
              src={Avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full" />
            <div className="ml-3">
              <h1 className="text-lg font-bold">Hello {userData.username}!</h1>
              <span className="inline-flex items-center rounded-md bg-[#FFD400] px-2 py-1 text-xs font-medium text-[#00172A] ring-1 ring-inset ring-[#FFD400]">
                Rank: {userData.status}
              </span>
            </div>
          </div>

          {/* Added margin to separate profile info and buttons */}
          <div className="ml-5 space-x-3 flex">
            <span
      className="inline-flex items-center rounded-md bg-[#1D7BC7] px-2 py-2 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10"
      onClick={handleCopy} // Add the onClick handler
      style={{ cursor: 'pointer' }} // Change cursor to pointer
    >
      <img
        src={Copy}
        alt="Refer Friends"
        className="w-4 h-4 mr-2" />
      <span>Copy Referral Code</span>
    </span>

            <span
              className="inline-flex items-center rounded-md px-2 py-2 text-xs font-medium text-[#888888] ring-1 ring-inset ring-red-600/10"
            >
              <img
                src={Profile}
                alt="Edit Profile"
                className="w-4 h-4 mr-2" />
              <span>Edit Profile</span>
            </span>
          </div>


        </div><div>
            <Tools />
            <div className="p-8 bg-white min-h-screen ">
              {/* Your Rank Progress Section */}
              <div className="flex justify-center ">
                <div className=" rounded-[36px] p-4 mb-6 max-w-6xl w-full md:w-3/4 border-2 border-gray-300">
                  <div className='flex justify-between p-5'>
                    <h2 className="text-lg font-semibold mb-2">Your Rank Progress</h2>
                    <h2>
                      <a href="#" className="text-sm text-blue-600">Learn how to grow your rank faster &rarr;</a>
                    </h2>
                  </div>

                  <div className="flex items-center px-5">
                    {/* First Star */}
                    <img
                      src={Star1}
                      alt="Refer Friends"
                      className="w-4 h-4 mr-2" />

                    {/* Progress Bar */}
                    <div className="relative bg-gray-200 rounded-full h-2 flex-1">
                      <div className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full" style={{ width: '65%' }}></div>
                    </div>

                    {/* Second Star */}
                    <img
                      src={Star2}
                      alt="Refer Friends"
                      className="w-4 h-4 ml-2" />
                  </div>


                  <p className="text-sm text-gray-500 px-5">You are 85% away from achieving Amateur</p>
                </div>
              </div>

              <div className="flex justify-center ">
                <div className=" rounded-[36px] p-4 mb-6 max-w-6xl w-full md:w-3/4 border-2 border-gray-300">
                  <div className='flex justify-between p-5'>
                    <div className='flex space-x-2'>
                      <p className="border-4 border-black rounded-full w-20 h-20 flex justify-center items-center text-2xl font-bold">
                        1/2
                      </p>

                      <div>
                        <h2 className="text-2xl font-semibold mb-2 mt-2">Verify Your Details</h2>
                        <p>Complete your profile creation to get verified and earn more</p>
                        <p className="text-xs text-[#1D7BC7]">Get verified in 5 mins</p>
                      </div>

                    </div>

                    <h2>
                      <img src={Verify} alt="Verification icon" className="w-20 h-20" />
                    </h2>
                  </div>

                </div>
              </div>

              <div className="bg-white">
                <main className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="w-xl flex justify-between items-center">
                    <h1 className="text-3xl font-bold tracking-tight text-[#B3B3B3]">Quick Access</h1>
                    <h1 className="text-sm font-bold tracking-tight text-[#1D7BC7]">Edit</h1>
                  </div>


                  <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {orders.map((order) => (
                      <div key={order.id} className="relative border-2 rounded-3xl overflow-hidden shadow-md">
                        <div className="flex flex-col">
                          {/* Top Half */}
                          <div className="bg-[#00172A] p-6 flex space-x-3">
                            <div className='bg-white rounded-full p-2'>
                              <img
                                src={order.imageSrc}
                                alt="Order Icon"
                                className="w-30 h-20" />
                            </div>

                          </div>

                          {/* Bottom Half */}
                          <div className="bg-[#00172A] p-3 pb-6">
                            <div className="text-3xl font-semibold text-white flex items-center">
                              {order.data}
                              {/* Conditional Icon or Progress Bar */}
                              {order.buttonText === 'Check Leaderboard' && (
                                <img
                                  src={crash}
                                  alt="Button Icon"
                                  className="w-4 h-5 mt-3" />
                              )}
                            </div>

                            <h3 className="mt-4 text-sm text-white items-center">
                              <a href={order.href} className="">{order.status}</a>
                            </h3>
                            <button
                              className="mt-4 w-full flex items-center justify-center rounded-md bg-[#1D7BC7] text-white py-2 hover:bg-blue-700"
                              onClick={() => console.log(`${order.buttonText} clicked`)}
                            >
                              {/* <img
              src={order.icon}
              alt="Button Icon"
              className="w-5 h-5 mr-2"
            /> */}
                              <span className="text-sm">{order.buttonText}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>


                  <TransactionList />
                </main>
              </div>
            </div>
          </div></>

    )}    
  </div>



  );
};

export default UserProfile;
