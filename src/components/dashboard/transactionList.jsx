import { FaChartBar, FaTasks } from 'react-icons/fa'; // Importing icons
import { Fragment, useState } from 'react';
import incoming from '../../assets/incoming.svg';
import outgoing from '../../assets/outgoing.svg';

export default function Example() {
  const paymentData = [
    {
      title: "Referral Payment",
      date: "Today 12:00am",
      amount: "NGN6,000",
      type: "incoming",
    },
    {
      title: "Airtime Payment",
      date: "Today 12:00am",
      amount: "NGN6,000",
      type: "outgoing",
    },
    {
      title: "Past Question Payment",
      date: "Yesterday 10:30am",
      amount: "NGN3,000",
      type: "incoming",
    },
    // Add more items to exceed 7 if you want to test the Show All functionality
    {
      title: "Tuition Fee Payment",
      date: "Last Week 9:00am",
      amount: "NGN50,000",
      type: "outgoing",
    },
    {
      title: "Book Payment",
      date: "Yesterday 1:30pm",
      amount: "NGN12,000",
      type: "incoming",
    },
    {
      title: "Event Payment",
      date: "Today 4:00pm",
      amount: "NGN15,000",
      type: "outgoing",
    },
    {
      title: "Transport Fee Payment",
      date: "Last Month 8:00am",
      amount: "NGN7,000",
      type: "incoming",
    },
    {
      title: "Laptop Payment",
      date: "Yesterday 2:15pm",
      amount: "NGN90,000",
      type: "incoming",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Determine how many items to display
  const displayedPayments = showAll ? paymentData : paymentData.slice(0, 7);

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-xl mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-[#B3B3B3]">Transaction List</h1>
        </div>

        <div>
          {displayedPayments.map((payment, index) => (
            <div key={index} className="flex justify-center mt-5">
              <div className="rounded-[36px] p-0 max-w-7xl w-full md:w-4/4 border-2 border-gray-300">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    {/* Left Side: Icon + Text */}
                    <div className="flex items-center">
                      <img
                        src={payment.type === "incoming" ? incoming : outgoing}
                        alt={`${payment.title} icon`}
                        className="w-10 h-10 mr-4"
                      />
                      <div>
                        <span className="text-xs text-[#B3B3B3]">{payment.date}</span>
                        <h2 className="text-lg font-semibold mb-2">{payment.title}</h2>
                      </div>
                    </div>

                    {/* Right Side: Payment Amount */}
                    <a
                      href="#"
                      className={`text-md ${
                        payment.type === "incoming" ? "text-[#0CD241]" : "text-red-500"
                      }`}
                    >
                      {payment.amount}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All link - only displayed if paymentData has more than 7 items */}
        {paymentData.length > 7 && (
          <div className="mt-5 flex justify-start">
            <a
              href="#"
              className="text-sm text-blue-600"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show All"}
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
