import React, {useEffect, useState} from "react";
import style from './Payment.module.css'
import NavBottom from "../NavBottom/NavBottom";
import {getStorage, setStorage} from "../../localStorage/localStorage";
import {Formik} from 'formik';
import {Material} from "../Material/Material";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import {
    actionCountPlitkaWork,
    actionPricePlitkaWork,
    setCountPlitka,
    setPricePlitka
} from "../../redux/paymentReducerPlitka";
import {useDispatch, useSelector} from "react-redux";

export const Payment = (state) => {



     const count = useSelector(state=>state.paymentPage.plitkaCount)
     const price = useSelector(state=>state.paymentPage.plitkaPriceWork)

    const dispatch = useDispatch();
    const setCount = (e) => {
        const value = e.target.value
       dispatch(actionCountPlitkaWork(value))
        setStorage('plitkaCount', e.target.value)

    }

    const setPrice = (e) => {
        const value = e.target.value

        dispatch(actionPricePlitkaWork(value))
        setStorage('plitkaPriceWork', e.target.value)
    }

    function createData(name, price, count) {
        return {name, price, count};
    }

    const rows = [
        createData('Плитка', price, count),
    ];


    return (
        <div className={style.paymentBox}>
            <Formik initialValues={{}}
                    validate={values => {
                        const errors = {};
                        if (values.plitkaWorkS === "") {
                            errors.plitkaWorkS = 'Заполните поле';
                        } else if (values.plitkaPriceWork === "") {
                            errors.plitkaPriceWork = 'Заполните поле';
                        }

                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);

                    }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,

                  }) => (
                    <form onSubmit={handleSubmit} className={style.paymentBox}>
                        <div>
                            <p style={{marginBottom: 15}}>Тротуарная плитка</p>
                            <div style={{display: "flex", gap: 15}}>
                                <TextField
                                    className={errors.countS && style.errorInput}
                                    value={count}
                                    onChange={setCount}
                                    name='countS'
                                    type="input"
                                    label="Площадь укладки"

                                />
                                {errors.countS && <p className={style.error}>Заполните поле</p>}
                                <TextField
                                    className={errors.price && style.errorInput}
                                    value={price}
                                    onChange={setPrice}
                                    type="input"
                                    name='price'
                                    label="Стоимость 1м2"
                                />
                            </div>
                            {errors.price && <p className={style.error}>Заполните поле</p>}
                        </div>

                        <div>
                            {/*<button type="submit" disabled={isSubmitting}>Отправить</button>*/}
                        </div>
                         <Material/>
                        <TableContainer component={Paper} style={{marginBottom: 20}}>
                            <Table sx={{minWidth: 300}} size="small" aria-label="simple table">
                                <TableHead>
                                    <TableRow>Стоимость работ</TableRow>
                                    <TableRow style={{background: '#29d9b085'}}>
                                        <TableCell>Позиция</TableCell>
                                        <TableCell>Кол-во</TableCell>
                                        <TableCell align="right">Стоимость</TableCell>
                                        <TableCell align="right">Всего</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">{row.name}</TableCell>
                                            <TableCell align="right">{row.count}</TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                            <TableCell align="right">{count*price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>

                            </Table>
                            <Table style={{marginTop:10}} sx={{minWidth: 300}} size="small" aria-label="simple table">
                                <TableHead>
                                    <TableRow>Стоимость материалов</TableRow>
                                    <TableRow style={{background: 'rgb(60 181 255 / 52%)'}}>
                                        <TableCell>Позиция</TableCell>
                                        <TableCell>Кол-во</TableCell>
                                        <TableCell align="right">Стоимость</TableCell>
                                        <TableCell align="right">Всего</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>

                        </TableContainer>
                    </form>
                )}

            < /Formik>

            <NavBottom/>

        </div>


    )
}



