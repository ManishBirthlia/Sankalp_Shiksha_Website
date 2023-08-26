import React, { createContext, useContext, useEffect, useState } from 'react';
import {auth} from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const StoreContext =createContext({});

export const ContextProvider=({children})=>{
    const [user,setUser]=useState("");
    const [UserPresent,setUserPresent]=useState(false);
    useEffect(()=>{
        const isLocalUser=localStorage.getItem("email");
        // const isLocalUser=auth?.currentUser?.email;
       console.log(isLocalUser);
       if(isLocalUser){
        setUser(isLocalUser);
        setUserPresent(true);
       }
    },[]); 
    const updatePass=async(email,oldPass,newPass)=>{
    }
    const signIn=async({name,email,pass,rPass})=>{
        try{
            const userCreed=await createUserWithEmailAndPassword(auth,email,pass);
            console.log(userCreed);
            setUserPresent(true);
            localStorage.setItem("email",email);
        }catch(error){
            console.error(error);
        }
    }
    const logIn=async(email,pass)=>{
        try{
            const userCreed=await signInWithEmailAndPassword(auth,email,pass);
            console.log(userCreed);
            setUserPresent(true);
            localStorage.setItem("email",email);
        }catch(error){
            console.error(error);
        }
    }
    return (
        <StoreContext.Provider value={{user,UserPresent,signIn,updatePass,logIn,setUserPresent}}>
            {children}
        </StoreContext.Provider>
    );
}
export const useStorage = ()=> useContext(StoreContext);
