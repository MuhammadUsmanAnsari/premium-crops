import React, { createContext, useState } from 'react'
export const AuthContext=createContext()
export default function AuthContextProvider(props) {
  const [isAuthenticated,setAuthenticated]=useState(false)
  const [counter,setCounter]=useState(0)
    return (
    <>
     <AuthContext.Provider value={{isAuthenticated,setAuthenticated,counter,setCounter}}>
        {props.children}
     </AuthContext.Provider>
    </>
  )
}
