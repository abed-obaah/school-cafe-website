import { FaChartBar, FaTasks } from 'react-icons/fa' // Importing icons
import { Fragment, useState } from 'react'
import earning from '../../assets/earning.svg'
import lines from '../../assets/lines.svg'
import leader from '../../assets/leader.svg'
import refer from '../../assets/refer.svg'
import activity from '../../assets/activity.svg'
import refresh from '../../assets/refresh.svg';
import Withdraw from '../../assets/withdraw.svg';
import box from '../../assets/message.svg';
import tv from '../../assets/tv.svg';
import crash from '../../assets/crash.svg';
import { FaTrophy } from 'react-icons/fa';

// const orders = [
//   {
//     id: 1,
//     date: 'July 12, 2021',
//     status: 'Total Earning',
//     name1: 'Easily',
//     name2: 'Withdraw',
//     name3: 'Your Earnings',
//     href: '#',
//     buttonText: 'Withdraw',
//     imageSrc: earning,
//     data: userData.referrals_count,
//     icon: Withdraw, 
//   },
//   {
//     id: 2,
//     date: 'June 21, 2021',
//     status: 'Daily Activity',
//     name1: 'Perform Daily',
//     name2: 'Tasks & Earn',
//     name3: 'More Money',
//     href: '#',
//     buttonText: 'View Tasks',
//     imageSrc: activity,
//     data: '40%',
//     icon: box,
//   },
//   {
//     id: 3,
//     date: 'June 6, 2021',
//     status: 'Leadership Board',
//     name1: 'See Your',
//     name2: 'Position On',
//     name3: 'Leader Board',
//     href: '#',
//     buttonText: 'Check Leaderboard',
//     imageSrc: leader,
//     data: '1,780',
//     icon: tv,
//   },
//   {
//     id: 4,
//     date: 'May 24, 2021',
//     status: 'Referrals',
//     name1: 'Refer Your',
//     name2: 'Friends &',
//     name3: 'Earn Money',
//     href: '#',
//     buttonText: 'Refer Now',
//     imageSrc: refer,
//     data: '10',
//     icon: refer,
//   },
// ]

export default function Example({ userData }) {
  const orders = [
    {
      id: 1,
      date: 'July 12, 2021',
      status: 'Total Earning',
      name1: 'Easily',
      name2: 'Withdraw',
      name3: 'Your Earnings',
      href: '#',
      buttonText: 'Withdraw',
      imageSrc: earning,
       data: `NGN ${userData.referral_reward}`,
      icon: Withdraw, 
    },
    {
      id: 2,
      date: 'June 21, 2021',
      status: 'Daily Activity',
      name1: 'Perform Daily',
      name2: 'Tasks & Earn',
      name3: 'More Money',
      href: '#',
      buttonText: 'View Tasks',
      imageSrc: activity,
      data: '40%',
      icon: box,
    },
    {
      id: 3,
      date: 'June 6, 2021',
      status: 'Leadership Board',
      name1: 'See Your',
      name2: 'Position On',
      name3: 'Leader Board',
      href: '#',
      buttonText: 'Check Leaderboard',
      imageSrc: leader,
      data: '1,780',
      icon: tv,
    },
    {
      id: 4,
      date: 'May 24, 2021',
      status: 'Referrals',
      name1: 'Refer Your',
      name2: 'Friends &',
      name3: 'Earn Money',
      href: '#',
      buttonText: 'Refer Now',
      imageSrc: refer,
      data: userData.referrals_count,
      icon: refer,
    },
  ]
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Tools</h1>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {orders.map((order) => (
            <div key={order.id} className="relative border-2 rounded-3xl overflow-hidden shadow-md">
              <div className="flex flex-col">
                {/* Top Half */}
                <div className="bg-[#00172A] p-6 flex space-x-3">
                  <div>
                    <h1 className="text-white text-xl font-bold">{order.name1}</h1>
                    <h1 className="text-white text-xl font-bold">{order.name2}</h1>
                    <h1 className="text-white text-xl font-bold">{order.name3}</h1>
                  </div>
                  <img
                    src={order.imageSrc}
                    alt="Order Icon"
                    className="w-30 h-20"
                  />
                </div>

                {/* Bottom Half */}
                <div className="bg-white p-6">
                  <h3 className="mt-4 text-sm text-gray-500 flex justify-between items-center">
                    <a href={order.href} className="mr-3">{order.status}</a>
                    <img src={refresh} alt="Refresh" className="w-30 h-5" />
                  </h3>

                  <div className="text-3xl font-semibold text-[#00172A] flex items-center">
                    {order.data}
                    {/* Conditional Icon or Progress Bar */}
                    {order.buttonText === 'View Tasks' && (
                    <div className="w-[3rem] bg-gray-200 rounded-full h-1.5 mt-2">
                    <div
                      className="bg-[#1D7BC7] h-1.5 rounded-full"
                      style={{ width: `${order.data}` }}  // Ensure it's a percentage
                    />
                  </div>
                  
                  )}
                    {order.buttonText === 'Check Leaderboard' && (
                      <img
                      src={crash}
                      alt="Button Icon"
                      className="w-4 h-5 mt-3"
                    />
                    )}
                  </div>

                

                  <button
                    className="mt-4 w-full flex items-center justify-center rounded-md bg-[#1D7BC7] text-white py-2 hover:bg-blue-700"
                    onClick={() => console.log(`${order.buttonText} clicked`)}
                  >
                    <img
                      src={order.icon}
                      alt="Button Icon"
                      className="w-5 h-5 mr-2"
                    />
                    <span className="text-sm">{order.buttonText}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
