import React from 'react';

const AddTourSpot = () => { 

    const handleAddTourSpot= event=>{ 
        

    }

    
    return (
        <div> 
          <h1 className='text-center ml-96 font-bold text-4xl text-[#0000FF] h-[60px] w-[600px] bg-[#82e0aa]'>Add New Tourist Spot</h1>
               <form onSubmit={handleAddTourSpot} className=''> 
                
                <div>

                <label className="form-control  ml-72  ">
  <div className="label">
    <span className="label-text">Image URL</span>
  </div>

  <input type="text" placeholder="Image URL" name='image' className="input input-bordered w-[940px] " />

</label>
        </div>
        <div className='grid grid-cols-2  ml-72 '>
                <div>

                <label className="form-control  ">
  <div className="label">
    <span className="label-text">Tourist Spot Name</span>
  </div>
  <input type="text" placeholder="Tourist Spot Name" name="spot" className="input input-bordered w-[400px]" />

</label>
        </div>
                <div>

                <label className="form-control  ">
  <div className="label">
    <span className="label-text">Country Name</span>
  </div>
  <input type="text" placeholder="Country Name" name="country" className="input input-bordered w-[400px]" />

</label>
        </div>
                <div>

                <label className="form-control ">
  <div className="label">
    <span className="label-text">Location</span>
  </div>
  <input type="text" placeholder="Location" name="location" className="input input-bordered w-[400px]" />

</label>
        </div>
   
                <div>

                <label className="form-control">
  <div className="label">
    <span className="label-text">Average Cost</span>
  </div>
  <input type="text" placeholder="Average Cost" name="cost" className="input input-bordered w-[400px]" />

</label>
        </div> 
       
                <div>

                <label className="form-control ">
  <div className="label">
    <span className="label-text">Seasonality </span>
  </div>
  <input type="text" placeholder="Seasonality" name="seasonality" className="input input-bordered w-[400px]" />

</label>
        </div> 
                <div>

                <label className="form-control ">
  <div className="label">
    <span className="label-text">Travel Time </span>
  </div>
  <input type="text" placeholder="travel_time " name="time" className="input input-bordered w-[400px] " />

</label>
        </div> 
                <div>

                <label className="form-control ">
  <div className="label">
    <span className="label-text">TotaVisitorsPerYear</span>
  </div>
  <input type="text" placeholder="TotaVisitorsPerYear" name="visit" className="input input-bordered w-[400px]" />

</label>
        </div> 
                <div>

                <label className="form-control ">
  <div className="label">
    <span className="label-text">User Email</span>
  </div>
  <input type="email" placeholder="User Email" name="email" className="input input-bordered w-[400px]" />

</label>
        </div> 
                <div>

                <label className="form-control ">
  <div className="label">
    <span className="label-text">User Name</span>
  </div>
  <input type="text" placeholder="User Name" name="name" className="input input-bordered w-[400px]" />

</label>
        </div>  

            <div>

<label className="form-control ">
<div className="label">
<span className="label-text">Short description</span>
</div>
<input type="text" placeholder="short description" name="description" className="input input-bordered w-[400px] " />

</label>
</div> 
 


        </div> 
    
       
        <input type="submit"  value="Add  New Spot" className='w-[840px] ml-80 text-white btn bg-[#0000FF] mt-10' /> 
       
            </form>
        </div>
    );
};

export default AddTourSpot;