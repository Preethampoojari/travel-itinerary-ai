import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Home() {
  const { isAuthenticated } = useAuth();
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            AI Powered <br />
            <span className="text-indigo-600">Travel Itinerary</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Upload flight tickets, hotel bookings, and travel documents.
            Generate smart AI itineraries instantly.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to={isAuthenticated ? "/dashboard" : "/login"}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold"
            >
              Get Started
            </Link>

            {!isAuthenticated && (
              <Link
                to="/login"
                className="border border-gray-300 px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Features */}

        <div className="grid md:grid-cols-3 gap-6 mt-24">
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-bold">Upload Bookings</h3>

            <p className="text-gray-600 mt-3">
              Upload tickets, hotel PDFs, or travel images.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-bold">AI Generated Plans</h3>

            <p className="text-gray-600 mt-3">
              AI creates day-wise itinerary automatically.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-bold">Share Trips</h3>

            <p className="text-gray-600 mt-3">
              Share itineraries with public links instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
