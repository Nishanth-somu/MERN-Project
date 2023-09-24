import React from "react";
import { Link } from "react-router-dom";
export function Staffdash(){

    return(
        <>
        <h1 className="text-center my=3">Staff Login</h1>
    <div className="bg-dark vh-100 p-5">
        <div class="card col-lg-6 my-3">
       
       <div class="card-body bg-secondary">
           <h5 class="card-title"> Batch-18</h5>
           <Link to="/fs18" class="btn btn-primary">studentsDetails</Link>
           <Link to="/fs18register" class="btn btn-primary ms-3">register</Link>
       </div>
   </div>
   <div class="card col-lg-6 my-3  bg-secondary">
       
       <div class="card-body ">
           <h5 class="card-title"> Batch-17</h5>
           <Link to="/" class="btn btn-primary">studentsDetails</Link>
           <Link to="/fs18register" class="btn btn-primary ms-3">register</Link>
       </div>   
   </div>
   <div class="card col-lg-6  bg-secondary my-3">
       
       <div class="card-body ">
           <h5 class="card-title"> Batch-16</h5>
           <Link to="/fs18" class="btn btn-primary">studentsDetails</Link>
           <Link to="/fs18register" class="btn btn-primary ms-3">register</Link>
       </div>
    </div>       
   </div>
        </>
    );
}