//  

import React from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
       const UpdateSpot = () => { 
const spott=useLoaderData(); 
const {_id,image,spot,country,location,cost,seasonality,time,visit,description} =spott;
           const handleUpdateTourSpot= event=>{  
      event.preventDefault(); 
        const form=event.target; 
        const image=form.image.value;
        const spot=form.spot.value;
        const country=form.country.value;
        const location=form.location.value;
        const cost=form.cost.value;
        const seasonality=form.seasonality.value;
        const time=form.time.value;
        const visit=form.visit.value;
        const description=form.description.value;
        

        const updateSpot={image,spot,country,location,cost,seasonality,time,visit,description} 
        console.log(updateSpot); 

        // send data to the server 
        fetch(`http://localhost:5000/list/${_id}`,{ 


          method:'PUT',

          headers:{
            'content-type':'application/json'
          },

          body: JSON.stringify(updateSpot)



        })

        .then(res=>res.json()) 
        .then(data=>{
          console.log(data); 
          if(data.modifiedCount>0){ 
            Swal.fire({
              title: 'Success!',
              text: 'Tourist Spot Successfully',
              icon: 'success',
               confirmButtonText: 'Done'
            }) 
            

          }
        })

     

    }
    // <h1 className='text-center ml-[430px] font-bold text-4xl text-[#0000FF] h-[60px] w-[600px] '>Add New Tourist Spot</h1>
    
    return (
        <div className='bg-[#EFFBFB] w-[1120px] h-[700px] p-6 ml-32 mb-10 rounded-xl mt-12 shadow-xl' >  
        <div className='flex'>
          <div>
       <MdLibraryAdd className='ml-[300px] text-4xl text-[#FF0000]'>   </MdLibraryAdd>

            </div> 
          <div>
           <span className='text-center ml-8 font-bold text-4xl text-[#01DF01]  h-[60px] w-[600px] '>Update Tourist Spot:{country}</span>

          </div>
        </div>

               <form onSubmit={handleUpdateTourSpot} className=''> 
                
                <div>

                <label className="form-control  ml-24  ">
  <div className="label">
    <span className="label-text">Image URL</span>
  </div>

  <input type="text" placeholder="Image URL" name='image' defaultValue={image}  className="input input-bordered w-[880px] " />

</label>
        </div>
        <div className='grid grid-cols-2  ml-24 '>
                <div>

                <label className="form-control  ">
  <div className="label">
    <span className="label-text">Tourist Spot Name</span>
  </div>
  <input type="text" placeholder="Tourist Spot Name" name="spot"  defaultValue={spot} className="input input-bordered w-[400px]" />

</label>
        </div>
                <div>

                <label className="form-control  ">
  <div className="label">
    <span className="label-text">Country Name</span>
  </div>
  <input type="text" placeholder="Country Name" name="country"  defaultValue={country}  className="input input-bordered w-[400px]" />

</label>
        </div>
                <div>

                <label className="form-control ">
  <div className="label">
    <span className="label-text">Location</span>
  </div>
  <input type="text" placeholder="Location" name="location"  defaultValue={location} className="input input-bordered w-[400px]" />

</label>
        </div>
   
                <div>

                <label className="form-control">
  <div className="label">
    <span className="label-text">Average Cost</span>
  </div>
  <input type="text" placeholder="Average Cost" name="cost"  defaultValue={cost}  className="input input-bordered w-[400px]" />

</label>
        </div> 
       
                <div>

                <label className="form-control ">
  <div className="label">
    <span className="label-text">Seasonality </span>
  </div>
  <input type="text" placeholder="Seasonality" name="seasonality" defaultValue={seasonality} className="input input-bordered w-[400px]" />

</label>
        </div> 
                <div>

                <label className="form-control ">
  <div className="label">
    <span className="label-text">Travel Time </span>
  </div>
  <input type="text" placeholder="travel_time " name="time" defaultValue={time}  className="input input-bordered w-[400px] " />

</label>
        </div> 
                <div>

                <label className="form-control ">
  <div className="label">
    <span className="label-text">TotaVisitorsPerYear</span>
  </div>
  <input type="text" placeholder="TotaVisitorsPerYear" name="visit" defaultValue={visit}   className="input input-bordered w-[400px]" />

</label>
        </div> 
       

            <div>

<label className="form-control ">
<div className="label">
<span className="label-text">Short description</span>
</div>
<input type="text" placeholder="short description"  name="description" defaultValue={description} className="input input-bordered w-[400px] " />

</label>
</div> 
 


        </div> 
    
       
       <a href="#_" className=" w-[890px] relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md ml-[100px] mt-5">
<span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span className=" w-[890px] relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">

  <input type="submit"  value="Update Tourist Spot" className="  ml-80 text-2xl text-white"/> 

    
        
</span>
</a>  


       
            </form>
        </div>
    );
};

export default UpdateSpot;