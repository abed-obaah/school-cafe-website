const HeaderButtons = () => {
    return (
      <div className="flex justify-between items-center py-4 px-8">
        <div className="flex space-x-8">
          <button
            type="submit"
            className="w-64 bg-[#1D7BC7] text-white p-3 rounded-md hover:bg-blue-600 transition duration-200 flex items-center justify-center"
          >
            Add a new thread
            <div className="ml-2 flex items-center justify-center bg-[#1D7BC7] rounded-full w-6 h-6 mr-2 border-2 border-white"> {/* Circle container with border */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white" // Icon color to match border
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
            
          </button>
                    <button className="border-2 border-[#1D7BC7] text-[#1D7BC7] px-4 py-2 rounded-lg flex items-center">
            Replies
            <div className="flex items-center justify-center bg-[#1D7BC7] text-white rounded-full w-5 h-5 ml-2">
                {/* Replace '5' with the actual number you want to display */}
                5
            </div>
            </button>
          <button className="border-2 border-[#1D7BC7] text-[#1D7BC7] px-4 py-2 rounded-lg flex items-center">
          Notifications
        <div className="flex items-center justify-center bg-[#1D7BC7] text-white rounded-full w-5 h-5 ml-2">
            {/* Replace '5' with the actual number you want to display */}
            19
        </div>
        </button>
        </div>
      </div>
    );
  };
  
  export default HeaderButtons;
  