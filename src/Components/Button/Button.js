import React from 'react';
import "./styles.css";

export default function Button({
    value="", 
    bgColor="transparent",
    fontsize="15px",
    letterSpacing="4px",
    borderRadius="0px",
    spinner=""
}) {
    return (
        <>
            <button style={{
                background: bgColor, 
                padding: "15px 25px",
                fontSize: fontsize,
                letterSpacing:letterSpacing,
                borderRadius:borderRadius,
                }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                
                <div>
                    {value}
                    {spinner}
                </div>
            </button>   
        </>
    )
}
