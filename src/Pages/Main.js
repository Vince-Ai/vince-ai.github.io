import React, { useContext } from 'react'
import './Main.css'
import {edu_zh, edu_en} from '../Data';
import { GlobalContext } from "../GlobalContext"

export default function Main () {
    const {isEng} = useContext(GlobalContext);

    return (
        <div className="MainWrapper">
            <Profile isEng={isEng} />
            <Introduction isEng={isEng} />
            <Education isEng={isEng} />
            <Experience isEng={isEng} />
        </div>
    );
}

function Profile (props) {
    return (
        <div className="ProfileWrapper">
            <h1>{props.isEng ? "Vince Ai" : "艾文斯"}</h1>
            <h3>{props.isEng ? 
                "Computer Science and Applied Mathematics, Samueli School of Engineering and Applied Science, UCLA"
                : "计算机与应用数学专业，加州大学洛杉矶分校，工程与应用科学学院"
            }</h3>
            <h5>4245359709</h5>
            <div className="contact">
               <a href="https://github.com/vince-ai" target="_blank" rel="noopener noreferrer"><img src="imgs/github.png" alt="" /></a> 
               <a href="https://linkedin.com/in/vince-ai" target="_blank" rel="noopener noreferrer"><img src="imgs/li.png" alt="" /></a>
               <a href="https://facebook.com/vince.ai.817/" target="_blank" rel="noopener noreferrer"><img src="imgs/fb.png" alt="" /></a>
               <a href="https://instagram.com/vince.ai.817/" target="_blank" rel="noopener noreferrer"><img src="imgs/ins.png" alt="" /></a>
            </div>
        </div>
    )
}

function Introduction (props) {
    let intro = [
        "I am currently a second year undergraduate student at UCLA majoring in Computer Science and Math. My research interest is in ", 
        "我是一名就读于加州大学洛杉矶分校的大二学生，主修计算机与数学双专业"
    ];
    return (
        <div className="MainIntro">
            <strong>Introduction</strong>
            <p>{props.isEng ? intro[0] : intro[1]}</p>
        </div>
    );
}

function Education (props) {
    function Field (props) {
        return (
            <div>
                <img src={props.data.Img} alt=""/>
                <p>{props.data.Name}</p>
                <p>{props.data.Level}</p>
                <p>{props.data.Time}</p>
            </div>
        );
    }

    let cur_edu = props.isEng ? edu_en : edu_zh;

    return (
        <div className="MainEdu">
            <strong>{props.isEng ? "Education" : "学历"}</strong>
            {cur_edu.map(edu => <Field key={edu.Name} data={edu}/>)}
        </div>
    );
}


function Experience () {
    return (
        <div className="MainFooter">
            Experience
        </div>
    );
}