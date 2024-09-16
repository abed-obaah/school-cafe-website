import Cnn from '../assets/image.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image6 from '../assets/image6.png'




export default function Example() {
  return (
    <div className="bg-[#EDF7FF] py-24 sm:py-32">
      <div className="mx-auto max-w-full px-6 lg:px-12"> {/* Increased container width */}
        <div className="mx-auto max-w-6xl lg:max-w-none"> {/* Adjusted internal max width */}
          <h2 className="text-[24px] font-semibold leading-8 text-gray-900 ">
          We Are In The News
          </h2>

          {/* Horizontal scroll container with increased spacing */}
          <div className="mt-10 flex overflow-x-auto space-x-16 py-4 sm:space-x-20 lg:space-x-24 scrollbar-hide">
            <img
              alt="Transistor"
              src={Cnn}
              width={200} 
              height={60}
              className="max-h-16 w-auto object-contain"
            />
            <img
              alt="Reform"
              src={image2}
              width={200}
              height={60}
              className="max-h-16 w-auto object-contain"
            />
            <img
              alt="Tuple"
              src={image3}
              width={200}
              height={60}
              className="max-h-16 w-auto object-contain"
            />
            <img
              alt="SavvyCal"
              src={image4}
              width={200}
              height={60}
              className="max-h-16 w-auto object-contain"
            />
            <img
              alt="Statamic"
              src={image6}
              width={200}
              height={60}
              className="max-h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
