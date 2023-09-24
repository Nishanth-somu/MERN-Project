import React from "react";
import web from './assest/webdevelopment.webp'
import { Link } from "react-router-dom";
export function Webdevelopment(){
    return(
        <>
    <div className="bg-dark vh-100 p-5">
      <div className="bg-secondary">
        <h1 className="text-center"> Web Development</h1>
        <div>
            <p>
           Web development, also known as website development, 
          refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. 
          It may, however, also include web design, web programming, and database management.
            Web development is closely related to the job of designing the features and functionality of apps (web design).
            The term development is usually reserved for the actual construction of these things (that is to say, the programming of sites).
            The basic tools involved in web development are programming languages called HTML (Hypertext Markup Language), CSS (Cascading Style Sheets),
            and JavaScript. There are, however, a number of other programs used to “manage” or facilitate the construction of sites that would otherwise have to be done “from scratch” by writing code.
            A number of content management systems (CMS) fall into this category, including WordPress, Joomla!, Drupal, TYPO3, and Adobe Experience Manager, among
            </p>
        </div>
        <div>
            <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, 
                client liaison, client-side/server-side scripting, Web server and network security configuration, 
                and e-commerce development.</p>
        </div>
        
        <div className="d-flex justify-content-center p-5">
            <img src={web} className="image-size"/> 
        </div>
        <div className="d-flex justify-content-center p-5">
            <h4 className="text-center p-5">Take a Look of Webdevelopment Introduction</h4>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HhvJFxM02GQ?si=MLKXsgq01RePOwuy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

           <div>
            <h4>Web Development Usage   </h4>
            <p> For larger organizations and businesses, Web development teams can consist of hundreds of people (Web developers) and follow standard methods like Agile methodologies while developing Web sites.
            [1] Smaller organizations may only require a single permanent or contracting developer, or secondary assignment to related job positions such as a graphic designer or information systems technician. 
            Web development may be a collaborative effort between departments rather than the domain of a designated department. There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer.
            [3] Front-end developers are responsible for behavior and visuals that run in the user browser, while back-end developers deal with the servers
            .[4] Since the commercialization of the Web, the industry has boomed and has become one of the most used technologies ever.
            </p>
         </div>
             
      </div>
    </div>
        </>
    );
}