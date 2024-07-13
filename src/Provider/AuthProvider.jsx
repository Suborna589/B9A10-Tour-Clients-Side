
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'; 
import { GoogleAuthProvider } from "firebase/auth";


 export const AuthContext=createContext(null)  

const googleProvider = new GoogleAuthProvider();

const githubProvider=new GithubAuthProvider();
 const auth = getAuth(app); 

const AuthProvider = ({children}) => {  
    const [user,setUser] =useState(null)  
    const[loading,setLoading]=useState(true) 
    console.log(loading);


const createUser=(email,password)=>{ 
    setLoading(true);
  return createUserWithEmailAndPassword(auth,email,password) 

}  

const updateUserProfile= (name,photo)=>{  
    
    //  window.location.reload()
  
  return  updateProfile(auth.currentUser, {  
    
   
        displayName: name,
         photoURL:photo
    }) 
   
}

const signIn=(email,password)=>{  
    setLoading(true);
   return signInWithEmailAndPassword(auth,email,password)

} 

const googleLogin=()=>{  
    setLoading(true);
    return signInWithPopup(auth,googleProvider)

}
const githubLogin=()=>{ 
    setLoading(true);
    return signInWithPopup(auth,githubProvider)
} 

const logOut=()=>{ 
    setUser(null)
    signOut(auth) 

}
useEffect(()=>{ 
 const unsubscribe= onAuthStateChanged(auth, (user) => {
   
    setUser(user); 
    setLoading(false); 
         
         
    }); 
    return ()=>unsubscribe();

    
},[]);
    const userInfo={ 
        user,
        createUser, 
        signIn,  
        googleLogin, 
        githubLogin, 
        logOut,  
        loading,
        updateUserProfile,

    }
    return (
        <div> 

            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;
