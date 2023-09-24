import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import  Typewriter  from "typewriter-effect";
export function Register(){

           
  function handlelogin(event){
    event.preventDefault()
     var fname= document.getElementById('name').value
     var lname= document.getElementById('lastname').value
     var password= document.getElementById('password').value
     var email= document.getElementById('email').value
     var phone= document.getElementById('phone').value

    var key={
      fname:fname,
      lname:lname,
       phone:phone,
        email:email,
      password:password,
    }
    if(fname==""){
      alert('enter your name')
    }
    else if(lname==""){
      alert('enter your lastname')
    }
    else if(password==""){
      alert('enter your password')
    }
    else if( email==""){
      alert("enter your email")
    }
    else if(phone==""){
      alert('enter your phone')
    }
    else {
      axios.post("http://localhost:9597/insert",key)
      .then((res)=>{
        if(res.data.status==="error") {
          window.location.reload()
        }
        else if(res.data.status==="success"){
          alert("data are inserted")
          window.location.href='/loginpage'
        }
      })
    }
  }


    return(
        <>
        <div className="text-center p-5 bg-secondary vh-200 ">
          <h1 className="text-center text-white-50 text-editing">Register Page</h1>
          
          <div className="text-secondary d-flex justify-content-center "> <Typewriter options={{strings:['welcome to Login Page'],autoStart:true,loop:true}}/></div>
        <div className="bg-dark ">
          <form className="p-5 text-white-50" onSubmit={handlelogin}>
          <label>Enter your FirstName</label>
          <input id="name" type="text" placeholder="name"/><br></br>
          <label className="p-3">Enter your LastName</label>
          <input id="lastname" type="text"  placeholder="Lastname"/><br></br>
          <label className="p-3">Enter your password</label>
          <input id="password" type="password"  placeholder="password"/><br></br>
          <label className="p-3">Enter your Email</label>
          <input id="email" type="text"  placeholder="email"/><br></br>
           <label className="p-3">Enter your PhoneNumber</label>
           <input id="phone" type="text"  placeholder="phone-number"/><br></br>
          <button className="bg-primary">Submit</button><br></br>
          <Link to='/loginpage'>login page</Link>
         
          </form>
          </div>
        </div>
        </>
    );
}