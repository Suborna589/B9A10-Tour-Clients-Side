import React from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import { useLoaderData } from 'react-router-dom';
import SpotCards from './SpotCard/SpotCards';

const Home = () => {
    const tourists=useLoaderData();
    return (
        <div> 

        <div>
        <BannerSlider></BannerSlider>
        </div> 
        
 
<div className='lg:grid grid-cols-3 gap-6 m-6 sm:col-span-1 ml-5'>
{
                 tourists.map(tourist=> <SpotCards
                        key={tourist.id} 
                        tourists={tourist}>
                       
                    </SpotCards>)
                }
</div> 


  
  


        </div>
    );
};

export default Home;