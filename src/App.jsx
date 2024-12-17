import { useState } from 'react'
import { supabase } from './supabase';
import { Routes, Route, Link } from 'react-router-dom';
import SignUp from './Pages/SignUp.jsx';
import Login from './Pages/Login.jsx';
import Confirmation from './Pages/Confirmation.jsx';
import Homepage from './Pages/Homepage.jsx';

export default function App() {

  return (
    //</Routes>
    <Routes>
    {/* Route for Sign-Up Page */}
      <Route path="/signup" element={<SignUp />} />
      {/* Route for Authentication Confirmation */}
      <Route path="/confirmation" element={<Confirmation />} />
      {/* Route for Log-In Page */}
        <Route path="/login" element={<Login />} />
      {/* Route for Homepage */}
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}
