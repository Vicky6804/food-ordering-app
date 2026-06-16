import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  // Status logic based on your requirement: "when login online, when logout offline"
  const isUserLoggedIn = btnNameReact === 'Logout';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#020617] border-b border-emerald-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="logo-container transition-transform hover:scale-110">
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png"
              alt="Logo"
              className="w-14 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <ul className="flex items-center gap-8 font-bold text-gray-300">
            {/* Status logic integrated here */}
            <li className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">
              Online Status: {onlineStatus && isUserLoggedIn ? '✅ Online' : '⛔ Offline'}
            </li>
            
            <li className="hover:text-emerald-400 transition-colors duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-emerald-400 transition-colors duration-300">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-emerald-400 transition-colors duration-300">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-emerald-400 transition-colors duration-300">
              <Link to="/grocery">Grocery</Link>
            </li>
            
            <li className="hover:text-emerald-400 transition-colors duration-300">
              <Link to="/cart" className="flex items-center gap-1">
                🛒 ({cartItems.length === 1 ? `${cartItems.length} item` : `${cartItems.length} items`})
              </Link>
            </li>

            <button
              className={`px-6 py-2 rounded-lg font-black transition-all duration-300 shadow-lg ${
                isUserLoggedIn 
                ? 'bg-red-500/20 text-red-500 border border-red-500/50 hover:bg-red-500 hover:text-white' 
                : 'bg-emerald-500 text-black hover:bg-emerald-400'
              }`}
              onClick={() => {
                btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
              }}
            >
              {btnNameReact}
            </button>

            <li className="px-4 font-black text-emerald-500 border-l border-white/20 ml-2 uppercase tracking-widest">
              <Link className="links">{loggedInUser}</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;