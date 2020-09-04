import React from 'react'
import './Item.css'

/*
    Item: A single research item
    Props: Name, Abstract, Img, 
           Links: Json [Github, Paper, Poster, Demo]
*/
export default function Item (props) {
    return(
        <main className="ItemWrapper">
            <img src={props.props.Img} alt=""/>
            <div className="Info">
                <strong className="Name">{props.props.Name}</strong>
                <p className="Abstract">{props.props.Abstract}</p>
                <div className="Links">
                    {props.props.Links.map(link =>
                        <a href={Object.values(link)[0]} key={Object.keys(link)[0]}>{Object.keys(link)[0]}</a>
                    )}
                </div>
            </div>
        </main>
    );
}