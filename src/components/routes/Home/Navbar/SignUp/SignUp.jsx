import React, { useContext, useState } from 'react'; 
import sign1 from '../../../../../../public/sign1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import Swal from 'sweetalert2'; 
import { FaEye,FaEyeSlash } from "react-icons/fa6";
import Hook from '../../../Hook/Hook';
import SocialLogin from '../../../SocialLogin/SocialLogin';
const SignUp = () => { 
  const {createUser,updateUserProfile}=Hook(); 
  const [showPassword,setShowPassword]=useState(false)
  const [error,setError]=useState(" ")   


  const navigate =useNavigate() 
   
  const from= '/';
  

  const handleSignUp=e =>{
  e.preventDefault();
  const form=e.target;
  const name=form.name.value;
  const email=form.email.value;
  const photo=form.photo.value;
  const password=form.password.value;   

  


    



  
createUser( email,password) 
  
.then(()=>{  
 
updateUserProfile(name,photo) 

.then(()=>{  
 
     window.location.reload()  
    }) 
   
     navigate(from)  
     

       
     



}); 


 if(password.length<6){
  setError("password must be at least 6 characters")
  return
 } 
 if(!/[a-z]/.test(password)){ 
  setError("Must have an Uppercase later in the password")
  return

 } 
 if(!/[@#$%^&*]/.test(password)){ 
  setError("Must have an special character llike @#$%^&* in the password")
  return

 }  
 if(!/[a-z]/.test(password)){ 
  setError("Must have an Uppercase later in the password")
  return

 } 
 if(!/[A-Z]/.test(password)){ 
  setError("Must have an Uppercase later in the password")
  return

 } 
 else{
  Swal.fire({
    title: 'Success!',
    text: 'Sign up Successfully',
    icon: 'success',
    confirmButtonText: 'Cool'
  })
 
 } 



  console.log(name,email,photo,password) 
  createUser(email,password)
  .then(result=>{
    console.log(result.user)
    const createdAt=result.user?.metadata?.creationTime;
    const user={email,createdAt:createdAt} 
    fetch('http://localhost:5000/user',{
      method:"POST" ,

      headers:{
      'content-type':"application/json",

      } ,
      body:JSON.stringify(user)
    }) 
    .then(res=>res.json())
    .then(data=>{
     if(data.insertedId){
      Swal.fire({
        title: 'Success!',
        text: 'You data Sucess',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
     }
    })
  }) 
  .catch(error=>{
    console.error(error)
  })
  }
    return (
        <div>


<div className="hero-content  bg-[url('https://i.ibb.co/p1RGh3L/siback.jpg')] w-full bg-cover rounded-xl  justify-center   lg:flex-row-reverse">  
     

        <div className="text-center lg:text-left">
            <img className=' w-[560px] h-[440px] rounded-xl' src={sign1} alt="" />
          
          </div>

            <div className="mt-2 p-8 card shrink-0 lg:w-5/12 h-[550px] border-2 border-[#17eaae] shadow-2xl max-w-4xl mx-auto bg-[#FFFAFA]"> 
            <form  onSubmit={handleSignUp}>
          
            <FaUser className='ml-48 text-6xl  text-[#00FF00]'></FaUser>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>  
                <input type="text"   name="name" placeholder="name" className="input input-bordered w-full"  />   
                </div> 
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label> 
                <input type="email"  name="email" placeholder="email" className="input input-bordered w-full"  />
                </div> 
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span> 
                
                </label>  
                <input type="url"  name="photo" placeholder="photo url" className="input input-bordered w-full"  /> 
                </div> 
            <div className="form-control relative ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>   
                <input type={showPassword ?  "text": "password"}  name="password" placeholder="password" className="input input-bordered w-full"  /> 
                <span className='absolute top-1/2 mt-3 lg:ml-96 text-lg sm:ml-60'  onClick={()=>setShowPassword(!showPassword)}>
                  {
                    showPassword ? <FaEye></FaEye> :<FaEyeSlash></FaEyeSlash>
                  }
                  </span>
                </div> 
            {
              error && <small className='text-red-600'>{error}</small>
            }
                <div className="form-control w-full mt-6">
                <button className="btn btn-primary">SIGNUP</button>
              </div>

             <p className='flex gap-12 text-center ml-6 mt-3'>Already have an Account?<Link to='/login' className='text-[#0000FF] font-bold '>LOGIN</Link></p>
     
          <SocialLogin></SocialLogin>
        
            </form>
          </div> 
          
     
        </div>
        </div>
    );
};
      
export default SignUp;