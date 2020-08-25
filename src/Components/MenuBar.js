import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import "./NavBar.css"

function BackDrop(props) {
    let conditionalName= props.isOpen ? "BackDrop open" : "BackDrop"
    return (
        <div className={conditionalName} onClick={()=>{
            if (props.isOpen) props.setOpen(!props.isOpen)
        }}/>
    );
}

export function SideBar(props) {
    const [isOpen, setOpen] = useState(false)
    const {isEng, setEng} = useContext(GlobalContext);

    let conditionalName = isOpen ? "SideBar open" : "SideBar";

    return(
        <div>
            <button className="MenuBtn" onClick={()=>setOpen(!isOpen)}>
                { isOpen ? <MenuOpenIcon /> : <MenuIcon /> }
            </button>
            <BackDrop isOpen={isOpen} setOpen={setOpen}/>
            <nav className={conditionalName}>
                <ul>
                    <li><NavLink exact to="/" onClick={() => setOpen(!isOpen)}>{props.Dict[0]}</NavLink></li>
                    <li><NavLink exact to="/research" onClick={() => setOpen(!isOpen)}>{props.Dict[1]}</NavLink></li>
                    <li><NavLink exact to="/projects" onClick={() => setOpen(!isOpen)}>{props.Dict[2]}</NavLink></li>
                    <li><NavLink exact to="/resume" onClick={() => setOpen(!isOpen)}>{props.Dict[3]}</NavLink></li>
                    <li><div className="SideLangBtn" onClick={() => setEng(!isEng)}>{props.Dict[4]}</div></li>
                </ul>
            </nav>
        </div>
    )
}