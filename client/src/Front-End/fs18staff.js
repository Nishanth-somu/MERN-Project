import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from './assest/toy.jpeg' 
import axios from "axios";
export function StaffUpdate(){

   const[fetchdetail,setFetchdetail]=useState([])
   useEffect(()=>{
    fetch('http://localhost:9597/getdata')
    .then(res=>res.json())
    .then(data=>setFetchdetail(data))
   })


   const delt=(std_id)=>{
    var key={std_id:std_id}
    axios.post('http://localhost:9597/delete',key)
    .then((res)=>{
      if(res.data.status==="error"){
        alert("data are not delete")
      }
      else if(res.data.status==="success"){               
     alert("data are deleted")
      }
    })
 }

    return(
        <>  
      <div className="bg-info vh-500">
        <div className="row ">
              { 
                fetchdetail.map((value,index)=>(
                    <>
                     <div class="card mt-3 me-5 col-lg-2 bg-dark text-white">
                        <img src={img} alt="..." className="image-size"/>
                        <div class="card-body">
                        <p> {value.studentname} </p>
                        <p class="card-text"> {value.age} </p>
                        <p class="card-text"> {value.gender} </p>
                        <p class="card-text"> {value.studentcourse} </p>
                        <p class="card-text"> {value.phonenumber} </p>
                        <button className="bg-danger" onClick={()=>{delt(value.std_id)}}>Delete</button>
                        <Link to= {`/update/${value.std_id}`}> <button className="bg-primary">Update </button> </Link> 
                        </div>
                   </div> 
                    </>   
                ))
              }       
            </div>
      </div>
        </>  
    );
}