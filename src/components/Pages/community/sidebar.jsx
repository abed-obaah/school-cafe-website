import Coin from '../../../assets/coin.svg'; // headerButtons.jsx
import arrow from '../../../assets/arrow.svg'; // headerButtons.jsx

const Sidebar = () => {
  return (
    <div className="p-4"> {/* Reduced padding from 8 to 4 */}
      <div className="bg-[#00172A] text-white p-6 rounded-lg text-left max-w-md"> {/* Change text-center to text-left */}
        <img 
          src={Coin} 
          alt="Refer Friends" 
          className="mx-auto w-30 h-50 ml-4" // Adjusted size for the image, removed mx-auto
        />
       <div>
            <img 
                src={arrow} 
                alt="Refer Friends" 
                className="ml-[12rem] w-30 h-50" // Added left margin to move the image to the right
            />
            <h3 className="font-bold text-5xl mt-4">Refer Your <br/> Friends & Earn</h3>
            </div>

       
        {/* <p className="mt-2">Start Now</p> */}
        <button
            type="submit"
            className="w-[25rem] bg-[#1D7BC7] text-white p-3 rounded-md hover:bg-blue-600 transition duration-200 flex items-center justify-center mt-10"
          >
           Start Now
          </button>
      </div>
    </div>
  );
};

export default Sidebar;
