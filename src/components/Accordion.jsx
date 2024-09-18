import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I apply for a student loan in Nigeria?",
      answer: "To apply for the Federal Government Student Loan, you must meet the following eligibility criteria: As expected, you have to be a Nigerian student to apply. You must also not have defaulted on any previous loans or been found guilty of exam malpractice, felony, or drug offenses."
    },
    {
      question: "What are the best ways to manage my finances during NYSC?",
      answer: "Managing finances during NYSC requires budgeting, saving part of your allowance, and possibly finding part-time work."
    },
    {
      question: "What are the best ways to manage my finances during NYSC?",
      answer: "Managing finances during NYSC requires budgeting, saving part of your allowance, and possibly finding part-time work."
    },
    {
      question: "What are the best ways to manage my finances during NYSC?",
      answer: "Managing finances during NYSC requires budgeting, saving part of your allowance, and possibly finding part-time work."
    },
    {
      question: "What are the best ways to manage my finances during NYSC?",
      answer: "Managing finances during NYSC requires budgeting, saving part of your allowance, and possibly finding part-time work."
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg mb-4">
          <div
            className="bg-blue-100 px-4 py-3 flex justify-between items-center cursor-pointer border-b border-gray-400"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-xl font-medium text-[#00172A]">{faq.question}</h3>
            <span>{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && (
            <div className="bg-blue-100 px-4 py-8">
              <p className="text-[#696969]"><strong>Answer: </strong>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
