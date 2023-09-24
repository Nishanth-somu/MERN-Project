import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
export function Fsregisterform(){

    function handlelogin(event){
        event.preventDefault()
         var studentname= document.getElementById('studentname').value
         var age= document.getElementById('age').value
         var gender = document.getElementById('gender').value
         var studentcourse= document.getElementById('studentcourse').value
         var phonenumber= document.getElementById('phonenumber').value

        var key={
         studentname:studentname,
         age:age,
         gender:gender,
         studentcourse:studentcourse,
         phonenumber:phonenumber
        }
        if(studentname==""){
          alert('enter your studentname')
        }
        else if(age==""){
          alert('enter your age')
        }
        else if(gender==""){
          alert('enter your gender')
        }
        else if( studentcourse==""){
          alert("enter your studentcourse")
        }
        else if(phonenumber==""){
          alert('enter your phonenumber')
        }
        else {
          axios.post("http://localhost:9597/insertstudent",key)
          .then((res)=>{
            if(res.data.status==="error") {
              window.location.reload()
            }
            else if(res.data.status==="success"){
              alert("data are inserted")
              window.location.href='fs18'
            } 
          })
        }
      }
    

    return(
        <>
    <div className="text-center p-5 bg-secondary vh-100">
    <h1>Register Details</h1>
  
        <form onSubmit={handlelogin}>
         
          <label>studentName</label>
          <input id="studentname" type="text" placeholder="name"/><br></br>
          <label className="p-3">age</label>
          <input id="age" type="text"  placeholder="age"/><br></br>
          <label className="p-3">gender</label>
          <input id="gender" type="text"  placeholder="gender"/><br></br>
          <label className="p-3">student Course</label>
          <input id="studentcourse" type="text"  placeholder="email"/><br></br>
           <label className="p-3">Enter your PhoneNumber</label>
           <input id="phonenumber" type="text"  placeholder="phone-number"/><br></br>
            <input type="file" /><br></br>
           <button type="submit" className="bg-primary">Submit</button><br></br>    
          
        </form>
    </div>
        </>
    );
}