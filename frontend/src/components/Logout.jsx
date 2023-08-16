import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

function Logout() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className='flex justify-between items-center p-[2rem] bg-red-400'>
      <Link to='/' className='text-[1.7rem] italic'>
        MyBlogApp
      </Link>

      <div className='flex justify-between items-center gap-6 text-[1.1rem]'>
        <div>{user.email}</div>
        <Link
          to='/login'
          className='text-black hover:text-white font-medium transition duration-4000 ease-in'
          onClick={handleLogout}
        >
          Log Out
        </Link>
      </div>
    </nav>
  );
}

export default Logout;
