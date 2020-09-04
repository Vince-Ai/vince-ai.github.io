import React, { useContext } from 'react'
import { GlobalContext } from "../GlobalContext"
import {proj_en, proj_zh} from '../Data'
import Item from '../Components/Item'
import './Projects.css'


export default function Projects (props) {
    const {isEng} = useContext(GlobalContext);
    let project = isEng ? proj_en : proj_zh;

    return (
        <div className="ProjectWrapper">
            <h1>{isEng ? "Projects" : "项目"}</h1>
            <div className="ProjMain">
                {project.map(proj =>
                    <Item props={proj} key={proj.Name}/>
                )}
            </div>
        </div>
    );
}

