import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import reactimg from './assest/reactjs.png'
import  Typewriter  from "typewriter-effect";
export function Dash(){
    let {id}=useParams()
    const[fname,setFname]=useState('')
    useEffect(()=>{
        fetch("http://localhost:9597/getsingle/"+id)
        .then(res=>res.json())
        .then((out)=>{
          setFname(out[0].fname)
        })
    })
    return(
        <>
        
       
    <div className="bg-dark fs-1"> 
   <div className="text-secondary d-flex justify-content-center  ">  <h1 className="me-3">Hello👋{fname} </h1>  <Typewriter options={{strings:['Welcome to Student DashBoard'],autoStart:true,loop:true}}/></div>
        <div className="mt-5 p-4 d-flex justify-content-center">
        <nav class="navbar bg-dark">
         <div class="container-fluid">
           <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
           </form>
           </div>
           </nav>
        </div>
 
        <div class="card mt-5 bg-secondary ">
            
            <div class="card-body">
                <h5 class="card-title">Full Stack Development</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/fullstackinfo" class="btn btn-primary">Clic for Details</Link>
            </div>
        </div>
        <div class="card mt-5 bg-secondary">
            
            <div class="card-body">
                <h5 class="card-title">Web Development</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/webdevelopment" class="btn btn-primary">Clik for Details</Link>
            </div>
        </div>
         
        <div class="card mt-5 bg-secondary">
            
            <div class="card-body">
                <h5 class="card-title"> IMS</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/navims" class="btn btn-primary">Clik for Details</Link>
            </div>
        </div>

        <div class="card mt-5 bg-secondary">
            
            <div class="card-body">
                <h5 class="card-title">SAP</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/sap" class="btn btn-primary">Clik for Details</Link>
            </div>
        </div>


        <div className="d-flex justify-content-center mt-5 ">
           <Link to='/loginpage' className="btn btn-success"> Go-Back </Link>
        </div>
    </div>
        </>
    );
}