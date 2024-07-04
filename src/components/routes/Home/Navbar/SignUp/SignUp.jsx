import React from 'react'; 
import sign from '../../../../../../public/sign.jpg'

const SignUp = () => {
    return (
        <div>


<div className="hero-content   lg:flex-row-reverse">  
     

        <div className="text-center lg:text-left">
            <img className=' w-[560px] h-[440px] rounded-xl' src={sign} alt="" />
          
          </div>

            <div className="mt-2 p-8 card shrink-0 lg:w-5/12 h-[550px] border-2 border-[#17eaae] shadow-2xl max-w-4xl mx-auto bg-[#eafaf1]"> 
            <form >
            <h1></h1> 
            <input type="text" placeholder="Type here" className="input input-bordered w-full"  />
            <input type="text" placeholder="Type here" className="input input-bordered w-full"  />
            <input type="text" placeholder="Type here" className="input input-bordered w-full"  />
            <input type="text" placeholder="Type here" className="input input-bordered w-full"  /> 
        
            </form>
          </div> 
          
     
        </div>
        </div>
    );
};
      
export default SignUp;