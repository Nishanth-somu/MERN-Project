import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Singledata(){

    var {std_id}=useParams()
    const[studentname,setStudentname]=useState('')
    const[age,setAge]=useState('')
    const[gender,setGender]=useState('')
    const[studentcourse,setStudentcourse]=useState('')
    useEffect(()=>{
        fetch("http://localhost:9597/studentsingle/"+std_id)
        .then(res=>res.json())
        .then((data)=>{
            setStudentname(data[0].studentname)
            setAge(data[0].age)
            setGender(data[0].gender)
            setStudentcourse(data[0].studentcourse)
        })
    })

 return(
<>
<div className="bg-dark vh-100">
     <h1 className="text-center text-white p-3">Welcome </h1>
    <div className="d-flex justify-content-center bg-secondary p-5">
     <div class="card bg-dark text-white">
  <div class="card-body">
    <h1> {studentname} </h1>
    <h3>{age} </h3>
    <h5> {gender} </h5>
    <h6> {studentcourse} </h6>
    <p class="card-text">Iam a Candidate Who Looking For Oppurnity to explore my Skills and Grab More Knowledge</p>
    <button  className="bg-success text-center">Dowanload CV</button>
  </div>
</div>


    </div>
</div>


</>

 );

}