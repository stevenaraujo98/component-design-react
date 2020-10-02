import React from 'react'
import './backParticle.css';

export default function Inicio() {
    return (
        <>
            <div className="glowing">
                <span style={{"--i" : 1}}></span>
                <span style={{"--i" : 2}}></span>
                <span style={{"--i" : 3}}></span>
            </div>

            <div className="glowing">
                <span style={{"--i" : 1}}></span>
                <span style={{"--i" : 2}}></span>
                <span style={{"--i" : 3}}></span>
            </div>

        </>
    )
}
