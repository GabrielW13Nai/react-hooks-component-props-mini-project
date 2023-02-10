import React from "react";

function About(
    {src ="https://via.placeholder.com/215 ",alt, description})
    {
  return(
    <aside>
        <img 
            src = {src}
            alt = {alt}/>
        <p> {description}</p>
  
    </aside>
  )
  }

  export default About;