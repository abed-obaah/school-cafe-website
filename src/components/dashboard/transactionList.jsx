import React, { useState, useEffect } from 'react';
import incoming from '../../assets/incoming.svg';
import outgoing from '../../assets/outgoing.svg';

const TransactionList = ({ userData }) => {
  const [paymentData, setPaymentData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (userData) {
      console.log('userData:', userData); // Check if userData is defined
      console.log(userData.id); // Log user ID if userData is defined

      const fetchTransactions = async () => {
        try {
          const userId = userData.id; // Use the dynamic user ID from userData
          const response = await fetch(`https://schoolcafe.ng/api/users.php?action=fetchTransactions&user_id=${userId}`);
          const data = await response.json();
          console.log("trans:",data)
          
          if (data.transactions && Array.isArray(data.transactions)) {
            setPaymentData(data.transactions); // Use the transactions array
          } else {
            console.error("Invalid data format:", data);
          }
        } catch (error) {
          console.error("Error fetching transactions:", error);
        }
      };

      fetchTransactions();
    } else {
      console.warn('userData is not defined'); // Warning message
    }
  }, [userData]); // Run effect whenever userData changes

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
                        src={payment.transaction_type === "credit" ? incoming : outgoing}
                        alt={`${payment.transaction_type} icon`}
                        className="w-10 h-10 mr-4"
                      />
                      <div>
                        <span className="text-xs text-[#B3B3B3]">{new Date(payment.created_at).toLocaleString()}</span>
                        {/* <h2 className="text-lg font-semibold mb-2">{`Payment of NGN${payment.amount}`}</h2> */}
                        <h2 className="text-lg font-semibold mb-2">{payment.title} {payment.amount}</h2>
                      </div>
                    </div>

                    {/* Right Side: Payment Amount */}
                    <a
                      href="#"
                      className={`text-md ${
                        payment.transaction_type === "credit" ? "text-[#0CD241]" : "text-red-500"
                      }`}
                    >
                      {`NGN${payment.amount}`}
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
};

export default TransactionList;
