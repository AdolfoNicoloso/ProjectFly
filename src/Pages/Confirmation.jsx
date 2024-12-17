import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <div className="bg-spotifydarkgray h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold text-mywhite">Account Confirmed!</h1>
        <p className="text-mywhite">
          Your email has been successfully confirmed. You can now log in to your account.
        </p>
        <Link
          to="/login"
          className="text-spotifylightgray underline hover:text-gray-500 mt-4"
        >
          Go to Log In
        </Link>
      </div>
    </div>
  );
}
