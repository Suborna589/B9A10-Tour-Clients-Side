import React from 'react';

const SpotCards = ({tourists}) => {
    const{image_url,tourists_spot_name,average_cost,totalVisitorsPerYear,travel_time,seasonality}=tourists;
    return (
        <div> 
            <div className="card card-compact bg-base-100 w-full h-[480px] shadow-xl">
  <figure>
    <img
       className="h-[270px] "src={image_url} alt="tour" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title">{tourists_spot_name}</h2> 
    <p>{average_cost}</p>  
    <p>{totalVisitorsPerYear}</p>
    <p>{travel_time}</p>
    <p>{seasonality}</p>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
   
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SpotCards;