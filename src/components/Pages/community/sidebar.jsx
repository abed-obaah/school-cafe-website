// headerButtons.jsx
const Sidebar = () => {
    return (
        <div className="p-8">
        <div className="bg-blue-800 text-white p-6 rounded-lg text-center">
          <img 
            src="icon-url"
            alt="Refer Friends"
            className="mx-auto w-16 h-16"
          />
          <h3 className="font-bold text-lg mt-4">Refer Your Friends & Earn</h3>
          <p className="mt-2">Start Now</p>
          <button className="bg-white text-blue-800 mt-4 px-4 py-2 rounded-lg">
            Start Now
          </button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  