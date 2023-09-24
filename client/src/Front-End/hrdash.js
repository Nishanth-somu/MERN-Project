import React from "react";
import { Link } from "react-router-dom";
export function Hrdash(){
    return(
<>
<div className="bg-dark text-white">
    <h1 className="text-center">HrDash Board</h1>
</div>
 <div className="backgroundcolor-hrdashboard vh-100 p-3">
    <div class="card col-lg-6 ">
       
        <div class="card-body card-color-background text-white">
            <h5 class="card-title">FullStack Batch-18</h5>
            <Link to="/hrstudentdetail" class="btn btn-primary">Click-for-Details</Link>
        </div> 
    </div>
    <div class="card col-lg-6 my-3 card-color-background">
       
       <div class="card-body">
           <h5 class="card-title">FullStack Batch-16</h5>
           <a href="#" class="btn btn-primary">Click-for-Details</a>
       </div>
   </div>
   <div class="card col-lg-6 card-color-background">
       
       <div class="card-body my-3">
           <h5 class="card-title">FullStack Batch-15</h5>
           <a href="#" class="btn btn-primary">Click-for-Details</a>
       </div>
   </div>
</div>
     <div className="text-center my-5">
    <Link to='/loginpage'> <button > Click to home </button> </Link>
    </div>
</>
    );
}