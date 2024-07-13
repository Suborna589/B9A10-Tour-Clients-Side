import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Hook from '../Hook/Hook';

const PrivateRoute = ({children}) => { 
    const {user,loading}=Hook();
    const location =useLocation();
if(loading){
    return <span className="loading loading-infinity loading-lg"></span>
}

    if(!user){ 
    return  <Navigate to='/login' state={location?. pathname || '/'}></Navigate>

}
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;