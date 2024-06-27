import React from 'react';
import login from '../../../../../../public/login.jpg'
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content lg:flex-row gap-24"> 
        {/* lg:flex-row-reverse">  */}

        <div className="text-center lg:text-left">
            <img className='shadow-2xl w-[560px] h-[440px] rounded-xl' src={login} alt="" />
          
          </div>
         
          <div className="card bg-[#aed6f1] w-[450px] h-[520px] shrink-0 shadow-2xl">
            <form className="card-body "> 
                
              <div className="form-control"> 
              <p className="text-center text-white font-bold text-3xl">Sign in Now</p>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

             <p className='flex gap-12 text-center ml-6 mt-3'>Create have an Account?<Link to='/signup' className='text-[#0000FF] font-bold '>SignUp</Link></p>
            </form> 
          
          </div>
        </div>
      </div>
    );
};

export default LogIn;