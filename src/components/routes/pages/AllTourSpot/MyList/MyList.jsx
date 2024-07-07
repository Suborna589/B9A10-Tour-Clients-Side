import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ListCard from './ListCard'; 
import { BsPersonFillAdd } from "react-icons/bs";

const MyList = () => { 

    const spots=useLoaderData();
    return (
        <>
{/* 
        <div className='grid grid-cols-2'>
       
        </div> */} 
    
    <div className='flex  gap-4 p-12'>
        <div>
          <BsPersonFillAdd className='text-4xl text-[#0101DF]'></BsPersonFillAdd>
        </div>
   
<div>    <span className=' text-[#00FF00] font-bold text-3xl mt-8 mb-12' >New Tourist Spots List: <span  className='text-[#FFFF00]'>{spots.length}</span></span> 
</div> 
    </div>
         <div className='grid grid-cols-1 gap-8 w-[800px] ml-12 mb-6'>
         {
            spots.map(spott=><ListCard key={spott._id} spott={spott}></ListCard>
              
            )
           } 
         </div>
        </>
    );
};

export default MyList;