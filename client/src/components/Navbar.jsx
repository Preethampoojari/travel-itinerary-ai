import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { logoutUser } from "../services/authService";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("User logged out successfully");

      logout();
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Error logging out");
    }
  };

  return (
    <nav className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          TravelAI
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Home
          </Link>

          {isAuthenticated && (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/history"
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                History
              </Link>
            </>
          )}

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 flex flex-col gap-4 shadow-sm">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Home
          </Link>

          {isAuthenticated && (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/history"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                History
              </Link>
            </>
          )}

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition text-center"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
