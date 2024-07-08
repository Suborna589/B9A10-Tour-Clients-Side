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
        
<div className='text-center mt-10 mb-6'>
    <h1 className='text-3xl font-bold mt-8 mb-4 '>Latest Tourist Spot</h1> 
    <p>A place of interest where tourists visit, typically for its inherent or an exhibited natural or <br />cultural value, historical significance, natural or built beauty, offering leisure and amusement.</p>
</div>
<div className='lg:grid grid-cols-3 gap-12 sm:col-span-1  gap-16 mr-16 mb-8 ml-10 '>
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