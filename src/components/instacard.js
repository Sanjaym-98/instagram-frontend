import React from "react";
import { BsThreeDots, BsFillHeartFill } from "react-icons/bs";
import {SlPaperPlane} from "react-icons/sl";
import "./card.css"


export default function InstaCard({ user }) {
    return<div className="container">
        <div className="namecontainer">
            <section className="card Section">
                <h3 className="name"> {user.name}</h3>
                <address className="location">{user.location}</address>
            </section>
            <section className="dots Section"><BsThreeDots /></section>
        </div>
        <section><img className="image" src={user.PostImage} alt="postimg" /></section>
        <section className="favicons">
            <div>
              <i><BsFillHeartFill className="heart"></BsFillHeartFill></i>  
               <i><SlPaperPlane className="plane"></SlPaperPlane></i> 
            </div>
            <time className="data">{user.date}</time>
        </section>
        <sub className="likes">{user.likes}likes</sub>
        <div className="discription">{user.description}</div>

    </div>
    
}
