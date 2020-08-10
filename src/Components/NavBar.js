import React from 'react'
import './NavBar.css'
import { GlobalContext } from "../GlobalContext"
import {SideBar} from "./MenuBar"

export default function NavBar(props) {
    return (
        <header className="NavBarHeader">
            <SideBar  />
            <nav className = "NavBarWrapper">
                <div className="Spacer" />
                <div className="NavItem">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Research</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Resume</a></li>
                        <li><a href="/">English</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
