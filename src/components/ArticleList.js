import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function Articlepst({id, title, date, preview, minutes }){
    return blogData.posts.map(info =>
    
    (<main key={id}>
       
        <p>{id = info.id}</p>
        <p>{title = info.title}</p>
        <p>{date = info.date}</p>
        <p>{preview = info.preview}</p>
        <p>{minutes = info.minutes} minutes</p>
    
        <Article title = {info.title}  date = {info.date} preview = {info.preview} /> 
    
    </main>)
         )
   
}

export default Articlepst;

