import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 
import { A11y, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';
 function BannerSlider() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]} 
     effect='fade'
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  
  > 
<SwiperSlide>
    <div  className="w-[1350px] h-[600px] ml-1 mr-1 bg-[url('https://i.ibb.co/bmctX6H/tour-a.jpg')] bg-cover rounded-xl  justify-center">
    <div className='item-center text-white text-left '>  
        
        <h1 className='pt-[100px] w-[700px]  text-6xl  ml-52 font-bold '>
        Discover Most Beautiful Enjoyable Palace
        </h1> 
        <p className='pl-52 pt-8'>The Main Tower Building is the hotel proper, with each bof the rooms offering splendid views, easy access to all the resort areas and of course present <br /> with all modern amenities. They are designed for luxury and comfort and that is a vacationer's favourite combination.</p>
        </div> 
        </div> 
        </SwiperSlide>



    <SwiperSlide>
      <div  className="w-[1350px] h-[600px]  ml-1 mr-1 bg-[url('https://i.ibb.co/DY9Cbn5/tour-c.jpg')] bg-cover rounded-xl  justify-center">
      <div className='item-center text-white text-left '>  
        
        <h1 className='pt-[100px] w-[700px]  text-6xl  ml-52 font-bold '>
        Discover Most Beautiful Enjoyable Palace
        </h1> 
        <p className='pl-52 pt-8'>The Main Tower Building is the hotel proper, with each bof the rooms offering splendid views, easy access to all the resort areas and of course present <br /> with all modern amenities. They are designed for luxury and comfort and that is a vacationer's favourite combination.</p>
        </div> 
        
      </div>
      </SwiperSlide>
    <SwiperSlide>
      <div  className="w-[1350px] h-[600px]  ml-1 mr-1 bg-[url('https://i.ibb.co/zZMXksp/tour-d.jpg')] bg-cover rounded-xl  justify-center">
      <div className='item-center text-white text-left '>  
        
        <h1 className='pt-[100px] w-[700px]  text-6xl  ml-52 font-bold '>
        Discover Most Beautiful Enjoyable Palace
        </h1> 
        <p className='pl-52 pt-8'>The Main Tower Building is the hotel proper, with each bof the rooms offering splendid views, easy access to all the resort areas and of course present <br /> with all modern amenities. They are designed for luxury and comfort and that is a vacationer's favourite combination.</p>
        </div> 
        </div> 
      </SwiperSlide>
    <SwiperSlide>
      <div  className="w-[1350px] h-[600px] ml-1 mr-1  bg-[url('https://i.ibb.co/tztdTcN/tour-b.jpg')] bg-cover rounded-xl  justify-center">
      <div className='item-center text-white text-left '>  
        
        <h1 className='pt-[100px] w-[700px]  text-6xl  ml-52 font-bold '>
        Discover Most Beautiful Enjoyable Palace
        </h1> 
        <p className='pl-52 pt-8'>The Main Tower Building is the hotel proper, with each bof the rooms offering splendid views, easy access to all the resort areas and of course present <br /> with all modern amenities. They are designed for luxury and comfort and that is a vacationer's favourite combination.</p>
        </div> 
        </div> 
      </SwiperSlide>
 
   
  </Swiper>
  )
}

export default BannerSlider