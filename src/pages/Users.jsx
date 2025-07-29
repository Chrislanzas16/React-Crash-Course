import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function Users () {
 const { id } = useParams()
 const [user, setInfo] = useState([])

 async function userData () {
 const { data }  = await axios.get (`https://jsonplaceholder.typicode.com/users/${id}`)
 setInfo(data)
 }
 
 useEffect (() => { userData()}, [])


 
 return <div style={{ border: `2px solid black` }} >
   
    <div>{user.name}</div>
   <div>{user.email}</div> 
    <div>{user.username}</div>
     <Link to="/">Go Back</Link>
 </div>
  
} 

export default Users;