import React, { useState, useEffect } from 'react'
import "./NavBar.css"
import { GlobalContext } from "../GlobalContext"
import MenuIcon from '@material-ui/icons/Menu';

function BackDrop(props) {
    let conditionalName= props.isOpen ? "BackDrop open" : "BackDrop"
    return (
        <div className={conditionalName}/>
    );
}

export function SideBar() {
    const [isOpen, setOpen] = useState(false)

    let conditionalName = isOpen ? "SideBar open" : "SideBar";

    return([
        <button className="MenuBtn" onClick={()=>setOpen(!isOpen)}><MenuIcon /></button>,
        <BackDrop isOpen={isOpen}/>,
        <nav className={conditionalName}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Research</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Resume</a></li>
                <li><a href="/">English</a></li>
            </ul>
        </nav>
    ])
}