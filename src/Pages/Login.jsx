import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import Logo from '../assets/Original.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Navigation hook

    const handleLogin= async () => {
        try {
            // Authenticate the user
            const { data, error } = await supabase.auth.signInWithPassword({
              email,
              password,
            });
        
            if (error) {
              setErrorMessage('Invalid email or password. Please try again.');
            } else {
              setErrorMessage(''); // Clear any previous errors
              navigate('/homepage'); // Redirect to Homepage
            }
          } catch (err) {
            console.error('Login error:', err.message);
            setErrorMessage('Something went wrong. Please try again later.');
        }
    };

//   return (
//     <div className='bg-spotifydarkgray h-screen flex items-center justify-center'>
//         <div className='flex flex-col items-center justify-center space-y-10'>
//             <img src={Logo} alt="Logo" className="w-32 h-32 object-contain" />
//             <div className='flex flex-col items-center space-y-4'>
//             {/* Log in input fields */}
//             <input
//                 type="email"
//                 placeholder="Email"
//                 className="px-4 py-2 rounded"
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 className="px-4 py-2 rounded"
//                 onChange={(e) => setPassword(e.target.value)}
//             />

//             {/* Log in Button */}
//             <button
//                 onClick={handleLogIn}
//                 className="px-5 py-3 text-mywhite bg-myblue rounded-full transform hover:scale-105 transition-transform duration-150"
//             >
//                 Log in
//             </button>

//             {/* Link to Sign up Page */}
//             <div className="text-spotifylightgray mt-4">
//                 Don't have an account?{' '}
//                 <Link to="/signup" className="underline text-spotifylightgray hover:text-gray-500">
//                     Sign up here.
//                 </Link>
//             </div>
//             </div>
//         </div>
//     </div>
//   );

    return (
        <div className='bg-spotifydarkgray h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center space-y-10'>
            <img src={Logo} alt="Logo" className="w-32 h-32 object-contain" />
            <div className='flex flex-col items-center space-y-4'>
            {/* Log in input fields */}
            <input
                type="email"
                placeholder="Email"
                className={`px-4 py-2 rounded border ${errorMessage ? 'border-red-500' : ''}`}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className={`px-4 py-2 rounded border ${errorMessage ? 'border-red-500' : ''}`}
                onChange={(e) => setPassword(e.target.value)}
            />
    
            {/* Display Error Message */}
            {errorMessage && (
                <div className="text-errorred text-sm mt-1">
                {errorMessage}
                </div>
            )}
    
            {/* Log in Button */}
            <button
                onClick={handleLogin}
                className="px-5 py-3 text-mywhite bg-myblue rounded-full transform hover:scale-105 transition-transform duration-150"
            >
                Log in
            </button>
    
            {/* Link to Sign up Page */}
            <div className="text-spotifylightgray mt-4">
                Don't have an account?{' '}
                <Link
                to="/signup"
                className="underline text-spotifylightgray hover:text-gray-500"
                >
                Sign up here.
                </Link>
            </div>
            </div>
        </div>
        </div>
    );
}