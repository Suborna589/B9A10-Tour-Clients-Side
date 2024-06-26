import React from 'react';

const SpotCards = ({tourists}) => {
    const{tourists_spot_name,average_cost,totalVisitorsPerYear,travel_time,seasonality}=tourists;
    return (
        <div> 
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
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