import React from 'react';
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData,setUserData]=useState([]);  
  useEffect(()=>{
    const {admin,employees} = getLocalStorage()
    setUserData({admin,employees  })
  },[])
  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};
