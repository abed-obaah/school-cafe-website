import React, { useState, useEffect } from 'react';
import incoming from '../../assets/incoming.svg';
import outgoing from '../../assets/outgoing.svg';

const TransactionList = ({ userData }) => {
  const [paymentData, setPaymentData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (userData) {
      const fetchTransactions = async () => {
        try {
          const userId = userData.id;
          const response = await fetch(
            `https://schoolcafe.ng/api/users.php?action=fetchTransactions&user_id=${userId}`
          );
          const data = await response.json();
          if (data.transactions && Array.isArray(data.transactions)) {
            setPaymentData(data.transactions);
          } else {
            console.error("Invalid data format:", data);
          }
        } catch (error) {
          console.error("Error fetching transactions:", error);
        }
      };

      fetchTransactions();
    } else {
      console.warn('userData is not defined');
    }
  }, [userData]);

  const displayedPayments = showAll ? paymentData : paymentData.slice(0, 7);

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-8 mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#B3B3B3]">Transaction List</h1>
        </div>

        <div className="space-y-6">
          {displayedPayments.map((payment, index) => (
            <div key={index} className="flex justify-center">
              <div className="rounded-2xl w-full max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl border-2 border-gray-300">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    {/* Left Side: Icon + Text */}
                    <div className="flex items-start sm:items-center">
                      <img
                        src={payment.transaction_type === "credit" ? incoming : outgoing}
                        alt={`${payment.transaction_type} icon`}
                        className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4"
                      />
                      <div>
                        <span className="text-xs text-[#B3B3B3]">
                          {new Date(payment.created_at).toLocaleString()}
                        </span>
                        <h2 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">
                          {payment.title} {payment.amount}
                        </h2>
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
          <div className="mt-5 flex justify-center">
            <button
              className="text-sm text-blue-600"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default TransactionList;
