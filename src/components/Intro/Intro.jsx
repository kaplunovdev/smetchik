import React from "react";
import style from './Intro.module.css'
import {NavLink} from "react-router-dom";

const Intro = (props) => {
    return (
        <div>
            <div>
                <NavLink to={'/payment'}>
                    <button className={style.introBtn}>Расчет сметы</button>
                </NavLink>
            </div>
            <div>
                <button className={style.introBtn}>Расчет материалов</button>
            </div>
        </div>
    )
}

export default Intro;