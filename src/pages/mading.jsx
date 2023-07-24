import { Link } from "react-router-dom"
import React from "react";
import axios from "axios";
import Navbar from "../components/navbar"
import { BsSearch } from "react-icons/bs"

function Mading() {
  const [dataSearch, setDataSearch] = React.useState(null)
  const [search, setSearch] = React.useState('')

  const handleSearch = () => {
    const dataFilter = datas.filter((item) =>
      item.judul.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setDataSearch(dataFilter);
  }

    const [datas, setDatas] = React.useState([])
  const getData = async () => {
    const res = await axios.get(
      'http://127.0.0.1:8000/api/mading/all');
    const { data } = res.data;
    setDatas(data);
  };

  React.useEffect(() => {
    getData();
  }, []); 
  return (

    <div>
      <Navbar/>
      <div className="flex justify-center items-center mt-5">
          <input onChange={(e) => setSearch(e.target.value)} type="text" className="bg-white border border-blue-600 rounded-2xl text-center p-1" name="search" placeholder="Search..." />
          <button onClick={handleSearch} className="px-2 py-2 text-center ml-2 font-medium text-lg text-white bg-blue-600 border rounded-full hover:bg-white hover:text-black hover:border-white hover:transition focus:outline-none transition duration-150 ease-in-out ">
            <Link to="">
              <BsSearch />
            </Link>
          </button>
        </div>

      <section className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {
        (dataSearch || datas).map((val) => {
         
            return (

                <div className="bg-white rounded-lg shadow-lg p-6" key={val.id}>
                    <img src={val.gambar}  />
      <h3 className="text-lg font-bold mb-2">{val.judul}</h3>
      <p className="text-gray-600">{val.deskripsi}</p>
      <Link to={"/detailartikel/"+val.id} className="text-blue-700 font-medium mt-4 inline-block">Read more</Link>
    </div>

            )
        })
    }
    
   
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

export default Mading;