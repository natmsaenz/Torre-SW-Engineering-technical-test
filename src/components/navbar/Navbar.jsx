import React from 'react'; // eslint-disable-line no-unused-vars
import { FaSearch } from 'react-icons/fa';
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <div className='navbar'>
        <h1>torre.co</h1>
      </div>
      <div className='search'>
        
        <button>
            <FaSearch />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
