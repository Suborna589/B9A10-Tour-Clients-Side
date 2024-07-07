import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ListCard = ({spott}) => { 
    const {_id,image,spot,country,location,cost,seasonality,time,visit,email,name,}=spott; 


    const handleDelete=_id=>{  
      console.log(_id) 


      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
           


          fetch(`http://localhost:5000/spot/${_id}`,{
            method:"DELETE"
          })  

          .then(res=>res.json())
          .then(data=>{
             console.log(data) 
             if(data.deletedCount>0){ 
              Swal.fire({
            title: "Deleted!",
            text: "Your Spot has been deleted.",
            icon: "success"
          });

             }
          })


        }
      });


    }
    return (
        <div> 
     <div className="card card-side h-[340px] bg-base-100 shadow-xl">
  <figure>
    <img
      src={image} className='w-[330px] h-[340px]'
      alt="Movie" />
  </figure>
  <div className="card-body">
 <div className='grid grid-cols-2 gap-4'>
 <h2 className="text-[#ea580c]">Tourist Spot Name: {spot}</h2>
    <h2 className="text-[#84cc16]">Country Name: {country}</h2>
    <h2 className="text-[#ea580c]">Location: {location}</h2>
    <h2 className="text-[#84cc16]">Average Cost: {cost}</h2>
    <h2 className="text-[#ea580c]">Seasonality: {seasonality}</h2>  
    <h2 className="text-[#84cc16]">Travel Time: {time}</h2>  
    </div> 
    <div className='mt-12 space-y-2'>
    <h2 className="text-blue-600">Name: {name}</h2>
    <p className="text-blue-600">Email: {email}</p>

    </div>
   
    <div className="card-actions justify-end gap-6 ml-20 mt-6">
      <Link to={`updateSpot/${_id}`}>     
       <button  className="text-white font-extrabold  bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">UPDATE</button>
      </Link> 
      <div>
      <button  onClick={()=>handleDelete(_id)}  className="text-white font-extrabold  bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">DELETE</button>
      </div>
 
  
    </div>
  </div>
</div>
   
 
            
        </div>
    );
};

export default ListCard;