import React from 'react'
    
function NavBarItem(props) {
    return (
        <button>{props.name}</button>
    )
}


export default function NavBar() {
    return (
        <div>
            <NavBarItem name="Home" />
            <NavBarItem name="Project" />
            <NavBarItem name="Gallery" />
        </div>
    )
}