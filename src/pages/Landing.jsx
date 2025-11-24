import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/images/event-background.jpg')" }}>
      <div className="absolute inset-0 bg-pink-900 bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Event Planner 💖</h1>
          <p className="text-lg italic mb-6">Plan with clarity, build with legacy.</p>
          <Link to="/register">
            <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded shadow hover:bg-pink-100 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
