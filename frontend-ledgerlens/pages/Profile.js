import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import { Bar } from "react-chartjs-2";
import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js';
import { AnimatePresence, motion } from 'framer-motion';



Chart.register(LinearScale, CategoryScale, BarElement);

const Profile = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Readers",
        data: [100, 200, 150, 300, 250],
        backgroundColor: "#5A67D8",
        borderColor: "#5A67D8",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        ticks: {
          color: "#8F9BB3",
        },
      },
      y: {
        ticks: {
          color: "#8F9BB3",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#8F9BB3",
        },
      },
    },
  };

  return (
<>
<Navbar/>
<div className='flex bg-black'>


<div className="flex flex-col  w-1/3 h-screen px-4 py-8 overflow-y-auto rtl:border-r-0 rtl:border-l  dark:border-gray-700">
 
    <div className="flex flex-col items-center mt-6 -mx-2">
        <img className="object-cover w-40 h-40 mx-2 rounded-full" src="https://i.pravatar.cc/150?img=69
" alt="avatar"></img>
        <h4 className="mx-2 text-lg mt-4 font-bold text-slate-50">User</h4>
        <p className="mx-2 mt-1 text-md font-medium  text-slate-50">UserId</p>
    </div>

    <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
            
            <Link className="flex items-center px-4 py-2 text-b bg-black-100 bg-gray-100   rounded-lg " href="Profile">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Dashboard</span>
            </Link>
            


            <Link className="flex items-center px-4 py-2 mt-5 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/Rewards">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Rewards</span>
            </Link>


        </nav>
    </div>
</div>







<div className="container mx-auto py-8 w-1/2 overflow-scroll flex items-center max-h-screen justify-center flex-col pb-10">

  <div className='text-white flex flex-col justify-center items-center mt-6'>
    <h1 className='text-4xl font-bold mb-6'>Your Posts</h1>
    <div class="grid grid-cols-2 gap-4">
    <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5}}
        >
    <article class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm">
    <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
      <time datetime="2022-10-10" class="block text-xs text-gray-500">
        10th Oct 2022
      </time>

      <a href="#">
        <h3 class="mt-0.5 text-lg font-medium text-gray-900">
          How to create a responsive navigation menu using CSS and JavaScript
        </h3>
      </a>

      <div class="mt-4 flex flex-wrap gap-1">
        <span
          class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
        >
          Tutorial
        </span>

        <span
          class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
        >
          CSS
        </span>

        <span
          class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
        >
          JavaScript
        </span>
      </div>
    </div>
  </article>
  </motion.div>
  <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5,delay:0.2}}
        >
  <article class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm">
    <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
      <time datetime="2022-10-10" class="block text-xs text-gray-500">
        10th Oct 2022
      </time>

      <a href="#">
        <h3 class="mt-0.5 text-lg font-medium text-gray-900">
          How to create a responsive navigation menu using CSS and JavaScript
        </h3>
      </a>

      <div class="mt-4 flex flex-wrap gap-1">
        <span
          class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
        >
          Tutorial
        </span>

        <span
          class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
        >
          CSS
        </span>

        <span
          class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
        >
          JavaScript
        </span>
      </div>
    </div>
  </article>
  </motion.div>
</div>

  </div>
  
<h1 className="text-4xl font-bold text-white mb-10 mt-10">
        Dashboard
      </h1>
      <Bar className='mt-5' data={chartData} options={chartOptions} />



    </div>




</div>

</>  )
}

export default Profile
