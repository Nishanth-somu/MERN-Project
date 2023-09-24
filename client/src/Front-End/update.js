import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Update()
{
    let {std_id}=useParams()
    const[studentname,setStudentname]=useState('')
    const[age,setAge]=useState('')
    const[gender,setGender]=useState('')
    const[studentcourse,setStudentcourse]=useState('')
    const[phonenumber,setPhonenumber]=useState('')

    useEffect(()=>{
        fetch("http://localhost:9597/studentsingle/"+std_id)
        .then(res=>res.json())
        .then((out)=>{
          setStudentname(out[0].studentname)
          setAge(out[0].age)
          setGender(out[0].gender)
          setStudentcourse(out[0].studentcourse)
          setPhonenumber(out[0].phonenumber)
        })
    },[])

   function handleupdate(event){
        event.preventDefault()
        var studentname= document.getElementById('studentname').value
        var age= document.getElementById('age').value
        var gender= document.getElementById('gender').value
        var studentcourse= document.getElementById('studentcourse').value
        var phonenumber= document.getElementById('phonenumber').value
       
        var key={
        studentname:studentname,
        age:age,
        gender:gender,
        studentcourse:studentcourse,
        phonenumber:phonenumber,
        }
        if(studentname==""){
            alert('enter your name')
          }
          else if(age==""){
            alert('enter your lastname')
          }
          else if( gender==""){
            alert("enter your email")
          }
          else if(phonenumber==""){
            alert('enter your phone')
          }

          else {
            axios.put("http://localhost:9597/update/"+std_id,key)
            .then((res)=>{
              if(res.data.status==="error") {
                alert("data are not updated")
               
              }
              else if(res.data.status==="success"){
                alert("data are Update")
                 window.location.href='/fs18'
              }
            })
          } }
    return(
        <>
    <div className="text-center p-5 bg-secondary">
         <div className="bg-dark text-white">
        <form onSubmit={handleupdate}>
          <h1>Update your Detail here....</h1>
            <label className="p-3">studentname </label>
            <input type='text' id="studentname" value={studentname} onChange={(update)=>setStudentname(update.target.value)}  className="p-3"/> <br></br>
            <label className="p-3">age</label>
            <input type='text' id="age" value={age} onChange={(update)=>setAge(update.target.value)}  className="p-3"/> <br></br>
            <label className="p-3"> Gender</label>
            <input type='text' id="gender" value={gender} onChange={(update)=>setGender(update.target.value)}  className="p-3" /><br></br>
            <label className="p-3"> studentcourse </label>
            <input type='text' id="studentcourse" value={studentcourse} onChange={(update)=>setStudentcourse(update.target.value)}  className="p-3" /><br></br>
            <label className="p-3"> Phonenumber</label>
            <input type='text' id="phonenumber" value={phonenumber} onChange={(update)=>setPhonenumber(update.target.value)}  className="p-3" /><br></br>
            <input type='submit' value="update"/>
        </form>
        </div>
    </div>
        </>
    );
}