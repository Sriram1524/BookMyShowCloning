
import { Film, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cinema-gray pt-12 pb-6 border-t border-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Film className="h-8 w-8 text-cinema-red mr-2" />
              <span className="text-2xl font-bold text-white">CinemaGo</span>
            </div>
            <p className="text-gray-400 mb-4">
              Book movie tickets quickly and easily for all your favorite theaters and movies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cinema-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cinema-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cinema-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cinema-red transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cinema-red transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cinema-red transition-colors">Movies</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cinema-red transition-colors">Theaters</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cinema-red transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cinema-red transition-colors">Offers</Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cinema-red transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cinema-red transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cinema-red transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cinema-red transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cinema-red transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Download Our App</h3>
            <p className="text-gray-400 mb-4">
              Get our mobile app for a better booking experience.
            </p>
            <div className="flex flex-col space-y-3">
              <a href="#" className="bg-black text-white py-2 px-4 rounded flex items-center justify-center border border-gray-700 hover:bg-gray-900 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="App Store" className="h-5 mr-2 invert" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-black text-white py-2 px-4 rounded flex items-center justify-center border border-gray-700 hover:bg-gray-900 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/1024px-Google_Play_Arrow_logo.svg.png" alt="Google Play" className="h-5 mr-2 invert" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CinemaGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
