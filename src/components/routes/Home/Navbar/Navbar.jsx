import React from 'react'; 
import logo2 from '../../../../../public/logo2.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-[#fdfefe] shadow-xl ">
        <div className="navbar-start">
          <div className="dropdown">
          
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
          
          </div> 
          <div className='flex space-x-0 items-center gap-0'>
            <div><img className='w-14 h-14 rounded-2xl'src={logo2} /></div>
            <div className=" pl-0 text-xl space-x-0"><span className='text-[#1ddb14] font-bold text-4xl mr-18'>TOUR </span><span className='text-[#2014db] font-bold text-4xl'>SPHERE</span></div>

          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl text-[#14d2db] font-semibold">
            <li><a>Home</a></li>
            <li><a>Add Tourists Spot</a></li>
            <li><a>My List</a></li>
            
            <li><a>All Tourists Spot</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link to="/login" className=" text-white text-lg btn btn-outline btn-accent font-bold rounded-xl ">LOGIN</Link>
          <Link to="/signup"className="btn btn-outline btn-accent text-white text-lg font-bold  rounded-xl ">SIGNUP</Link>
        </div>
      </div>
    );
};

export default Navbar;