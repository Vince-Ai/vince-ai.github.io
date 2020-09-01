import React from 'react'
import './Projects.css'

let ProjectJson = [
    {
        "Name":  "Something2"
        ,"Img": "imgs/CatchingFire.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Links": [{"[Github]": "someurl"}]
    },
    {
        "Name":  "Something3"
        ,"Img": "imgs/CatchingFire.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Links": [{"[Github]": "someurl"}]
    },
    {
        "Name":  "Something4"
        ,"Img": "imgs/CatchingFire.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Links": [{"[Github]": "someurl"}]
    },
    {
        "Name":  "Something5"
        ,"Img": "imgs/CatchingFire.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Links": [{"[Github]": "someurl"}]
    },
    {
        "Name":  "Something6"
        ,"Img": "imgs/CatchingFire.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Links": [{"[Github]": "someurl"}]
    },
    {
        "Name":  "Something1"
        ,"Img": "imgs/CatchingFire.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Links": [{"[Github]": "someurl"}]
    },
]


export default function Projects (props) {
    return (
        <div className="ProjectWrapper">
            <h1>Projects</h1>
            <main>
                {ProjectJson.map(proj =>
                    <Item props={proj} key={proj.Name}/>
                )}
            </main>
        </div>
    );
}

/*
    Item: A single research item
    Props: Name, Abstract, Img, 
           Links: Json [Github, Paper, Poster, Demo]
*/
function Item (props) {
    return(
        <div className="ItemWrapper">
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
        </div>
    );
}