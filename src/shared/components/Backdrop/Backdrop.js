import React from "react";
import ReactDOM from "react-dom";

import './Backdrop.css';

const Backdrop = (props) => {
    const content = 
        <div className="backdrop"
            onClick={props.onClick}>

        </div>;
    
    return(
        ReactDOM.createPortal(content,
            document.querySelector("#backdrop-container"))
    );
}

export default Backdrop