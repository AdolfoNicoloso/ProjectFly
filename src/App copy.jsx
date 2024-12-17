import { useState } from 'react'
import InvertedLogo from './assets/Inverted.png'

export default function App() {
  return (
    <div className='bg-myblue h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center space-y-10'>
        <img src={InvertedLogo} alt="Logo" className="w-32 h-32 object-contain" />
        <div className='flex flex-row space-x-2'>
          <button className="px-5 py-3 text-myblue bg-mywhite rounded-full transform hover:scale-105 transition-transform duration-150">
            Log in
          </button>
          <button className="px-5 py-3 text-mywhite bg-myblue rounded-full transform hover:scale-105 transition-transform duration-150">
            Sign Up
          </button>
        </div>
      </div>
    </div>

  );
}

{/* bg-gray-100 min-h-screen flex flex-col items-center justify-center space-y-4 relative" */}