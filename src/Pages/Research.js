import React from 'react'

export default function Research (props) {
    return (
        <div>
            <div className="H1">Research</div>
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