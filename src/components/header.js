import React from "react";
import { Link } from "react-router-dom";
import {ImInstagram} from "react-icons/im";
import {BsFillCameraFill} from "react-icons/bs";
import "./header.css"

export default function Header(){
    return (
        <div className="header">
            
            <h1 className="topleft icon"><ImInstagram/></h1>
            <h1 className="icon">Instaclone</h1>
            <h1 className="topright icon"><Link to = "/uploadview" ><BsFillCameraFill/>UploadPost</Link></h1>
        </div>
    )
}
