import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import  Typewriter  from "typewriter-effect";
export function Loginpage(){

    function handlelogin(event){
        event.preventDefault()
        var username=document.getElementById("username").value
        var password=document.getElementById("password").value
        var key={
               username:username,
               password:password
           }
           if(username==""){
            alert('Enter your USerName')
           }
           else if(password==""){
            alert('enter your Password')
           }

        
           else if(username=="staff"){
            axios.post("http://localhost:9597/register",key)
            .then((res)=>{
                if(res.data.status==="empty_set"){
                    alert("plz enter your username or register")
                }
                else if(res.data.status==='success'){
                    var id=res.data.id
                    alert('successfully logged in')
                    window.location.href=`/staffdash/${id}`
                }
                else if(res.data.status==="error"){
                    alert("all the values are invalid")
                }
                else{
                    alert("plz register your details")
                }
            })
           }
           else if(username=="hr"){
            axios.post("http://localhost:9597/register",key)
            .then((res)=>{
                if(res.data.status==="empty_set"){
                    alert("plz enter your username or register")
                }
                else if(res.data.status==='success'){
                    var id=res.data.id
                    alert('successfully logged in')
                    window.location.href=`/hrdash/${id}`
                }
                else if(res.data.status==="error"){
                    alert("all the values are invalid")
                }
                else{
                    alert("plz register your details")
                }
            })
            }

           else  {
            axios.post("http://localhost:9597/register",key)
            .then((res)=>{
                if(res.data.status==="empty_set"){
                    alert("plz enter your username or register")
                }
                else if(res.data.status==='success'){
                    var id=res.data.id
                    alert('successfully logged in')
                    window.location.href=`/dash/${id}`
                }
                else if(res.data.status==="error"){
                    alert("all the values are invalid")
                }
                else{
                    alert("plz register your details")
                }
            })
           }
      }

    return(
        <>
       <div className="d-flex justify-content-center fs-1 text-white bg-dark">
        <Typewriter options={{strings:['Welcome to Login Page'],autoStart:true,loop:true}}/>
        </div> 
         <div className="mt-5 bg-secondary vh-100">
        <div className="d-flex justify-content-center align-items-center p-5 ">
        <form onSubmit={handlelogin}>
        <input type="text"  id="username" placeholder="username"/><br></br>
        <input type="password" id="password" className="my-3" placeholder="password"/><br></br>
        <button className="bg-primary">Submit</button><br></br>
        <Link to='/' className="link-deco text-primary">Register Page ?</Link>
        </form>
        </div>
    </div>
        </>
    );
}