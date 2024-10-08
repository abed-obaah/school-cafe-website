import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cafe from '../../assets/Cafe.svg';

// Import your left and right background images
import LeftBackground from '../../assets/side.svg'; // Replace with your actual image path
import RightBackground from '../../assets/side.svg'; // Replace with your actual image path

function Login() {
  const [isLogin, setIsLogin] = useState(true);
//   w-1\/3 {
//     width: 5.333333%;
// }

// <style>
// .h-full {
//     height: 41%;
// }

  return (
    <div className="flex h-screen bg-white justify-center items-center flex-col relative overflow-hidden">
      {/* Background Images */}
      <div
        className="absolute inset-y-0  top-[40%] left-0 w-[5%] h-[10%] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${LeftBackground})` }}
      />
      <div
        className="absolute inset-y-0 right-0 w-[5%] h-[10%] top-[80%]  bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${RightBackground})` }}
      />

      {/* Top Center Logo */}
      <img
        alt=""
        src={Cafe}
        className="h-8 w-auto mb-5"
      />
      
      {/* Content Wrapper for Carousel and Forms */}
      <div className="flex w-full justify-center">
        {/* Left side: Image Carousel */}
        <div className="w-1/3 flex items-center justify-center p-5">
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
        <div className="w-1/3 flex flex-col justify-center items-center p-5">
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
              Register
            </button>
          </div>

          {/* Form */}
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
}

// Login Form
const LoginForm = () => (
  <form className="flex flex-col w-full max-w-md">
    <div className="mb-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
        required
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
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

// Register Form
const RegisterForm = () => (
  <form className="flex flex-col w-full max-w-md">
    <div className="mb-4">
      <input
        type="text"
        placeholder="Username"
        className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
        required
      />
    </div>
    <div className="mb-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border border-[#B3B3B33B] bg-[#B3B3B33B] outline-none"
        required
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
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
        <label htmlFor="same-as-shipping" className="text-sm font-medium text-[#B3B3B3]">
          Creating an Account means you are okay with our <br />
          <span style={{ color: "#1D7BC7" }}>Terms and Conditions</span>
        </label>
      </div>
    </div>
    <button
      type="submit"
      className="w-full bg-[#1D7BC7] text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
    >
      Register
    </button>
  </form>
);

export default Login;
