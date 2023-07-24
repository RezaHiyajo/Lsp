//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg';
//import './App.css';
import { Link } from "react-router-dom"
import Navbar from "../components/navbar"

function Index() {
  return (
    <div>
    <Navbar/>
      <section className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">Welcome to MADING</h2>
            <p className="mt-4 text-lg text-gray-600">
              Marilah Membaca agar menambah pengetahuan
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Grid item 1 */}
            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900">Planet Pluto </h3>
              <p className="mt-4 text-gray-600">
                Planet pluito telah sudah hilang 
              </p>
            </div>

            {/* Grid item 2 */}
            <div className="bg-gray-200 p-6 rounded-lg">
            <img src="https://s1.zerochan.net/Sorasaki.Hina.600.3214406.jpg" alt="Feature 1" className="w-full h-32 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-medium text-gray-900">Anime untuk pembelajaran</h3>
              <p className="mt-4 text-gray-600">
                Anime adalah animasi buatan jepang
              </p>
            </div>

            {/* Grid item 3 */}
            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900">Pelajaran Nihonggo</h3>
              <p className="mt-4 text-gray-600">
                Nihongo adalah sebutan dari bahasa jepang.
                
              </p>
              <Link to="/detailartikel" className="text-blue-500 hover:underline">Lihat Detail</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p>Mading JeWePe Highschool adalah majalah dinding online untuk siswa/siswi, agar menambahkan giat membaca</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email: JewepeHigh@gmail.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.28 2H2.72A2.72 2.72 0 0 0 0 4.72v14.56A2.72 2.72 0 0 0 2.72 22H21.28A2.72 2.72 0 0 0 24 19.28V4.72A2.72 2.72 0 0 0 21.28 2zM18.42 8.64h-1.33c-1.48 0-1.77.7-1.77 1.73v2.28h3.54v2.85h-3.54v7.44h-3.54v-7.44H9.87v-2.85h3.5V10.2c0-.45.1-.89.61-.89h1.44L18.42 8.64z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.67a.87.87 0 0 0-.67-.67A7.33 7.33 0 0 0 13.33 0H10a7.33 7.33 0 0 0-7.33 7.33V10a7.33 7.33 0 0 0 7.33 7.33H13.6a7.33 7.33 0 0 0 7.33-7.33V8A4.67 4.67 0 0 1 24 4.67a.87.87 0 0 0-.67-.67zm-7.33 12A4.67 4.67 0 1 1 10 11.33a4.67 4.67 0 0 1 2.67 7.33zm4.66-4.66A1.67 1.67 0 1 1 16 12.33a1.67 1.67 0 0 1 1.33 2.68zm-8-6A1.67 1.67 0 1 1 8 7.33a1.67 1.67 0 0 1 1.33 2.68zM20 4.67a1.33 1.33 0 1 1-1.33-1.33A1.33 1.33 0 0 1 20 4.67z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      

    </div>
  );
}

export default Index;
