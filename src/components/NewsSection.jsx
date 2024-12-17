import Cnn from '../assets/image.png';
import image2 from '../assets/news.jpg';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image6 from '../assets/image6.png';
import { useEffect, useRef } from "react";

export default function Example() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      let scrollSpeed = 1; // Adjust the speed of scrolling
      const scroll = () => {
        container.scrollLeft += scrollSpeed;

        // Reset scroll to the beginning when reaching the end of the duplicated content
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      };

      const interval = setInterval(scroll, 20); // Adjust for smoothness

      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="py-14 sm:py-6">
      <div className="mx-auto max-w-full px-6 lg:px-12">
        <div className="mx-auto max-w-6xl lg:max-w-none">
          <h2 className="text-[32px] font-semibold leading-8 text-gray-900 text-center">
            We Are In The News
          </h2>

          {/* Horizontal scroll container */}
          <div className="mt-10 flex justify-center">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-scroll whitespace-nowrap py-4 space-x-6 scrollbar-hide max-w-full lg:max-w-7xl"
              style={{ pointerEvents: 'auto' }}
            >
              {[
                image2,
                image2,
                image2,
                image2,
              ].map((imageSrc, index) => (
                <a
                  key={index}
                  href="https://thesun.ng/schoolnewsinfo-navigating-the-path-to-higher-education-in-nigeria-with-ease-and-confidence/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <img
                    alt={`News ${index + 1}`}
                    src={imageSrc}
                    width={200}
                    height={60}
                    className="max-h-16 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
