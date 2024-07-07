import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ListCard from './ListCard'; 
import { BsPersonFillAdd } from "react-icons/bs";

const MyList = () => { 

    const loadedSpots=useLoaderData(); 
    const[spots,setSpots]=useState(loadedSpots);
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
         <div className='grid grid-cols-1 gap-4 ml-4'>
         {
            spots.map(spott=><ListCard key={spott._id} spott={spott} spots={spots}  setSpots={setSpots}></ListCard>
              
            )
           } 
         </div>
        </>
    );
};

export default MyList;