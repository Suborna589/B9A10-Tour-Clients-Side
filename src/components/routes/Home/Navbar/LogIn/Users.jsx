import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => { 
    const loadUsers=useLoaderData() 
    const [users,setUsers]=useState(loadUsers) 


const handleDeleted=id=>{ 
// make  sure user is confirmed to delete 

fetch(`http://localhost:5000/user/${id}`,{ 
    method:"DELETE"
    
}) 
.then(res=>res.json()) 
.then(data=>{
    if(data.deletedCount>0){
        console.log("delete Successfully");

        // remove the user from the ui  

        const remainingUsers=users.filter(user=> user._id !== id)
        setUsers(remainingUsers);

    }
})

}

    return (
        <div>
           <h1>Users:{loadUsers.length}</h1> 

                     <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        
        <th>Email</th>
        <th>CreatedAt</th>
        <th>Action</th> 
        <th>Logged Time</th>
        
      </tr>
    </thead>
    <tbody>
     
    {
        users.map(user=>
            <tr key={user._id}> 
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td></td> 
            <td>
                <button onClick={()=>(handleDeleted(user._id))}className='btn btn-secondary'>DELETE</button>
            </td>
           
          </tr>
        )
    } 
   
   
    </tbody>
  </table>
</div> 
  
        </div>
    );
};

export default Users;