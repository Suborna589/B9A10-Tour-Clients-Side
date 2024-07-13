import React, { useContext, useState } from 'react';
import login from '../../../../../../public/login.jpg' 
import { Link } from 'react-router-dom'; 
import { AuthContext } from '../../../../../Provider/AuthProvider'; 
import { FaUserCircle } from "react-icons/fa";
import Swal from 'sweetalert2';
import {FaEye, FaEyeSlash } from "react-icons/fa6";

const LogIn = () => {  
  const [showPassword,setShowPassword]=useState(false)
  
  const {signInUser,googleLogin,setUsers}=useContext(AuthContext);

  const handleLogIn= e=>{
    e.preventDefault();
    const form=e.target; 
    const  email=form.email.value;
    const password=form.password.value;
    console.log(email,password)  
    signInUser(email,password) 
    
    .then(result=>{
      console.log(result.user) 
      const user={
        email,
        lastLoggedAt:result.user?.metadata?.lastSignInTime
      }  
      // update last logged at the  atabase

      fetch('http://localhost:5000/user',{
        method:"PATCH" ,

        headers:{
          "content-type":"application/json"
        } ,
        body:JSON.stringify(user)

      })  

      .then(res=>res.json())
      .then(data=>{
        console.log(data); 
     
      })
     
    }) 
    .catch(error=>{
      console.error(error)
    }) 
  

    
    

  }  
  const handleGoogleLogin=()=>{
    googleLogin() 
    .then(result=>setUsers(result.user))
  }
    return (
        <div className="hero bg-[url('https://i.ibb.co/MpZy65v/users.webp')]  min-h-screen">
        <div className="hero-content lg:flex-row gap-24"> 
      

        <div className="text-center lg:text-left">
            <img className=' w-[560px] h-[440px] rounded-xl' src={login} alt="" /> 

          
          </div>
         
          <div className="card bg-[#FFFFFF] w-[450px] h-[520px] shrink-0 shadow-2xl">
            <form className="card-body " onSubmit={handleLogIn}> 
                
              <div className="form-control"> 
        
              <FaUserCircle className='text-6xl text-[#FFA500]  ml-40 '/>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span> 
                  
                </label>
                <input type={showPassword ? "text":"password"} name='password' placeholder="password" className="input input-bordered" required /> 
                <span className='absolute top-1/3 mt-3 lg:ml-80 sm:ml-60 text-lg'  onClick={()=>setShowPassword(!showPassword)}>
                  {
                    showPassword ?    <FaEye></FaEye>  : <FaEyeSlash></FaEyeSlash>
                  }
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FFA500] text-white font-bold">LOGIN</button>
              </div>

             <p className='flex gap-12 text-center ml-6 mt-3'>Create have an Account?<Link to='/signup' className='text-[#0000FF] font-bold '>SignUp</Link></p>
            </form> 
            <button onClick={handleGoogleLogin} className="btn bg-[#FFA500] text-white font-bold">Google</button>

          </div>
        </div>
      </div>
    );
};

export default LogIn;