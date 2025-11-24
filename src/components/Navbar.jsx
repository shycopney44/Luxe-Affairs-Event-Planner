import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-600">Event Planner 💖</h1>
      <div className="space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-pink-600">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-pink-600">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
