import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'



const Navbar = () => {
  const router = useRouter()

  return (
<>
<header aria-label="Site Header" className="border-b border-gray-100 bg-black text-white">
  <div
    className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
  >
    <div className="flex items-center gap-4">
      <button type="button" className="p-2 lg:hidden">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <Link href="#" className="flex">
        <span className="sr-only">Logo</span>
        <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
      </Link>
    </div>

    <div className="flex flex-1 items-center justify-end gap-8">
      <nav
        aria-label="Site Nav"
        className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
      >





      </nav>

      <div className="flex items-center">
        <div className="flex items-center border-x border-gray-100 border-l-0 border-r-0">

        <span className="hidden sm:block">
           <button type="button" onClick={() => router.push('/Write')} className='px-4 rounded-3xl border mr-3 border-white'>Write</button>
          </span>
       

          <span className="hidden sm:block">
            <Link
              href="/search"
              className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <span className="sr-only"> Search </span>
            </Link>
          </span>
          <span>
            <Link
              href="/Profile"
              className="grid h-16 w-16 place-content-center border-l-0 border-b-4 border-transparent hover:border-red-700"
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span className="sr-only"> Account </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  </div>
</header>

</>  )
}

export default Navbar
