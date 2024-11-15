'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import Logo from '../../assets/logoProfile.svg';
import upload from '../../assets/upload.svg';
import right from '../../assets/right.svg';
import user from '../../assets/change.svg';
import axios from 'axios';
import { useUserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';



import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    PhoneIcon,
    PlayCircleIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';
import Avatar from '../../assets/avatar.svg';
import AvatarUser from '../../assets/null.png';
import { Link } from 'react-router-dom';

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const company = [
    { name: 'About us', href: '#', description: 'Learn more about our company values and mission to empower others' },
    { name: 'Careers', href: '#', description: 'Looking for your next career opportunity? See all of our open positions' },
    { name: 'Support', href: '#', description: 'Get in touch with our dedicated support team or reach out on our community forums' },
    { name: 'Blog', href: '#', description: 'Read our latest announcements and get perspectives from our team' },
];


const universities = [
    "University of Lagos",
    "University of Nigeria Nsukka",
    "University of Ibadan",
    "Ahmadu Bello University",
    "University of Benin",
    "Obafemi Awolowo University",
    "University of Jos",
    "University of Port Harcourt",
    "University of Maiduguri",
    "University of Calabar",
    "University of Abuja",
    "University of Ilorin",
    "University of Ekiti",
    // Add more universities here
  ];

export default function Example() {
    // const [userData, setUserData] = useState(null); 
    const { user } = useUserContext();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedImage, setSelectedImage] = useState(AvatarUser);
console.log(user)
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log('Profile updated:', { name, email });
    // };

    const filteredUniversities = universities.filter(university => 
        university.toLowerCase().includes(searchTerm.toLowerCase())
      );

       // Handle image file selection
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate the URL for the selected image
      setSelectedImage(imageUrl);  // Update the state with the new image URL
    }
  };

  // Trigger file input on button click
  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };



  

  const handleSubmit = async () => {
      if (!selectedUniversity || !selectedImage) {
          alert("Please select a university and upload your ID card.");
          return;
      }
  
      const userId = user.id; // Replace with the actual user ID
      const apiUrl = "https://schoolcafe.ng/api/verifications.php";
  
      // If the API expects base64 image
      const requestData = {
          user_id: userId,
          institution: selectedUniversity,
          student_id_card: selectedImage, // base64 encoded image
      };
  
      // If the API expects multipart/form-data (comment out if not needed)
      const formData = new FormData();
      formData.append('user_id', userId);
      formData.append('institution', selectedUniversity);
      formData.append('student_id_card', selectedImage); // Base64 image or actual file
  
      try {
          // Using 'application/json' for JSON payload
          const response = await axios.post(apiUrl, requestData, {
              headers: {
                  'Content-Type': 'application/json',
              },
          });
  
          // Uncomment this and comment out above request if the API needs form data
          /*
          const response = await axios.post(apiUrl, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          */
  
          console.log('Profile updated successfully:', response.data);
          alert('Profile updated successfully!');
      } catch (error) {
          if (error.response) {
              // Server responded with a status code outside the range of 2xx
              console.error('Server Error Response:', error.response.data);
              console.error('Status Code:', error.response.status);
              console.error('Headers:', error.response.headers);
              alert(`Error: ${error.response.data.message || 'Failed to update profile.'}`);
          } else if (error.request) {
              // No response was received after the request was made
              console.error('No response received:', error.request);
              alert('No response from server. Please try again.');
          } else {
              // Other errors, e.g., request setup issues
              console.error('Error setting up the request:', error.message);
              alert(`Request error: ${error.message}`);
          }
      }
  };
  



    return (
        <div className="bg-white">
            {/* <header className="bg-[#E8F5FF]">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img alt="" src={Logo} className="h-8 w-auto" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <Link to="/" className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${location.pathname === '/' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-900'}`}>
                            Home
                        </Link>
                        <Link to="/community" className="text-sm font-semibold leading-6 text-gray-900">Community</Link>
                        <Link to="/school" className="text-sm font-semibold leading-6 text-gray-900">Featured Schools</Link>
                        <Link to="/shop" className="text-sm font-semibold leading-6 text-gray-900">Shop</Link>

                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                Others
                                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                            </PopoverButton>

                            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5 transition">
                                {company.map((item) => (
                                    <div key={item.name} className="relative rounded-lg p-4 hover:bg-gray-50">
                                        <Link to={item.href} className="block text-sm font-semibold leading-6 text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </Link>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
                                    </div>
                                ))}
                            </PopoverPanel>
                        </Popover>
                    </PopoverGroup>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <div className="py-6 flex items-center space-x-4">
                            <Link to="/contact" className="mt-4 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded">Contact Us</Link>
                            <Link to="/dashboard">
                                <img alt="" src={Avatar} className="h-8 w-auto" />
                            </Link>
                        </div>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <Link to="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img alt="" src={Logo} className="h-8 w-auto" />
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {products.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                                </div>
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="space-y-2 py-6">
                                        {company.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
                            {callsToAction.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                                >
                                    <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400" />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </DialogPanel>
                </Dialog>
            </header> */}

            <div className="flex flex-col items-center justify-center">
    <div className="max-w-3xl w-full mx-auto mb-40">
      {/* Back to Dashboard Link */}
                <div className="mb-10 mt-10">
                    <Link to={'/dashboard'}>
                   
                <a href="#" className="text-sm text-[#B3B3B3]">&lt; back to Dashboard </a>
                </Link>
            </div>

        {/* Edit Profile Header */}
        <div className="mb-4">
        <h1 className="text-lg font-bold text-gray-800 border-b-4 border-blue-600 w-1/2">
        Get verified in 10secs
        </h1>
        </div>

      {/* Profile Editing Box */}
      <div className="p-8 rounded-lg shadow-lg border max-w-3xl w-full mx-auto">
        {/* Profile Image and Name Input Side by Side */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-8">
            {/* Profile Image and Avatar Buttons */}
            <div className="flex flex-col items-center mb-4 sm:mb-0">
            <img
        src={selectedImage}
        alt="Profile Avatar"
        className="w-60 h-50 border-4 border-gray-300"
      />

                {/* Buttons (Under Image) */}
                <div className="flex justify-center mt-4 space-x-6">
        <button
          className="px-3 py-0.5 border-2 border-dashed border-blue-400 text-blue-400 rounded-full text-sm flex items-center"
          onClick={triggerFileInput} // Trigger file input when the button is clicked
        >
          <img alt="" src={upload} className="h-4 w-4 mr-1" />
        Upload Student ID Card
        </button>

        {/* Hidden file input element */}
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: 'none' }} // Hide the input element
          onChange={handleImageUpload} // Handle image selection
        />
      </div>
            </div>

            {/* Name Input with "Change" Link Inside */}
            <div className="text-center">
                    <div className="relative w-80"> {/* Increased width here */}
                {/* Input field to display selected university */}
                <input
                    type="text"
                    value={selectedUniversity}
                    className="w-full p-2 border border-gray-300 rounded-lg font-bold text-lg pr-16"
                    placeholder="Select University"
                    readOnly
                    onClick={() => setShowDropdown(!showDropdown)}  // Toggle dropdown visibility on click
                />
                
                {/* Dropdown container that shows only when showDropdown is true */}
                {showDropdown && (
                    <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {/* Search input inside dropdown */}
                    <input
                        type="text"
                        className="w-full p-2 border-b border-gray-300 rounded-t-lg"
                        placeholder="Search for a university"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    
                    {/* Dropdown list */}
                    <div className="max-h-40 overflow-y-auto">
                        {filteredUniversities.length === 0 ? (
                        <p className="p-2 text-center text-sm">No universities found</p>
                        ) : (
                        filteredUniversities.map((university, index) => (
                            <button
                            key={index}
                            className="w-full text-left p-2 hover:bg-gray-100"
                            onClick={() => {
                                setSelectedUniversity(university);  // Set the selected university
                                setSearchTerm('');  // Clear search term after selecting
                                setShowDropdown(false);  // Close dropdown after selection
                            }}
                            >
                            {university}
                            </button>
                        ))
                        )}
                    </div>
                    </div>
                )}

                {/* Change link */}
                <a href="#" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-blue-600">
                    Change
                </a>
                </div>

                {/* Done Button with same width as input */}
                <div className="relative w-80 mt-10">
                    <button className="w-full bg-[#1D7BC7] text-white px-6 py-2 rounded-md flex items-center justify-center space-x-2"  onClick={handleSubmit}>
                    <span>Get Verified</span>
                    <img
                    alt=""
                    src={right}
                    className="h-4 w-4 mr-1"
                    />
                    
                    </button>
                    </div>
            </div>
            </div>
      </div>
    </div>
  </div>
        </div>
    );
}
