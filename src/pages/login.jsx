//import { useState } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar"
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
//import { Link } from "react-router-dom";

function Login() {
  //   const [count, setCount] = useState(0);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (email == '' & password == '') {
      alert('Harap isi Email dan Password');
    }
    else if (email == '') {
      alert('Email belum diisi');
    }
    else if (password == '') {
      alert('Password belum diisi');
    }
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/api/admin/login", {
      email,
      password,
    });

    const { status, data } = await res.data;
    if (status === 200) {
      localStorage.setItem("data", data);
      navigate("/adminartikel");
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="bg-blue-200 min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
          Login Form
        </h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 font-bold text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Masukan Email Anda Disini"
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 font-bold text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Masukan Password Anda Disini"
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <p class="text-sm text-red-400 mt-2">Password is required</p> */}
            </div>

            <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;