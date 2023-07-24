//import { Link } from "react-router-dom"
import React  from "react";
import axios from "axios";
import Navbar from "../components/navbar"

function Tambahartikel() {
    const [judul, setJudul] = React.useState('');
    const [deskripsi, setDeskripsi] = React.useState('');
    const [gambar, setGambar] = React.useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('judul', judul);
      formData.append('deskripsi', deskripsi);
      formData.append('gambar', gambar);
  
      try {
        const res = await axios.post(
          'http://127.0.0.1:8000/api/mading/create',
          formData
        );
        const { status } = res.data;
        if (status === 200) {
          alert('Berhasil tambah mading');
        }
      } catch (error) {
        alert('Gagal tambah mading');
      }
    };
  
  return (
    <div>
      <Navbar/>
      
      

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Tambah Artikel</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Judul Artikel</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Masukkan judul artikel"
             
              onChange={(e) => setJudul(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">Konten Artikel</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              placeholder="Masukkan konten artikel"
              
              onChange={(e) => setDeskripsi(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Gambar</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setGambar(e.target.files[0])}
            />
          </div>
          
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Simpan Artikel
            </button>
          </div>
        </form>
      </div>
     

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

export default Tambahartikel;
