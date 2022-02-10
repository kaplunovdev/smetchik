import React, {useState} from "react";
import {Formik, Field} from "formik";
import style from './Material.module.css'
import {TextField} from "@mui/material";

export const Material = () => {


    const [plitkaM, setPlitkaM] = useState('500')
    const [pesokM, setPesokM] = useState('500')
    const [shebenM, setShebenM] = useState('650')
    const [smesM, setSmesM] = useState('2,5')
    const [cement, setCement] = useState('5')

    return (
        <div>
            <p>Нужные материалы:</p>
            <div className={style.formInputs}>
                <div className={style.formInputsItem}>
                    <TextField
                        placeholder={'Стоимость плитки м2'}
                        onChange={(event => setPlitkaM(event.target.value))}
                        value={plitkaM}
                        label="Цена плитки"

                    />
                </div>
                <div className={style.formInputsItem}>
                    <TextField placeholder={'Слой песка (см)'}
                               onChange={(event => setPesokM(event.target.value))}
                               value={pesokM}
                               label="Цена песка"

                    />
                </div>
                <div className={style.formInputsItem}>
                    <TextField placeholder={'Слой щебня (см)'}
                               onChange={(event => setShebenM(event.target.value))}
                               value={shebenM}
                               label="Цена щебня"
                    />


                </div>
                <div className={style.formInputsItem}>
                    <TextField placeholder={'Слой цементной смеси (см)'}
                               onChange={(event => setSmesM(event.target.value))}
                               value={smesM}
                               label="Толщина смеси"
                    />
                </div>
                <div className={style.formInputsItem + ' ' + style.formInputRatio}>
                    <span className={style.formInputRatio}>1/</span>
                    <TextField placeholder={'Слой цементной смеси (см)'}
                               onChange={(event => setCement(event.target.value))}
                               value={cement}
                               label="Цена цемента"
                    />

                </div>


            </div>

        </div>
    );
};