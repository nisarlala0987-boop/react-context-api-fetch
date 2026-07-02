import React from 'react'
import { useContext } from 'react'
import { userContex } from './Userproduct'



function User({children}) {
const {user,setUser}=useContext(userContex)
function changeuser (params) {
  
  setUser({
    name:"nisar",
    email:"nisar@gmail",
  phone:"0233333"
  })
}


return (
   <div>
<h1>{user?.name}</h1>
<button onClick={changeuser}>change</button>
<div>viv</div>
<div>viv</div>
<div>viv</div>
<div>viv</div>
<div>viv</div>
    </div>
  )
}

export default User