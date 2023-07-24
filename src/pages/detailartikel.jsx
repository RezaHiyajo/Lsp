import { useParams } from "react-router-dom"
import React from "react";
import axios from "axios";
import Navbar from "../components/navbar"

function Detailartikel() {
  const [data, setData] = React.useState({});
  const { id } = useParams();
  const [modal, setModal] = React.useState(false)
  const [nama, setNama] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [komentar, setKomentar] = React.useState('')

  const handleSubmit = async () => {
    const id_mading = id;
    const res = await axios.post(
      'http://127.0.0.1:8000/api/komentar/create',
      { id_mading, nama, email, komentar }
    );
    const { status } = res.data;
    if (status === 200) {
      alert('Berhasil tambah komentar');
      getData();
      setModal((prev) => !prev);
      setNama('');
      setEmail('');
      setKomentar('');
    } else {
      alert('Gagal menambahkan komentar');
    }
  };

  const getData = async () => {
    const res = await axios.get(
      'http://127.0.0.1:8000/api/mading/find/' + id
      );
    
    const { data } = res.data;
    setData(data);
  };

  React.useEffect(() => {
    (async function () {
      const res = await axios.get(
        'http://127.0.0.1:8000/api/mading/find/' + id
      );
      const { data } = res.data;
      setData(data);
    })();
  }, [id]);

  return (
    <div>
    <Navbar/>
      <div className="container p-5">
        <div>
          <h1 className="font-bold text-2xl">Detail Mading</h1>
        </div>
        <div className="flex justify-center mt-3">
          <img className="text-center" src={data.gambar}alt="MadingSumpahPemuda" />
        </div>
        <div>
          <h1 className="font-semibold text-xl mt-3">{data.judul}</h1>
          <h1 className="font-medium text-base mt-1"></h1>
          <h1 className="font-semibold text-xl mt-3">{data.deskripsi}</h1>
          <p className="font-medium mt-1" >{data.deskripsi}</p>
          <button onClick={() => setModal(prev => !prev)} className="py-2 px-3 font-medium text-base text-white bg-blue-600 border rounded-full hover:bg-blue-700 hover:transition focus:outline-none transition duration-150 ease-in-out"> Tambah Komentar</button>
        </div>
        <div className="mt-10">
          <h1 className="font-semibold text-xl mt-3">Komentar</h1>
          <div className="border border-black h-56 mt-2">
            {data?.komentars?.map((val)=>{ 
              return (
                <div key={val.id} className="p-3 flex gap-3">
              <div className="font-semibold text-base"><h1>{val.nama}</h1></div>
              <div className="font-normal italic text-base"><h1>{val.email}</h1></div>
              <div className="font-normal italic text-base"><h1>{val.komentar}</h1></div>
            </div>
              )

            })}
         
          </div>
        </div>
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
      <div className={"fixed z-10 overflow-y-auto top-0 w-full left-0" + (modal ? ' block' : ' hidden')}>
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <label>Nama</label>
              <input type="text" placeholder='Masukan Nama Anda...' className="w-full bg-gray-100 p-2 mt-2 mb-3" onChange={(e) => setNama(e.target.value)} value={nama} />
              <label>Email</label>
              <input type="email" placeholder='Masukan Email Anda...' className="w-full bg-gray-100 p-2 mt-2 mb-3" onChange={(e) => setEmail(e.target.value)} value={email} />
              <label>Komentar</label>
              <input type="text" placeholder='Masukan Komentar Anda...' className="w-full bg-gray-100 p-2 mt-2 mb-3 h-32" onChange={(e) => setKomentar(e.target.value)} value={komentar} />
            </div>
            <div className="bg-gray-200 px-4 py-3 text-right">
              <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => setModal(prev => !prev)}><i className="fas fa-times" ></i> Cancel</button>
              <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2" onClick={handleSubmit}><i className="fas fa-plus"></i>Tambah Komentar</button>
            </div>
          </div>
        </div>
      </div>

      

    </div>
  );
}

export default Detailartikel;
