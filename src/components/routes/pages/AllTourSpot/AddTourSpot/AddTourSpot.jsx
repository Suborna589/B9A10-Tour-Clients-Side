import React from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
       const AddTourSpot = () => { 

           const handleAddTourSpot= event=>{  
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
        const email=form.email.value;
        const name=form.name.value; 

        const newSpot={image,spot,country,location,cost,seasonality,time,visit,email,name,description} 
        console.log(newSpot); 

        // send data to the server 
        fetch('http://localhost:5000/spot',{ 


          method:'POST',

          headers:{
            'content-type':'application/json'
          },

          body: JSON.stringify(newSpot)



        })

        .then(res=>res.json()) 
        .then(data=>{
          console.log(data); 
          if(data.insertedId){ 
            Swal.fire({
              title: 'Success!',
              text: 'Tourist Spot Added Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })

          }
        })

     

    }
    // <h1 className='text-center ml-[430px] font-bold text-4xl text-[#0000FF] h-[60px] w-[600px] '>Add New Tourist Spot</h1>
    
    return (
     
  <div>
      <div className='bg-[url("https://i.ibb.co/fdjrXkv/add.webp")] w-[1350px]  rounded-xl h-[50px] pb-[400px]  bg-cover  text-center rounded-xl  justify-center mt-8 mx-auto max-w-8xl'>
      <p className='text-white text-4xl  pt-48 font-bold pb-6'>Added Tourist Spot </p> 
   <Link className ='text-xl font-semibold' to='/'><span className='text-[#f36012] '>Go Home</span></Link>  
  </div>
        <div className='bg-[#FFFAFA] w-[1120px] h-[700px] p-6 ml-32 mb-10 rounded-xl mt-12 shadow-xl' >  
        <div className='flex'>
          <div>
       <MdLibraryAdd className='ml-[300px] text-4xl text-[#FF0000]'>   </MdLibraryAdd>

            </div> 
          <div>
           <span className='text-center ml-8 font-bold text-4xl text-[#00FF00]  h-[60px] w-[600px] '>Add New Tourist Spot</span>

          </div>
        </div>

               <form onSubmit={handleAddTourSpot} className=''> 
                
                <div>

                <label className="form-control  ml-24  ">
  <div className="label">
    <span className="label-text">Image URL</span>
  </div>

  <input type="text" placeholder="Image URL" name='image' className="input input-bordered w-[880px] " />

</label>
        </div>
        <div className='grid grid-cols-2  ml-24 '>
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
    
       
       <a href="#_" className=" w-[890px] relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md ml-[100px] mt-5">
<span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span className=" w-[890px] relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">

  <input type="submit"  value="Add  New Spot" className="  ml-80 text-2xl text-white"/> 

    
        
</span>
</a>  


       
            </form>
        </div> 
        </div>
    );
};

export default AddTourSpot;