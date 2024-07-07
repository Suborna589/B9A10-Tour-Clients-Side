import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTourist from './AllTourist';

const AllTourSpot = () => { 
const tourists = useLoaderData()
    return (
        <div>
            <h2>This is all tourist spot:{tourists.length}</h2> 

       <div className='grid grid-cols-3 gap-6 '>
       {
            tourists.map(tourist=><AllTourist  key={tourist.id} 
                tourists={tourist}></AllTourist>)
         }
       </div>
   
        </div>
    );
};

export default AllTourSpot;