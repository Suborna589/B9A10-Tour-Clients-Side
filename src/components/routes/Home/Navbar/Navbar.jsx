import React from 'react'; 
import logo2 from '../../../../../public/logo2.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-[#FFFFE0] shadow-xl ">
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
            <div><Link to='/'><img className='w-14 h-14 rounded-2xl'src={logo2} /></Link></div>
            <div className=" pl-0 text-xl space-x-0"><span className='text-[#1ddb14] font-bold text-4xl mr-18'>TOUR </span><span className='text-[orangered] font-bold text-4xl'>SPHERE</span></div>

          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl text-[#00BFFF] font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addspot">Add Tourists Spot</Link></li>
            <li><Link to="/list">My List</Link></li>
            
            <li><Link to="/allspot">All Tourists Spot</Link></li>
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