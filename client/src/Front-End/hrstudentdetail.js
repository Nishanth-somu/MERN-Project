import React, { useEffect, useState } from "react";
import img from './assest/toy.jpeg'
import { Link } from "react-router-dom";
import CsvDownload from "react-csv-downloader";
import { CSVLink } from "react-csv";
export function Hrstudentdetail(){


    const[fetchdetail,setFetchdetail]=useState([])
    useEffect(()=>{
     fetch('http://localhost:9597/getdata')
     .then(res=>res.json())
     .then(data=>setFetchdetail(data))
    })

    const csvdata = fetchdetail
    return(
<>
<div className="bgcolorhrstudentdetail vh-300">
    <div className="d-flex justify-content-end p-2">
      <CSVLink data={csvdata}> <button className="bg-success p-2">Click here Dowanload All Detail</button>  </CSVLink>
    </div>
        <div className="row ">
              {
                fetchdetail.map((value,index)=>(
                    <>
                     <div class="card mt-3 me-5 col-lg-2 bg-secondary text-white">
                     <img src={img} alt="..." className="image-size"/>
                        <div class="card-body">
                        <p> {value.studentname} </p>
                        <p class="card-text"> {value.studentcourse} </p>
                       <Link to={`/singledata/${value.std_id}`}  ><button className="bg-primary">View-More</button> </Link> 
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