import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-[#d6eaf8] shadow-xl ">
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
            <div></div>
            <div className=" pl-0 text-xl space-x-0"><span className='text-[#1ddb14] font-bold text-4xl mr-18'>TOUR</span><span className='text-[#db1414] font-bold text-3xl'>SPHERE</span></div>

          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1text-xl font-semibold">
            <li><a>Home</a></li>
            <li><a>Add Tourists Spot</a></li>
            <li><a>My List</a></li>
            
            <li><a>All Tourists Spot</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white text-lg bg-[#1ddb14] ">Sign In</a>
          <a className="btn  text-white text-lg  bg-[#1ddb14]">Sign Up</a>
        </div>
      </div>
    );
};

export default Navbar;