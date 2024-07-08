import React, { useContext } from 'react'; 
import sign1 from '../../../../../../public/sign1.jpg'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { AuthContext } from '../../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const SignUp = () => { 
  const {createUser}=useContext(AuthContext); 

  const handleSignUp=e =>{
  e.preventDefault();
  const form=e.target;
  const name=form.name.value;
  const email=form.email.value;
  const photo=form.photo.value;
  const password=form.password.value;
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
            <h1></h1>  
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
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>   
                <input type="password"  name="password" placeholder="password" className="input input-bordered w-full"  />
                </div> 
            
                <div className="form-control w-full mt-6">
                <button className="btn btn-primary">SIGNUP</button>
              </div>

             <p className='flex gap-12 text-center ml-6 mt-3'>Already have an Account?<Link to='/login' className='text-[#0000FF] font-bold '>LOGIN</Link></p>
     
           
        
            </form>
          </div> 
          
     
        </div>
        </div>
    );
};
      
export default SignUp;