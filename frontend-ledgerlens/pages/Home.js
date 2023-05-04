import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';




const Home = () => {
  return (
<>
<section className="bg-gray-900 text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Revolutionize Your Reading and Writing Experience 

      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      Earn Rewards on Our Web3 Platform!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">

        <button
          className="animate-bounce block w-full rounded-3xl border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Connect to Wallet
        </button>
      </div>
    </div>
  </div>
</section>

</>  )
}

export default Home
