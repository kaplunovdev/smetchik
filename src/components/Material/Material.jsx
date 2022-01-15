import React, {useState} from "react";
import {Formik, Field} from "formik";
import style from './Material.module.css'

export const Material = () => {
    const smesCountHeight = () => {

    }

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
                    <Field
                        placeholder={'Стоимость плитки м2'}
                        onChange={(event => setPlitkaM(event.target.value))}
                        value={plitkaM}/>
                    <span>цена плитки</span>
                </div>
                <div className={style.formInputsItem}>
                    <Field placeholder={'Слой песка (см)'}
                           onChange={(event => setPesokM(event.target.value))}
                           value={pesokM}/>
                    <span>цена песка</span>

                </div>
                <div className={style.formInputsItem}>
                    <Field placeholder={'Слой щебня (см)'}
                           onChange={(event => setShebenM(event.target.value))}
                           value={shebenM}/>
                    <span>цена щебня</span>

                </div>
                <div className={style.formInputsItem}>
                    <Field placeholder={'Слой цементной смеси (см)'} onChange={(event => setSmesM(event.target.value))}
                           value={smesM}/>
                    <span>толщина смеси</span>
                </div>
                <div className={style.formInputsItem + ' ' + style.formInputRatio}>
                    <span className={style.formInputRatio}>1/</span>
                    <Field placeholder={'Слой цементной смеси (см)'}
                           onChange={(event => setCement(event.target.value))}
                           value={cement}/>
                    <span>кол-во цемента</span>
                </div>


            </div>

        </div>
    );
};