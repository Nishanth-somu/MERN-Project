import React from "react";
import mernimg from './assest/mern.avif'
export function Fullstackinfo(){

    return(
        <>
       
        <div className="bg-dark vh-200 p-5">

            <div className="bg-secondary ">
                <h1 className="text-center"> MERN Stack Development </h1>
                <p>
              <h3> 1.What is the MERN stack?</h3>
          <p>  MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
                MongoDB — document database
                Express(.js) — Node.js web framework
                React(.js) — a client-side JavaScript framework
                Node(.js) — the premier JavaScript web server
                Express and Node make up the middle (application) tier.
                 Express.js is a server-side web framework, and Node.js is the popular and powerful JavaScript server platform. 
                 Regardless of which variant you choose, ME(RVA)N is the ideal approach to working with JavaScript and JSON, all the way
                  through.</p>
                <h3>2.How does the MERN stack work?</h3>
               <p>  The MERN architecture allows you to easily construct a three-tier architecture
                  (front end, back end, database) entirely using JavaScript and JSON.</p>
                </p>
                <div className="d-flex justify-content-center"> <img src={mernimg} className="image-size"/></div>
                <div className="p-5 d-flex justify-content-center">
                <h4 className="text-center p-5">Take a Look of Mern Stack Introduction </h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6mLQzNvwbbA?si=-RHJ3eVH5F37x9Sx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
        <div className="d-flex justify-content-evenly">
             <div>
                <select className="bg-dark text-white">
                    <option>FrontEnd Languages</option>
                    <option >Html</option>
                    <option >css</option>
                    <option >Java Script</option>
                    <option >ReactJs</option>
                </select>
            </div>
            <div>
                <select className="bg-dark text-white">
                    <option>BackEnd Languages</option>
                    <option >NodeJS</option>
                    <option >SpringBoot</option>
                    <option >Java</option>
                </select>
            </div>
            <div>
                <select className="bg-dark text-white">
                    <option>Databases </option>
                    <option >Mysql</option>
                    <option >MongoDB</option>
                </select>
            </div>
        </div>   
        <div className="p-5">
      <h3>3. Why choose the MERN stack?</h3> 
         <p>   Let’s start with MongoDB, the document database at the root of the MERN stack. MongoDB was designed to store JSON data natively
             (it technically uses a binary version of JSON called  BSON ),
              and everything from its command line interface to its query language (MQL, or MongoDB Query Language) is built on JSON and JavaScript.</p></div>

            </div>
        </div>
        </>
    );
}