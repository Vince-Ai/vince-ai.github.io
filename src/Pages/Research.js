import React, { useContext } from 'react'
import { GlobalContext } from "../GlobalContext"
import {research_en, research_zh} from '../Data'
import Item from '../Components/Item'
import './Research.css'

export default function Research (props) {
    const {isEng} = useContext(GlobalContext);
    let research = isEng ? research_en : research_zh;

    return (
        <div className="ResearchWrapper">
            <h1>{isEng ? "Research" : "研究"}</h1>
            <div className="ResMain">
                {research.map(res =>
                    <Item props={res} key={res.Name}/>
                )}
            </div>
        </div>
    );
}