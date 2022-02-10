import React from "react";
import style from './Intro.module.css'
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

const Intro = (props) => {
    return (
        <div>
            <div>
                <NavLink to={'/payment'}>
                    <Button>Расчет сметы</Button>
                </NavLink>
            </div>
            <div>
                <Button>Расчет материалов</Button>
            </div>
        </div>
    )
}

export default Intro;