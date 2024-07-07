import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
 export const AuthContext=createContext(null)
const AuthProvider = ({children}) => { 


    const [users,setUsers]=useState(null) 
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{ 
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

const userInfo={ 
    users, 
    createUser,
    loading,
     
}




    return (
        <AuthContext.Provider  value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
