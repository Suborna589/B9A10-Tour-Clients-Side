import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Hook = () => {
const values=useContext(AuthContext) ;
return values;
};

export default Hook;