//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg';
//import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Index from './pages';
import Login from './pages/login';
import Adminartikel from './pages/adminartikel';
import TambahArtikel from './pages/tambahartikel';
import Detailartikel from './pages/detailartikel';
import Report from './pages/report';
import Mading from './pages/mading';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/adminartikel' element={<Adminartikel />} />
        <Route path='/tambahartikel' element={<TambahArtikel />} />
        <Route path='/detailartikel/:id' element={<Detailartikel />} />
        <Route path='/report' element={<Report />} />
        <Route path='/mading' element={<Mading />} />
      </Routes>
    </Router>
  );
}

export default App;

