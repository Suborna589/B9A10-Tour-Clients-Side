import React from 'react';
import { Link } from 'react-router-dom';

const AllTourist = ({tourists}) => { 
    const{image_url,tourist_spot_name,average_cost,totalVisitorsPerYear,travel_time,seasonality}=tourists;
    return (
        <div className='ml-5'>
            <div className="card bg-base-100 h-[500px] w-[400px] shadow-xl">
  <figure>
    <img
    className=''
      src={image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="text-xl font-bold text-[#FF4500]">{tourist_spot_name}</h2>
    <p>Average Cost:{average_cost}</p>
    <p>Per Year Visitors:{totalVisitorsPerYear}</p>
    <p>Tour Time:{travel_time}</p>
    <p>Season:{seasonality}</p>
    <div className="card-actions justify-end">
     <Link to='/details'> <button className="btn bg-[#00BFFF] text-lg text-white font-bold">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllTourist;