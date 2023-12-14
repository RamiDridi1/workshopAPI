import React, { useEffect,useState } from 'react'
import axios from "axios"
import UserCard from "./UserCard"
function UserList() {
    let[ProfileList,setProfileList]=useState("")
    console.log(ProfileList,"aminnnne")
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setProfileList(res.data))
        .catch((err)=>console.log(err))
    }

    ,[])

  return (
    <div>
    { ProfileList && ProfileList.map((el)=>(
        <UserCard el={el}/>
     ))}
    </div>
  )
}

export default UserList
