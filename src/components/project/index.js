import React from "react";
import "./style.css";


function ProjectCard ({name, deployed, repo, imagePath, btnClick}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <img src = {imagePath} alt ={name}/>
            <p> Deployed: <a target = "_blank" rel="noopener noreferrer" href ={deployed}>{deployed}</a>/> </p>
            <p> Github: <a target = "_blank" rel="noopener noreferrer" href ={repo}>{repo}</a>/> </p>
            <button onClick = {btnClick} data-value = "back" className ="backBTN">Back</button>
            <button onClick = {btnClick} data-value = "forward" className ="forwardBTN">Forward</button>
        </div>
    )
}

export default ProjectCard