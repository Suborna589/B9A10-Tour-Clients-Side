
import BannerSlider from './BannerSlider/BannerSlider';
import { Link, useLoaderData } from 'react-router-dom';
import React, { useState } from 'react';
import SpotCards from './SpotCard/SpotCards';

const Home = () => {
    const tourists=useLoaderData(); 
    const[seeElment,setSeeElement]=useState(6) 
    const [showbutton ,setShowButton]=(" ")
    const seeMore=()=>{
        setSeeElement((prevValue)=>prevValue+3)
    } 

    const slice=tourists.slice(0,seeElment);
    return (
        <div> 

        <div>
        <BannerSlider></BannerSlider>
        </div> 
        
<div className='text-center mt-10 mb-6'>
    <h1 className='text-3xl font-bold mt-8 mb-4 '>Latest Tourist Spot</h1> 
    <p>A place of interest where tourists visit, typically for its inherent or an exhibited natural or <br />cultural value, historical significance, natural or built beauty, offering leisure and amusement.</p>
</div>
<div className='lg:grid grid-cols-3 gap-12 sm:col-span-1  gap-16 mr-16 mb-8 ml-10 '>
{
                slice.map(tourist=> <SpotCards
                        key={tourist.id} 
                        tourists={tourist}>
                       
                    </SpotCards>)
                } 
<div>




<button  type="button" className =" select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
         onClick={
            seeMore}>See More</button>

</div>
</div> 


  
  


        </div>
    );
};

export default Home;