import React from "react";
import style from './Material.module.css'
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    actionPriceCement,
    actionPricePesok, actionPricePlitka,
    actionPricePorebrik,
    actionPriceSheben
} from "../../redux/reducerMaterials";
import Modal from "../Modal/Modal";

export const Material = () => {
    const plitkaPrice = useSelector(state => state.materialPage.plitkaPrice)
    const pricePesok = useSelector(state => state.materialPage.pricePesok)
    const priceSheben = useSelector(state => state.materialPage.priceSheben)
    const porebrikPrice = useSelector(state => state.materialPage.porebrikPrice)
    const priceCement = useSelector(state => state.materialPage.priceCement)

    const dispatch = useDispatch();

    return (
        <div>
            <div className={style.formInputs}>
                <div className={style.formInputsItem}>
                    <TextField
                        onChange={e => dispatch(actionPricePlitka(e.target.value))}
                       value={plitkaPrice}
                        label="Цена плитки"
                    />
                </div>
                <div className={style.formInputsItem}>
                    <TextField
                        onChange={e => dispatch(actionPricePesok(e.target.value))}
                        value={pricePesok}
                        label="Цена песка"
                    />
                </div>
                <div className={style.formInputsItem}>
                    <TextField
                        onChange={e => dispatch(actionPriceSheben(e.target.value))}
                        value={priceSheben}
                        label="Цена щебня"
                    />
                </div>
                <div className={style.formInputsItem}>
                    <TextField
                        onChange={e => dispatch(actionPricePorebrik(e.target.value))}
                        value={porebrikPrice}
                        label="Цена поребрика "
                    />
                </div>

                <div className={style.formInputsItem}>
                    <TextField
                        onChange={e => dispatch(actionPriceCement(e.target.value))}
                        value={priceCement}
                        label="Цена цемента"
                    />
                </div>
            </div>

        </div>
    );
};