import React, { createContext, useState } from 'react'
export const AuthContext=createContext()
export default function AuthContextProvider(props) {
  const [isAuthenticated,setAuthenticated]=useState(false)
    return (
    <>
     <AuthContext.Provider value={{isAuthenticated,setAuthenticated}}>
        {props.children}
     </AuthContext.Provider>
    </>
  )
}
