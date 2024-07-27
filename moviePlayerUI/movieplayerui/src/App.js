import './App.css';
// import api from './api/axiosConfig';
// import { useEffect, useState } from 'react';
import SignInPage from './pages/sign-in';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/home';
import SignUpPage from './pages/sign-up';
import Movies from './pages/movies';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
