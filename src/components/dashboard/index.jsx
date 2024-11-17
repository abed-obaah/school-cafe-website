import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Bars3Icon, XMarkIcon, ClipboardIcon } from '@heroicons/react/24/outline'
import Avatar from '../../assets/avatar.svg';
import Copy from '../../assets/copy.svg';
import Profile from '../../assets/profile.svg';
import Star1 from '../../assets/solar_star-bold-duotone.svg';
import Star2 from '../../assets/solar_star-bold.svg';
import Verify from '../../assets/verify.svg';
import Pending from '../../assets/pending.jpeg';
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
import { useUserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';


const BASE_URL = "https://schoolcafe.ng/api/users.php";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]


// endpoint to view the tasks 'https://schoolcafe.ng/api/get_pending_tasks.php?user_id=9'
// endpoint to complete the tasks "https://schoolcafe.ng/api/complete_task.php {
//   "user_id": 9,
//   "task_id": 12
// }"

//https://schoolcafe.ng/api/getLeaderboard.php ---endpoint to call the leaderboard

//https://schoolcafe.ng/api/check_verifications.php?user_id=13 api to check verification
//https://schoolcafe.ng/api/verifications.php api to upload verification


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
  const { user } = useUserContext();
  const navigate = useNavigate(); // Initialize useNavigate hook
  // {user.email}

  const [verificationData, setVerificationData] = useState({
    institution: null,
    student_id_card: null,
    status: "",
    progress: 0
  });

  // https://schoolcafe.ng/register/?refID=
  
  useEffect(() => {
    console.log('email:',user?.email)
    if (userData) {
      const checkVerificationStatus = async () => {
        try {
          const response = await fetch(`https://schoolcafe.ng/api/check_verifications.php?user_id=${userData.id}`);
          const data = await response.json();
          
          // Log the entire response for debugging purposes
          // console.log("API Response: ", data);
  
          // Check if the response contains an error
          if (data.error) {
            console.log("Error Message: ", data.error); // Log the error message
  
            // Check if the error matches 'No verification data found for the user'
            if (data.error === 'No verification data found for the user') {
              console.log("No verification data found, setting status to 'Verify Your Details'");
  
              // Set verification data status to 'Verify Your Details'
              setVerificationData({
                institution: null,
                student_id_card: null,
                status: "Verify Your Details", // Update the status to "Verify Your Details"
                progress: 0
              });
            } else {
              // Log any other errors if needed
              // console.log("Other error: ", data.error);
            }
          } else {
            // Process the verification data if no error is present
            const { institution, student_id_card } = data.data;
            let progress = 0;
            
            // Increment progress based on available data
            if (institution) progress += 1;
            if (student_id_card) progress += 1;
  
            // console.log("Verification Progress: ", progress); // Log progress
  
            // Set the status based on progress
            setVerificationData({
              institution,
              student_id_card,
              status: progress === 2 ? "Details Updated" : "One Detail Left to Verify",
              progress
            });
          }
        } catch (error) {
          console.error("Error fetching verification data:", error);
        }
      };
  
      checkVerificationStatus();
    }
  }, [userData]);
  
  
  
  
  
  
  
  
  // Create a URLSearchParams object to parse the query parameters
  const queryParams = new URLSearchParams(location.search);
  // const email = queryParams.get('email'); 
  // const email = queryParams.get('email'); 

  // // Function to fetch user data
  // const fetchUser = async (email) => {
  //   try {
  //     const url = `${BASE_URL}?action=fetchUser&email=${encodeURIComponent(email)}`;
  //     setLoading(true); // Start loading
  //     const response = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const text = await response.text(); // Get the raw text response
  //     console.log("Raw Response:", text); // Log the raw response to inspect it

  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status} ${response.statusText}`);
  //     }

  //     // Attempt to parse the JSON
  //     let data;
  //     try {
  //       data = JSON.parse(text); // Parse the text as JSON
  //     } catch (parseError) {
  //       throw new Error("Received non-JSON response from the server.");
  //     }

  //     setUserData(data.user); // Store the fetched user data (nested under 'user')
  //     setError(null); // Clear any previous errors
  //   } catch (error) {
  //     console.error("Failed to fetch user data:", error);
  //     setError(error.message); // Set the error message
  //   } finally {
  //     setLoading(false); // Stop loading regardless of success or error
  //   }
  // };

  // useEffect(() => {
  //   // Call fetchUser on page load if email is present
  //   if (email) {
  //     fetchUser(email); // Call the fetchUser function with the provided email
  //   }
  // }, [email]); // Dependency array, fetch user when email changes
  // user?.email

  const fetchUser = async (email) => {
    try {
      const url = `${BASE_URL}?action=fetchUser&email=${user?.email}`;
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
    // Call fetchUser on page load if user.email is present
    if (user && user.email) {
      fetchUser(user.email); // Call the fetchUser function with the email from user context
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if there's an issue
  }
  // https://schoolcafe.ng/register/?refID=


  // const handleCopy = () => {
  //   // Copy the referral code to the clipboard
  //   navigator.clipboard.writeText(userData.referral_code)
  //     .then(() => {
  //       // Optionally, you can show a success message or toast notification
  //       alert('Referral code copied to clipboard!');
  //     })
  //     .catch((err) => {
  //       console.error('Failed to copy: ', err);
  //       alert('Failed to copy referral code. Please try again.');
  //     });
  // };

  const handleCopy = () => {
    // Construct the full referral URL with the code
    // const referralUrl = `https://schoolcafe.ng/register/?refID=${userData.referral_code}`;
    // const referralUrl = `https://schoolcafe.ng/register/?refID=${userData.referral_code}`;
    const referralUrl = `https://schoolcafe.ng/?refID=${userData.referral_code}`;
  
    // Copy the referral URL to the clipboard
    navigator.clipboard.writeText(referralUrl)
      .then(() => {
        // Optionally, you can show a success message or toast notification
        alert('Referral link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy referral link. Please try again.');
      });
  };
  

  

  const handleVerificationClick = () => {
    // Navigate to the /verification page
    navigate('/verification');
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


        <>
       <div className="relative isolate px-6 pt-10 flex flex-col lg:flex-row justify-between items-center mx-auto max-w-7xl lg:px-10">

{/* Profile and Rank section */}
<div className="flex items-center w-full lg:w-auto">
  <img
    src={Avatar}
    alt="Profile"
    className="w-10 h-10 rounded-full"
  />
  <div className="ml-3 w-full lg:w-auto">
    <h1 className="text-lg font-bold">Hello {userData.username}!</h1>
    <span className="inline-flex items-center rounded-md bg-[#FFD400] px-2 py-1 text-xs font-medium text-[#00172A] ring-1 ring-inset ring-[#FFD400]">
      Rank: {userData.status}
    </span>
  </div>
</div>

{/* Profile actions section */}
<div className="mt-4 lg:mt-0 w-full flex flex-col sm:flex-row lg:w-auto lg:ml-5 lg:space-x-3 justify-center lg:justify-start">
  {/* Copy Referral Code Button */}
  <span
    className="inline-flex items-center justify-center rounded-md bg-[#1D7BC7] px-4 py-2 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10 mb-2 sm:mb-0 lg:mb-0 cursor-pointer"
    onClick={handleCopy} 
  >
    <img
      src={Copy}
      alt="Refer Friends"
      className="w-4 h-4 mr-2"
    />
    <span>Copy Referral Code</span>
  </span>

  {/* Edit Profile Button */}
  <span
    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium text-[#888888] ring-1 ring-inset ring-red-600/10"
  >
    <img
      src={Profile}
      alt="Edit Profile"
      className="w-4 h-4 mr-2"
    />
    <span>Edit Profile</span>
  </span>
</div>

</div>



            <div>
                  <Tools userData={userData} />
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
                                <div className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full" style={{ width: '5%' }}></div>
                              </div>

                              {/* Second Star */}
                              <img
                                src={Star2}
                                alt="Refer Friends"
                                className="w-4 h-4 ml-2" />
                            </div>


                            <p className="text-sm text-gray-500 px-5">You are 95% away from achieving Amateur</p>
                          </div>
                        </div>

                        <div className="flex justify-center" onClick={handleVerificationClick}>
  <div className="rounded-[36px] p-4 mb-6 max-w-6xl w-full md:w-3/4 border-2 border-gray-300">
    <div className="flex flex-col md:flex-row justify-between p-5">
      <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-2 mb-4 md:mb-0">
        {/* Circle Progress */}
        <p className="border-4 border-black rounded-full w-20 h-20 flex justify-center items-center text-2xl font-bold">
          {verificationData.progress}/2
        </p>

        <div className="mt-2 md:mt-0 md:ml-3">
          <h2 className="text-2xl font-semibold mb-2">
            {/* Display the status from verificationData */}
            {verificationData.status || (verificationData.progress === 2 ? "Details Verified" : "One Detail Left to Verify")}
          </h2>
          <p>Complete your profile creation to get verified and earn more</p>
          <p className="text-xs text-[#1D7BC7]">Get verified in 5 mins</p>
        </div>
      </div>

      {/* Conditionally render the verification icon if verify is 1 */}
      <div className="flex justify-center md:justify-end mt-4 md:mt-0">
        {userData && userData.verify === 1 ? (
          <img src={Verify} alt="Verification icon" className="w-20 h-20" />
        ) : (
          <img src={Pending} alt="Pending verification icon" className="w-20 h-20" />
        )}
      </div>
    </div>
  </div>
                          </div>





                        <div className="bg-white">
                          <main className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="w-xl flex justify-between items-center">
                              <h1 className="text-3xl font-bold tracking-tight text-[#B3B3B3]">Quick Access</h1>
                              <h1 className="text-sm font-bold tracking-tight text-[#1D7BC7]">Edit</h1>
                              {/* <h1 className="text-sm font-bold tracking-tight text-[#1D7BC7]">{userData.id}</h1> */}
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
                                        {order.buttonText === 'Check Leader board' && (
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


                            <TransactionList userData={userData} />
                          </main>
                        </div>
                      </div>
              </div>
          
          </>

    )}    
  </div>



  );
};

export default UserProfile;
