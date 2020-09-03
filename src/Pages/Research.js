import React, { useContext } from 'react'
import { GlobalContext } from "../GlobalContext"

export default function Research (props) {
    const {isEng} = useContext(GlobalContext);

    return (
        <div>
            <h1>{isEng ? "Research" : "研究"}</h1>
            <Item />
        </div>
        
    );
}

/*
    Item: A single research item
    Props: Name, Abstract, Photo, 
           Links: [Github, Paper, Poster]
*/
function Item (props){
    return (
        <div className="ItemWrapper">

        </div>
    );
}