
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, Film, MapPin, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-cinema-gray sticky top-0 z-50 shadow-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Film className="h-8 w-8 text-cinema-red mr-2" />
            <span className="text-2xl font-bold text-white">CinemaGo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                Movies <span className="ml-1">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-cinema-gray border border-gray-700 hidden group-hover:block">
                <div className="py-1">
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cinema-red hover:text-white">
                    Now Showing
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cinema-red hover:text-white">
                    Coming Soon
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                Theaters <span className="ml-1">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-cinema-gray border border-gray-700 hidden group-hover:block">
                <div className="py-1">
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cinema-red hover:text-white">
                    All Theaters
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cinema-red hover:text-white">
                    Find Nearby
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1 w-full max-w-xs">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for movies..."
              className="bg-transparent border-none focus:outline-none text-white pl-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <MapPin className="h-5 w-5 mr-1" />
              <span>Location</span>
            </Link>
            <Link to="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <User className="h-5 w-5 mr-1" />
              <span>Sign In</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-gray-700 mt-4">
            <div className="flex items-center bg-gray-800 rounded-full px-3 py-2 mb-4">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for movies..."
                className="bg-transparent border-none focus:outline-none text-white pl-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Link to="/" className="block py-2 text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/" className="block py-2 text-gray-300 hover:text-white">
              Movies
            </Link>
            <Link to="/" className="block py-2 text-gray-300 hover:text-white">
              Theaters
            </Link>
            <Link to="/" className="flex items-center py-2 text-gray-300 hover:text-white">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Location</span>
            </Link>
            <Link to="/" className="flex items-center py-2 text-gray-300 hover:text-white">
              <User className="h-5 w-5 mr-2" />
              <span>Sign In</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
