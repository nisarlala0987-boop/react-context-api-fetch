import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'

export const userContex = createContext()


function Userproduct({children}) {
const [user, setUser] = useState(null)
const [loading, setloading] = useState(true)
const getdata= async ()=>{
try {
  // if (loading) return <h1>loading....</h1>
    const response =await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    setUser({
name:data.name,
email:data.email,
phone:data.phone

    })
    console.log("data",data.phone)
} catch (error) {
    console.log("error", error) 
}
finally{
setloading(false)
}
}
useEffect(() => {
 getdata()
}, [])
  return (
    <>
    <userContex.Provider value={{user,setUser}}>
        {loading ? <h1>loading....</h1> : children}
    </userContex.Provider>
    </>
  )
}

export default Userproduct