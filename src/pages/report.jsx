import React from "react";
import axios from "axios";
import Navbar from "../components/navbar";

function DetailArtikel() {
  const [datas, setDatas] = React.useState([]);
  const [datak, setDatak] = React.useState([]);

  const getData = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/mading/all");
    const { data } = res.data;
    setDatas(data);
  };

  const handleDeleteMading = async (idMading) => {
    const res = await axios.delete(
      `http://127.0.0.1:8000/api/mading/delete/${idMading}`
    );
    const { status } = res.data;
    if (status === 200) {
      alert("Berhasil hapus Mading");
      getData();
    } else {
      alert("Gagal hapus Mading");
    }
  };

  const getKomentar = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/komentar/all");
    const { data } = res.data;
    setDatak(data);
  };

  const handleDeleteKomentar = async (idKomentar) => {
    const res = await axios.delete(
      `http://127.0.0.1:8000/api/komentar/delete/${idKomentar}`
    );
    const { status } = res.data;
    if (status === 200) {
      alert("Berhasil hapus komentar");
      getKomentar();
    } else {
      alert("Gagal hapus komentar");
    }
  };

  React.useEffect(() => {
    getData();
    getKomentar();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <main className="flex-1 max-h-full p-5 overflow-hidden">
          <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
            <h1 className="text-2xl font-semibold whitespace-nowrap">
              Dashboard Admin
            </h1>
            <div className="space-y-6 md:space-x-2 md:space-y-0"></div>
          </div>

          <div>
            <div className="mt-5 mb-2">
              <h1 className="font-semibold">Jumlah Mading : {datas.length}</h1>
            </div>
            {datas.map((val) => {
              return (
                <div
                  key={val.id}
                  className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                >
                  <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                          <th className="px-6 py-3 text-left font-medium">
                            Judul Mading
                          </th>
                          {/* <th className="px-6 py-3 text-left font-medium">
                            Deksripsi
                          </th> */}
                          <th className="px-6 py-3 text-left font-medium">
                            Gambar
                          </th>
                          <th className="px-6 py-3 text-left font-medium">
                            Waktu
                          </th>
                          <th className="px-6 py-3 text-left font-medium"></th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="px-6 py-4 w-[350px] whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">
                              {val.judul}
                            </div>
                          </td>
                          {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                {val.deskripsi}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">
                                </div>
                              </div>
                            </div>
                          </td> */}
                          <td className="px-6 py-4 whitespace-no-wrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold ">
                              <img className="w-20" src={val.gambar} alt="" />
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            {val.created_at}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <button
                              onClick={() => handleDeleteMading(val.id)}
                              type="submit"
                              className=" px-3 py-1 text-sm font-medium text-white bg-red-600 border border-transparent rounded-full hover:bg-red-700 focus:outline-none transition duration-150 ease-in-out"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="mt-20 mb-2">
              <h1 className="font-semibold">
                Jumlah Komentar : {datak.length}
              </h1>
            </div>
            {datak.map((val) => {
              return (
                <div
                  key={val.id}
                  className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                >
                  <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                          <th className="px-6 py-3 text-left font-medium">
                            Nama
                          </th>
                          <th className="px-6 py-3 text-left font-medium">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left font-medium">
                            Komentar
                          </th>
                          <th className="px-6 py-3 text-left font-medium">
                            Waktu
                          </th>
                          <th className="px-6 py-3 text-left font-medium"></th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {/* {datas.map((vall) => {
                              return (
                                <div key={vall.id} className="text-sm leading-5 text-gray-900">
                                  {vall.judul}
                                </div>
                              )
                            })} */}
                            <div className="w-[110px] text-sm leading-5 text-gray-900">
                              {val.nama}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                              <div className="w-[100px] text-sm leading-5 text-gray-900">
                                {val.email}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900"></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span className="text-sm leading-5 text-gray-900">
                              {val.komentar}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            {val.created_at}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <button
                              onClick={() => handleDeleteKomentar(val.id)}
                              type="submit"
                              className=" px-3 py-1 text-sm font-medium text-white bg-red-600 border border-transparent rounded-full hover:bg-red-700 focus:outline-none transition duration-150 ease-in-out"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DetailArtikel;
