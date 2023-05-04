import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from './Navbar'



const Profile = () => {
    const [selectedId, setSelectedId] = useState(null)
  return (
<>
<Navbar/>
<div className='flex bg-black'>

<div className="flex flex-col  w-1/3 h-screen px-4 py-8 overflow-y-auto rtl:border-r-0 rtl:border-l  dark:border-gray-700">
 
    <div className="flex flex-col items-center mt-6 -mx-2">
        <img className="object-cover w-24 h-24 mx-2 rounded-full" src="" alt="avatar"></img>
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">XXX</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">XXXS</p>
    </div>

    <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
            
            <Link className="flex items-center px-4 py-2 text-gray-600  rounded-lg  dark:text-gray-200" href="Profile">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Dashboard</span>
            </Link>
            


            <Link className="flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-100 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/Rewards">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Rewards</span>
            </Link>

            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Settings</span>
            </Link>
        </nav>
    </div>
</div>










<div className='flex flex-col w-2/3 m-10 items-center justify-center align-middle'>
    <div className='text-white text-5xl font-light mb-10'>
        Claim your Rewards!
    </div>
    <motion.a
  whileHover={{ scale: 1.1 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}
>
<article className="hover:cursor-pointer rounded-3xl border border-gray-100 bg-white p-6 m-4 hover:bg-slate-100">
  <div className="flex items-center justify-between w-96">
    <div>
      <p className="text-sm text-gray-500">Rewardssss</p>

      <p className="text-2xl font-medium text-gray-900">25rs</p>
    </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </span>
  </div>

  <div className="mt-1 flex gap-1 text-green-600">

    <p className="flex gap-2 text-xs">
      <span className="text-green-400">Claim</span>
    </p>
  </div>
</article>
  </motion.a>
  <motion.a
  whileHover={{ scale: 1.1 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}
>
<article className="hover:cursor-pointer rounded-3xl border border-gray-100 bg-white p-6 m-4 hover:bg-slate-100">
  <div className="flex items-center justify-between w-96">
    <div>
      <p className="text-sm text-gray-500">Rewardssss</p>

      <p className="text-2xl font-medium text-gray-900">25rs</p>
    </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </span>
  </div>

  <div className="mt-1 flex gap-1 text-green-600">

    <p className="flex gap-2 text-xs">
      <span className="text-green-400">Claim</span>
    </p>
  </div>
</article>
</motion.a>

<motion.a
  whileHover={{ scale: 1.1 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}
>
<article className="hover:cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 m-4 hover:bg-slate-100">
  <div className="flex items-center justify-between w-96">
    <div>
      <p className="text-sm text-gray-500">Rewardssss</p>

      <p className="text-3xl font-medium text-gray-900">25rs</p>
    </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </span>
  </div>

  <div className="mt-1 flex gap-1 text-green-600">

    <p className="flex gap-2 text-xs">
      <span className="text-red-500">Claimed</span>
    </p>
  </div>
</article>
</motion.a>


</div>
</div>

</>  )
}

export default Profile
