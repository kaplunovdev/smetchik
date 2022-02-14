import React, {useState} from "react";
import {Formik, Field} from "formik";
import style from './Material.module.css'
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setStorage} from "../../localStorage/localStorage";
import {
    actionPriceCement, actionPriceCementRatio,
    actionPricePesok,
    actionPricePlitka,
    actionPriceSheben,
    actionPriceSmec
} from "../../redux/paymentReducerPlitka";

export const Material = () => {
    const plitkaPrice = useSelector(state => state.paymentPage.plitkaPrice)
    const plitkaPricePesok = useSelector(state => state.paymentPage.plitkaPricePesok)
    const plitkaPriceSheben = useSelector(state => state.paymentPage.plitkaPriceSheben)
    const plitkaSmecHeight = useSelector(state => state.paymentPage.plitkaSmecHeight)
    const plitkaPriceCement = useSelector(state => state.paymentPage.plitkaPriceCement)
    const plitkaPriceCementRatio = useSelector(state => state.paymentPage.plitkaPriceCementRatio)


    const dispatch = useDispatch();


    return (
        <div>
            <div className={style.formInputs}>
                <div className={style.formInputsItem}>
                    <TextField
                        placeholder={'Стоимость плитки м2'}
                        onChange={e=>dispatch(actionPricePlitka(e.target.value))}
                        value={plitkaPrice}
                        label="Цена плитки"
                    />
                </div>
                <div className={style.formInputsItem}>
                    <TextField placeholder={'Слой песка (см)'}
                               onChange={e=>dispatch(actionPricePesok(e.target.value))}
                               value={plitkaPricePesok}
                               label="Цена песка"
                    />
                </div>
                <div className={style.formInputsItem}>
                    <TextField placeholder={'Слой щебня (см)'}
                               onChange={e=>dispatch(actionPriceSheben(e.target.value))}
                               value={plitkaPriceSheben}

                               label="Цена щебня"
                    />


                </div>
                <div className={style.formInputsItem}>
                    <TextField placeholder={'Слой цементной смеси (см)'}
                               onChange={e=>dispatch(actionPriceSmec(e.target.value))}
                               value={plitkaSmecHeight}
                               label="Толщина смеси"
                    />
                </div>
                <div className={style.formInputsItem}>
                    <TextField placeholder={'Цена цемента'}
                               onChange={e=>dispatch(actionPriceCement(e.target.value))}
                               value={plitkaPriceCement}
                               label="Цена цемента"
                    />
                </div>
                <div className={style.formInputsItem + ' ' + style.formInputRatio}>
                    <span className={style.formInputRatio}>1/</span>
                    <TextField placeholder={'Слой цементной смеси (см)'}
                               onChange={e=>dispatch(actionPriceCementRatio(e.target.value))}
                               value={plitkaPriceCementRatio}
                               label="Соотношение"
                    />
                </div>
            </div>
        </div>
    );
};