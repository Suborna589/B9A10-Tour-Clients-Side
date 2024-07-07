import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllTourSpot = () => { 
const spots = useLoaderData()
    return (
        <div>
            <h2>This is all tourist spot:{spots.length}</h2>
        </div>
    );
};

export default AllTourSpot;