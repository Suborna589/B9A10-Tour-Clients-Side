import React from 'react';
import { Link } from 'react-router-dom';
const SpotCards = ({tourists}) => { 
  
    const{image_url,tourist_spot_name,average_cost,totalVisitorsPerYear,travel_time,seasonality,short_description,_id}=tourists;
    return (
        <div> 
            <div className="card card-compact bg-base-100 h-[500px] w-[400px] shadow-xl">
  <figure>
    <img
       className=" "src={image_url} alt="tour" />
  </figure>
  <div className="card-body  ">
    <h2 className="text-xl font-bold text-[#7FFF00]">{tourist_spot_name}</h2> 
    <p>Average Cost: {average_cost}</p>  
    <p> Per Year Visttors: {totalVisitorsPerYear}</p>
    <p> Tour time: {travel_time}</p>
    <p> Season: {seasonality}</p> 
    <p>{short_description}</p>

    
   
    <div className="card-actions justify-center">
   <Link to='/details'><button className="btn bg-[#00FF00] font-bold text-white text-lg">View Details</button></Link> 



   
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SpotCards;