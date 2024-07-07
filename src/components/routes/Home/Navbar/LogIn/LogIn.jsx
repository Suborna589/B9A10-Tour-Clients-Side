import React, { useContext } from 'react';
import login from '../../../../../../public/login.jpg' 
import { Link } from 'react-router-dom'; 
import { AuthContext } from '../../../../../Provider/AuthProvider'; 
import { FaUserCircle } from "react-icons/fa";


const LogIn = () => { 
  
  const {createUser}=useContext(AuthContext);

  const handleLogIn= e=>{
    e.preventDefault();
    const form=e.target; 
    const  email=form.email.value;
    const password=form.password.value;
    console.log(email,password)  
    createUser(email,password) 
    .then(result=>{
      console.log(result.user)
    }) 
    .catch(error=>{
      console.error(error)
    })

  } 
    return (
        <div className="hero bg-[url('https://i.ibb.co/MpZy65v/users.webp')]  min-h-screen">
        <div className="hero-content lg:flex-row gap-24"> 
        {/* lg:flex-row-reverse">  */}

        <div className="text-center lg:text-left">
            <img className=' w-[560px] h-[440px] rounded-xl' src={login} alt="" /> 

          
          </div>
         
          <div className="card bg-[#aed6f1] w-[450px] h-[520px] shrink-0 shadow-2xl">
            <form className="card-body " onSubmit={handleLogIn}> 
                
              <div className="form-control"> 
        
              <FaUserCircle className='text-6xl text-[#FFA500]  ml-40 '/>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FFA500] text-white font-bold">LOGIN</button>
              </div>

             <p className='flex gap-12 text-center ml-6 mt-3'>Create have an Account?<Link to='/signup' className='text-[#0000FF] font-bold '>SignUp</Link></p>
            </form> 
          
          </div>
        </div>
      </div>
    );
};

export default LogIn;