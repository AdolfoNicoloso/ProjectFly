import { useState } from 'react';
import { supabase } from '../supabase';
import { Link } from 'react-router-dom';
import Logo from '../assets/Original.png';

export default function SignUp() {
    // Email, Password, Name, and Last Name
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    //Email error
    const [emailError, setEmailError] = useState('');

    const handleSignUp = async () => {
        try {
          // Step 1: Check if the email already exists using the RPC function
          const { data: emailExists, error: checkError } = await supabase
            .rpc('check_email_exists', { email_to_check: email });
      
          if (checkError) {
            console.error('Error checking email:', checkError.message);
            alert('An error occurred while checking the email.');
            return;
          }
      
          if (emailExists) {
            setEmailError('Oops, email is already in use by an existing account.');
            return; // Stop sign-up if email exists
          }
      
          // Step 2: Proceed with the sign-up if the email does not exist
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name: name, last_name: lastName }, // Custom metadata
                emailRedirectTo: 'http://localhost:5173/confirmation', // Confirmation page URL
            }
          });
      
          if (error) {
            alert('Sign up failed: ' + error.message);
          } else if (data.user) {
            // Insert user profile into profiles table
            await supabase
              .from('profiles')
              .upsert([
                {
                  id: data.user.id,
                  name: name,
                  last_name: lastName,
                },
              ]);
            alert('Sign up successful! Check your email for confirmation.');
          }
        } catch (error) {
          console.error('Error during sign up:', error.message);
          alert('An unexpected error occurred. Please try again.');
        }
      };

    return (
        <div className='bg-spotifydarkgray h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center space-y-10'>
                <img src={Logo} alt="Logo" className="w-32 h-32 object-contain" />
                <div className='flex flex-col items-center space-y-4'>
                {/* Name and email input fields */}
                <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-2 rounded"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-2 rounded"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 rounded"
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailError('');
                    }}
                />
                {emailError && (
                    <div className="text-errorred text-sm mt-1">
                        {emailError}
                    </div>
                )}
                <input
                    type="password"
                    placeholder="Password"
                    className="px-4 py-2 rounded"
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Sign-Up Button */}
                <button
                    onClick={handleSignUp}
                    className="px-5 py-3 text-mywhite bg-myblue rounded-full transform hover:scale-105 transition-transform duration-150"
                >
                    Sign Up
                </button>

                {/* Link to Log In Page */}
                <div className="text-spotifylightgray mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-spotifylightgray underline hover:text-gray-300">
                    Log in here
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
}