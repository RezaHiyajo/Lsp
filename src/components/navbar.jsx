//import React from 'react'
//import { Link } from 'react-router-dom'

import { Link, useNavigate } from "react-router-dom"

export const Navbar = () => {
        const data = localStorage.getItem('data')
        const navigate = useNavigate()
        const handleLogout = () => {
          localStorage.clear()
          navigate('/')
        }
  return (
    <div><nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://www.citypng.com/public/uploads/preview/-21602386668ubuhpjdnor.png" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JeWePe HighSchool</span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {data ? <>
              <li className="text-lg font-medium text-white hover:text-slate-300">
                <Link to='/'>Home</Link>
              </li>
              <li className="text-lg font-medium text-white hover:text-slate-300">
                <Link to='/mading'>Mading</Link>
              </li>
              <li className="text-lg font-medium text-white hover:text-slate-300">
                <Link to='/report'>Report</Link>
              </li>
              <li className="text-lg font-medium text-white hover:text-slate-300">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </> : <>
              <li className="text-lg font-medium text-white hover:text-slate-300">
                <Link to='/'>Home</Link>
              </li>
              <li className="text-lg font-medium text-white hover:text-slate-300">
                <Link to='/mading'>Mading</Link>
              </li>
              <li className="text-lg font-medium text-white hover:text-slate-300">
                <Link to='/login'>Login</Link>
              </li>
            </>}
          
         
        </ul>
      </div>
    </div>
  </nav>

    </div>
  )
}
export default Navbar;
