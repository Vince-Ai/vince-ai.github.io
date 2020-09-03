import React, { useContext } from 'react'
import { GlobalContext } from "../GlobalContext"
import {proj_en, proj_zh} from '../Data'
import './Projects.css'


export default function Projects (props) {
    const {isEng} = useContext(GlobalContext);
    let project = isEng ? proj_en : proj_zh;

    return (
        <div className="ProjectWrapper">
            <h1>{isEng ? "Projects" : "项目"}</h1>
            <main>
                {project.map(proj =>
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