import React from "react";
import "./style.css";
import {FaForward, FaBackward} from 'react-icons/fa'


function ProjectCard ({name, deployed, repo, imagePath, btnClick}) {
    return (
        <div className="card">

            <h2>{name}</h2>
            <div className = "card-contain">
            <div onClick = {btnClick} data-value = "back" className ="BTN">
                <FaBackward/>
            </div>

            <div className ="projectContent">
                <img className = "screenshot" src = {imagePath} alt ={name}/>

                <p className = "links"> 
                    Deployed: 

                    <a target = "_blank" rel="noopener noreferrer" href ={deployed}>
                        {deployed}
                    </a> 
                </p>
                <p className = "links"> 
                    Github: 
                    
                    <a target = "_blank" rel="noopener noreferrer" href ={repo}>
                        {repo}
                    </a> 
                </p>
            </div>

            <div onClick = {btnClick} data-value = "forward" className ="BTN">
                <FaForward/>
            </div>
            </div>
        </div>
    )
}

export default ProjectCard