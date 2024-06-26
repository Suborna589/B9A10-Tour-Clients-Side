import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const Root = () => {
    return (
        <div  className='max-w-782  mx-auto p-1'> 
        <Navbar></Navbar>
            <Outlet></Outlet>  
            <Footer></Footer>

        </div>
    );
};

export default Root;