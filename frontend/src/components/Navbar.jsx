import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='flex justify-between items-center p-[2rem] bg-red-400'>
      <Link to='/' className='text-[1.7rem] italic'>
        MyBlogApp
      </Link>

      <div className='flex justify-between items-center gap-6 text-[1.1rem]'>
        <Link
          to='/login'
          className='text-black hover:text-white font-medium transition duration-4000 ease-in'
        >
          Log In
        </Link>
        <Link
          to='/signup'
          className='text-black hover:text-white font-medium transition duration-4000 ease-in'
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
