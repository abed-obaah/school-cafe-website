import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS
import Cafe from '../../assets/cafe.svg';
import LeftBackground from '../../assets/side.svg'; // Replace with your actual image path
import RightBackground from '../../assets/side.svg'; // Replace with your actual image path
import { useNavigate } from 'react-router-dom';
import woman1 from '../../assets/woman2.webp';
import woman2 from '../../assets/woman3.jpg';
import { useUserContext } from '../../UserContext';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // State to switch between Login and Register forms
  const { login } = useUserContext(); // Get login function from context
  const navigate = useNavigate();

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
        className="h-10 w-auto mb-10"
      />

      {/* Content Wrapper for Carousel and Forms */}
      <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-2"> {/* Reduced gap between columns */}
        {/* Left side: Image Carousel (Hidden on smaller screens) */}
        <div className="hidden lg:flex w-full lg:w-1/3 items-center justify-center p-5">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            interval={3000}
          >
            <div>
              <img
                src={woman1}
                alt="Slide 1"
                className="rounded-lg"
              />
            </div>
            <div>
              <img
                src={woman1}
                alt="Slide 2"
                className="rounded-lg"
              />
            </div>
          </Carousel>
        </div>

        {/* Right side: Login/Register Form */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center sm:mx-4"> {/* Add margin on smaller screens */}
          <div className="text-left mb-6 w-full sm:ml-8">
            <h1 className="text-2xl font-bold text-center sm:text-left">
              {isLogin ? "Login" : "Create an account"}
            </h1>
            <p className="text-sm text-gray-500 text-center sm:text-left">
                  {isLogin ? "Please enter your email to login to your account" : "Please fill in details to create an account"}
                </p>


          </div>

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
  // const { login } = useUserContext();
  const navigate = useNavigate();

  const { login } = useUserContext();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    const loginPromise = fetch("https://schoolcafe.ng/api/users.php?action=login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    toast.promise(
      loginPromise,
      {
        pending: "Logging in...",
        success: "Welcome back!",
        error: {
          render({ data }) {
            return `Login failed: ${data.message || 'Unknown error'}`;
          },
        },
      }
    );
  
    try {
      const response = await loginPromise;
      const data = await response.json();
      console.log("Login response:", data);
  
      if (response.ok && data.message === "Login successful.") {
        login(data.user); // Persist user login data
        toast.success("Login successful!", {
          onClose: () => {
            navigate(`/dashboard`);
          },
        });
      } else {
        throw new Error(data.error || 'Invalid login attempt.');
      }
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    }
  };
  

  return (
    <form className="flex flex-col w-full max-w-md px-4 sm:px-0" onSubmit={handleLogin}>
      <div className="mb-8">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
          required
        />
      </div>
      <div className="mb-8">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
          required
        />
      </div>
      <a href="#" className="text-sm text-[#1D7BC7] mb-8 text-left">
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
    const referrer_code = e.target.referralCode.value;
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
          render() {
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
    <form className="flex flex-col w-full max-w-md px-4 sm:px-0" onSubmit={handleRegister}>
      <div className="mb-8">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
          required
        />
      </div>
      <div className="mb-8">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
          required
        />
      </div>
      <div className="mb-8">
        <input
          type="text"
          name="referralCode"
          placeholder="Referral Code"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
        />
      </div>
      <div className="mb-8">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#1D7BC7] text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Create Account
      </button>
    </form>
  );
};

export default Login;
