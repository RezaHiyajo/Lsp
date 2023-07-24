//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg';
//import './App.css';
import { Link } from "react-router-dom"
import Navbar from "../components/navbar"

function Adminartikel() {
  return (  
    <div>
      <Navbar/>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-lg font-bold">Halaman Admin</h1>
          <a href="#" className="text-white hover:text-gray-300">Keluar</a>
        </div>


      <div className="container mx-auto mt-8">
        <h2 className="text-xl font-bold mb-4">Selamat datang, Admin!</h2>

        <div className="grid grid-cols-3 gap-4">
          

          <div className="bg-white p-4 shadow">
            <h3 className="text-lg font-bold mb-2">Artikel</h3>
            <p>Jumlah Artikel: 500</p>
            <Link to="/tambahartikel" className="text-blue-500 hover:underline">Tambah Artikel</Link>
          </div>

        </div>
      </div>
    
    </div>

      
  );
}

export default Adminartikel;