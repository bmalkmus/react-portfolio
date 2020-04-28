import React from "react";
import "./style.css";

function Container (props) {
    return (
        <div className ="contect-wrapper">
                {props.children}
        </div>
    )
}

export default Container;