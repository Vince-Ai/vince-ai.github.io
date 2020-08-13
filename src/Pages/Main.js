import React from 'react'
import './Main.css'

export default function Main (props) {
    return (<Profile />);
}

function Profile(props) {
    return (
        <div className="ProfileWrapper">
            <h1>Vince Ai</h1>
            <h3>{"Computer Science and Applied Mathematics,\n Samueli School of Engineering, UCLA"}</h3>
            <h5>4245359709</h5>
            <div className="contact">
                
            </div>
        </div>
    )
}