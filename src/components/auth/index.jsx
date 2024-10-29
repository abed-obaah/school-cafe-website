import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS
import Cafe from '../../assets/cafe.svg';
import LeftBackground from '../../assets/side.svg'; // Replace with your actual image path
import RightBackground from '../../assets/side.svg'; // Replace with your actual image path
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // State to switch between Login and Register forms
  const navigate = useNavigate(); // Navigation hook

  return (
    <div className="flex h-screen bg-white justify-center items-center flex-col relative overflow-hidden">
      {/* Background Images */}
      <div
        className="absolute inset-y-0 top-[40%] left-0 w-[5%] h-[10%] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${LeftBackground})` }}
      />
      <div
        className="absolute inset-y-0 right-0 w-[5%] h-[10%] top-[80%] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${RightBackground})` }}
      />

      {/* Top Center Logo */}
      <img
        alt="Cafe Logo"
        src={Cafe}
        className="h-8 w-auto mb-5"
      />

      {/* Content Wrapper for Carousel and Forms */}
      <div className="flex flex-col lg:flex-row w-full justify-center">
        {/* Left side: Image Carousel */}
        <div className="w-full lg:w-1/3 flex items-center justify-center p-5">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            interval={3000}
          >
            <div>
              <img
                src="https://via.placeholder.com/600x400?text=Image+1"
                alt="Slide 1"
                className="rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x400?text=Image+2"
                alt="Slide 2"
                className="rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x400?text=Image+3"
                alt="Slide 3"
                className="rounded-lg"
              />
            </div>
          </Carousel>
        </div>

        {/* Right side: Login/Register Form */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center p-5">
          <div className="flex justify-around w-full mb-6">
            <button
              className={`text-lg px-4 py-2 border-b-2 ${
                isLogin ? "border-[#1D7BC7] text-[#1D7BC7]" : "border-transparent text-[#B3B3B3]"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`text-lg px-4 py-2 border-b-2 ${
                !isLogin ? "border-[#1D7BC7] text-[#1D7BC7]" : "border-transparent text-[#B3B3B3]"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Create Account
            </button>
          </div>

          {/* Form */}
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer for notifications */}
    </div>
  );
}

// Login Form
const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const promise = fetch("https://schoolcafe.ng/api/users.php?action=login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Show the toast notifications for the promise
    toast.promise(
      promise,
      {
        pending: 'Logging in...',
        success: {
          render({ data }) {
            return `Welcome back!`;
          },
        },
        error: {
          render({ data }) {
            return `Login failed: ${data.message || 'Unknown error'}`;
          },
        },
      }
    );

    try {
      const response = await promise;
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Wait for the toast message to display before navigating
      toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000); // Wait 1 second before resolving
        }),
        {
          success: {
            render() {
              navigate(`/dashboard?email=${encodeURIComponent(email)}`);
              return '';
            },
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col w-full max-w-md" onSubmit={handleLogin}>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
          required
        />
      </div>
      <a href="#" className="text-sm text-[#1D7BC7] mb-6 text-left">
        Forgot Password?
      </a>
      <button
        type="submit"
        className="w-full bg-[#1D7BC7] text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Login
      </button>
    </form>
  );
};

// Register Form
const RegisterForm = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const referrer_code = e.target.referralCode.value; // Ensure this matches the backend
    const password = e.target.password.value;

    const promise = fetch("https://schoolcafe.ng/api/users.php?action=register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, referrer_code }),
    });

    toast.promise(
      promise,
      {
        pending: 'Creating account...',
        success: {
          render({ data }) {
            return `Account created successfully!`;
          },
        },
        error: {
          render({ data }) {
            return `Registration failed: ${data.message || 'Unknown error'}`;
          },
        },
      }
    );

    try {
      const response = await promise;
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col w-full max-w-md" onSubmit={handleRegister}>
      <div className="mb-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="referralCode"
          placeholder="Referral Code"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
          required
        />
      </div>
      <div className="mb-3 flex items-center">
        <input
          defaultChecked
          id="same-as-shipping"
          name="same-as-shipping"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <div className="ml-2">
          <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-700">
            I accept the Terms and Conditions
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-[#1D7BC7] text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Create Account
      </button>
    </form>
  );
}

export default Login;
