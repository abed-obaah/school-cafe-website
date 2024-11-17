import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from '../../assets/cafe.svg';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [transactionType, setTransactionType] = useState(""); // "credit" or "debit"
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState(""); // Form data
  const [page, setPage] = useState(1); // Pagination state
  const [limit] = useState(10); // Number of users per page
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering users
  const [totalUsers, setTotalUsers] = useState(0); // Total number of users for pagination

  // Fetch users from the API with pagination and search
  useEffect(() => {
    const fetchUsers = async () => {
      if (!searchTerm && page === 1) {  // Handle empty search term
        setUsers([]);  // Clear users if search term is empty and page is 1
        return;
      }
      try {
        const response = await axios.get(
          `https://schoolcafe.ng/api/getUsers.php?action=fetchUsers&page=${page}&limit=${limit}&search=${searchTerm}`
        );
        if (response.data && response.data.users) {
          setUsers(response.data.users);
          setTotalUsers(response.data.totalUsers); // Ensure the total users count is coming from the API
        } else {
          console.error("No users found");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [page, limit, searchTerm]); // Re-fetch when page, limit, or search term changes

  // Handle Credit/Debit button click
  const handleTransaction = (user, type) => {
    setSelectedUser(user);
    setTransactionType(type);
    setIsModalOpen(true);
  };

  // Submit the form for credit/debit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint =
      transactionType === "credit"
        ? "https://schoolcafe.ng/api/credit.php?action=creditUser"
        : "https://schoolcafe.ng/api/credit.php?action=debitUser";

    try {
      const response = await axios.post(endpoint, {
        email: selectedUser.email, // Pass the email from the selected user
        amount,
        description,
      });
      console.log("Response:", response.data);
      alert(response.data.message || "Transaction successful!");
    } catch (error) {
      console.error("Transaction error:", error);
      alert("Transaction failed. Please try again.");
    } finally {
      setIsModalOpen(false);
      setAmount("");
      setDescription("");
    }
  };

  // Handle Search term change
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);  // Update search term
  };

  // Handle Search button click
  const handleSearch = () => {
    setPage(1);  // Reset to the first page when search is triggered
  };

  // Handle Pagination change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Calculate total pages
  const totalPages = Math.ceil(totalUsers / limit);

  return (
    <main className="-mt-32">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
          <h1 className="text-xl font-bold mb-6">User Management</h1>
          
          {/* Search Input with Button */}
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={handleSearchInputChange}
              className="border border-gray-300 px-3 py-2 rounded-l w-full"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded-r"
            >
              Search
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2">Name</th>
                  <th className="border border-gray-200 px-4 py-2">Email</th>
                  <th className="border border-gray-200 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="border border-gray-200 px-4 py-2">{user.username}</td>
                    <td className="border border-gray-200 px-4 py-2">{user.email}</td>
                    <td className="border border-gray-200 px-4 py-2">
                      <button
                        onClick={() => handleTransaction(user, "credit")}
                        className="text-green-500"
                      >
                        Credit
                      </button>
                      <button
                        onClick={() => handleTransaction(user, "debit")}
                        className="text-red-500 ml-4"
                      >
                        Debit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4">
              <button
                onClick={() => handlePageChange(page > 1 ? page - 1 : page)}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-300 rounded-l"
              >
                Previous
              </button>
              <span className="px-4 py-2">{`Page ${page} of ${totalPages}`}</span>
              <button
                onClick={() => handlePageChange(page < totalPages ? page + 1 : page)}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-300 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-xl mb-4">{transactionType === "credit" ? "Credit" : "Debit"} User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserManagement;
