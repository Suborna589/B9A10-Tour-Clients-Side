import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTourist from './AllTourist';

const AllTourSpot = () => { 
const tourists = useLoaderData()
    return (
        <div>
       

       <div className='grid grid-cols-3 gap-4 '>
       {
            tourists.map(tourist=><AllTourist  key={tourist.id} 
                tourists={tourist}></AllTourist>)
         }
       </div>
   
        </div>
    );
};

export default AllTourSpot;