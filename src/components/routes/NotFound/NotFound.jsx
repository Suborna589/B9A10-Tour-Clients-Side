import React from 'react';
import notfind from "../../../../public/notfind.jpg" 


const NotFound = () => {
    return (
        <div className='text-center'> 
        
            <img className=" w-[670px] h-[620px] ml-96"  src={notfind} alt="" />
            
        </div>
    );
};

export default NotFound;