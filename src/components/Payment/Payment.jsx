import React, {useEffect, useState} from "react";
import style from './Payment.module.css'
import NavBottom from "../NavBottom/NavBottom";
import {getStorage, setStorage} from "../../localStorage/localStorage";
import {Formik} from 'formik';
import {Material} from "../Material/Material";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import {setCountPlitka} from "../../redux/paymentReducerPlitka";

export const Payment = () => {
    const [works, setWorks] = useState({
        plitkaPriceWork: getStorage('plitkaPriceWork'),
        plitkaCount: getStorage('plitkaCount'),
        materialVisible: false
    })
    useEffect(() => {
        const count = getStorage('plitkaCount')
        const price = getStorage('plitkaPriceWork')
        setWorks({plitkaCount: count})
        setWorks({plitkaPriceWork: price})
    }, [])
    const materialToggle = () => {
        setWorks({materialVisible: !works.materialVisible})
    }
    const setDataCount = (e) => {
        setWorks({plitkaCount: e.target.value})
        setStorage('plitkaCount', e.target.value)
    }
    const setDataPrice = (e) => {
        setWorks({plitkaPriceWork: e.target.value})
        setStorage('plitkaPriceWork', e.target.value)
    }

    function createData(name, price, count) {
        return {name, price, count};
    }


    const rows = [
        createData('Плитка', works.plitkaPriceWork, works.plitkaCount),
    ];
    console.log(createData('Плитка', works.plitkaCount, works.plitkaPriceWork))

    const result = (a, b) => {
        return a * b
    }




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
                                    value={works.plitkaCount}
                                    onChange={setCountPlitka(rows.count)}
                                    name='countS'
                                    type="input"
                                    label="Площадь укладки"

                                />
                                {errors.countS && <p className={style.error}>Заполните поле</p>}
                                <TextField
                                    className={errors.price && style.errorInput}
                                    value={works.plitkaPriceWork}
                                    onChange={setDataPrice}
                                    type="input"
                                    name='price'
                                    label="Стоимость 1м2"
                                />
                            </div>
                            {errors.price && <p className={style.error}>Заполните поле</p>}
                        </div>
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
                                            <TableCell align="right">{result(row.count, row.price)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div>
                            <button type="submit" disabled={isSubmitting}>Отправить</button>
                            <span className={style.materialBtn} onClick={materialToggle}>
                                {!works.materialVisible ? 'Рассчитать материалы' : 'Скрыть материалы'}
                            </span>
                        </div>
                        {works.materialVisible && <Material/>}
                    </form>
                )}

            < /Formik>

            <NavBottom/>

        </div>


    )
}



