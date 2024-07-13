
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hook from '../Hook/Hook';


const SocialLogin= () => {
    const{googleLogin,githubLogin}=Hook() 

   const navigate =useNavigate() 
   const location=useLocation() 
   const form=location?.state || '/';

    const handleSocial=(socialProvider)=>{ 
        socialProvider() 
        .then(result=>{
          if(result.user) {
           navigate(form)
          }

        })

    }
    return (
        <div className='flex mb-10 gap-6 ml-6'>  
            <div>
            <button onClick={()=>handleSocial(googleLogin)} className="btn btn-outline btn-info text-xl">Google With Login</button>
            </div>
            <div>
            <button  onClick={()=>handleSocial(githubLogin)}className="btn btn-outline btn-error text-xl">Github With Login</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;
