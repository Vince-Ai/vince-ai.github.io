import React from 'react'
import './Projects.css'

let ProjectJson = [
    {
        "Name":  "Something2"
        ,"Img": "imgs/logo_cpp.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Github": "someurl"
    },
    {
        "Name":  "Something3"
        ,"Img": "imgs/logo_cpp.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Github": "someurl"
    },
    {
        "Name":  "Something4"
        ,"Img": "imgs/logo_cpp.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Github": "someurl"
    },
    {
        "Name":  "Something5"
        ,"Img": "imgs/logo_cpp.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Github": "someurl"
    },
    {
        "Name":  "Something6"
        ,"Img": "imgs/logo_cpp.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Github": "someurl"
    },
    {
        "Name":  "Something1"
        ,"Img": "imgs/logo_cpp.jpg"
        ,"Abstract": "Today, I'm going to show you how to use just TWO CSS grid properties to create a fully responsive image gallery"
        ,"Github": "someurl"
    },
]


export default function Projects (props) {
    return (
        <div className="ProjectWrapper">
            <div className="H1">Projects</div>
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
           Links: [Github, Paper, Poster]
*/
function Item (props) {
    return(
        <div className="ItemWrapper">
            <img src={props.props.Img} alt=""/>
            <div className="Info">
                <strong className="Name">{props.props.Name}</strong>
                <p className="Abstract">{props.props.Abstract}</p>
            </div>
        </div>
    );
}