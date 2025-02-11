import { useState } from "react";
import { Link } from "react-router-dom";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "History & International Studies",
      content: "History & International Studies is a four years in DELSU with access to bla bla bla bla History & International Studies is a four years in DELSU with access to bla bla bla bla History & International Studies is a four years in DELSU with access to bla bla bla bla History & International Studies is a four years in DELSU with access to bla bla bla bla History & International Studies is a four years in DELSU with access to bla bla bla bla History & International Studies is a four years.",
      button:"View Course Past Questions",
      link: "/course-history",
    },
    {
      title: "Faculty Of Arts",
      content: "All past questions and resources for Faculty Of Arts are available here.",
      button:"Faculty Of Arts",
      link: "/faculty-arts",
    },
    {
      title: "Faculty Of Arts",
      content: "Details and resources for the Faculty Of Arts...",
      button:"Faculty Of Arts",
      link: "/faculty-arts",
    },
    {
      title: "Faculty Of Arts",
      content: "This section contains useful information for the Faculty Of Arts.",
      button:"Faculty Of Arts",
      link: "/faculty-arts",
    },
    {
      title: "Faculty Of Arts",
      content: "Explore materials and other related resources for Faculty Of Arts.",
      button:"Faculty Of Arts",
      link: "/faculty-arts",
    },
  ];

  return (
    <div className="w-full max-w-[90em] mx-auto my-8">
      {accordionItems.map((item, index) => (
        <div key={index} className="border border-gray-200 mb-2 rounded-md">
          {/* Accordion Button */}
          <button
            onClick={() => toggleAccordion(index)}
            className="flex items-center justify-between w-full p-5 text-left text-gray-700 font-medium hover:bg-gray-100 focus:outline-none"
          >
            <span className="text-lg font-bold"> {item.title}</span>
            <svg
              className={`w-5 h-5 transform ${
                openIndex === index ? "rotate-180" : "rotate-0"
              } transition-transform duration-300`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Accordion Content */}
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="p-5 text-gray-600">{item.content}</p>
            <div className="flex justify-center mb-5">
            <Link to={item.link}>
                <button
                    className="mt-2 sm:mt-4 bg-[#1D7BC7] text-white w-full sm:w-[20em] lg:w-[80em] py-4 sm:py-4 rounded flex items-center justify-center gap-2"
                >
                    <span className="text-xs sm:text-base">{item.button}</span>
                </button>
                </Link>
                </div>



          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
