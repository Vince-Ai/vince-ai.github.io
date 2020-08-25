import React, { useContext } from 'react'
import './NavBar.css'
import { GlobalContext } from "../GlobalContext"
import {SideBar} from "./MenuBar"
import { NavLink } from 'react-router-dom';

const enDict = ["Home", "Research", "Projects", "Resume", "Language"];
const zhDict = ["主页", "研究", "项目", "简历", "语言"];

export default function NavBar(props) {
    const {isEng, setEng} = useContext(GlobalContext);

    let Dict = isEng ? enDict : zhDict;

    return (
        <header className="NavBarHeader">
            <SideBar  Dict={Dict}/>
            <nav className = "NavBarWrapper">
                <div className="Spacer" />
                <div className="NavItem">
                    <ul>
                        <li><NavLink exact to="/">{Dict[0]}</NavLink></li>
                        <li><NavLink exact to="/research">{Dict[1]}</NavLink></li>
                        <li><NavLink exact to="/projects">{Dict[2]}</NavLink></li>
                        <li><NavLink exact to="/public/resume.pdf">{Dict[3]}</NavLink></li>
                        <li><div className="TopLangBtn" onClick={()=>{setEng(!isEng)}}>{Dict[4]}</div></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
