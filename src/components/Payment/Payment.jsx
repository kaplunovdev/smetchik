import React, {useEffect, useState} from "react";
import style from './Payment.module.css'
import NavBottom from "../NavBottom/NavBottom";
import {getStorage, setStorage} from "../../localStorage/localStorage";
import {Formik, Field} from 'formik';
import {Material} from "../Material/Material";

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
                            <p>Тротуарная плитка</p>
                            Площадь укладки м2:
                            <Field
                                className={errors.countS && style.errorInput}
                                value={works.plitkaCount}
                                onChange={setDataCount}
                                name='countS'
                                type="input"

                            />
                            {errors.countS && <p className={style.error}>Заполните поле</p>}
                            Стоимость 1м2:
                            <Field
                                className={errors.price && style.errorInput}
                                value={works.plitkaPriceWork}
                                onChange={setDataPrice}
                                type="input"
                                name='price'
                            />
                            {errors.price && <p className={style.error}>Заполните поле</p>}
                        </div>
                        <div>Стоимость работ:</div>
                        <PaymentMaterial plitkaCount={works.plitkaCount} plitkaPriceWork={works.plitkaPriceWork}/>
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
const PaymentMaterial = ({plitkaCount, plitkaPriceWork}) => {

    const [material, setMaterial] = useState({
        pricePlitka: 870,
        plitkaCount: plitkaCount,
        pricePesok: 600,
        countPesok: 10,
        priceSeben: 600,
        countSeben: 10
    })
console.log(material.pricePlitka)
    const price = getStorage('plitkaPriceWork')
    const count = getStorage('plitkaCount')
    const resultWork = count * price
    useEffect(() => {
        const count = getStorage('plitkaCount')
        const price = getStorage('plitkaPriceWork')

        setMaterial({plitkaCount: count})
        console.log('RENDER')

    },[plitkaCount,plitkaPriceWork])


    return (
        <div>
            <table border={1}>
                <tbody>
                <tr bgcolor={'tomato'}>
                    <td colSpan={3}>Работа</td>
                </tr>
                <tr>
                    <td>Плитка</td>
                    <td>Стоимость</td>
                    <td>Итог</td>
                </tr>
                <tr>
                    <td>{count}</td>
                    <td>{price}</td>
                    <td>{resultWork + '₽'}</td>
                </tr>
                </tbody>
            </table>
            <table border={1}>
                <tbody>
                <tr bgcolor={'tomato'}>
                    <td colSpan={5}>Материалы</td>
                </tr>
                <tr>
                    <td>Позиция</td>
                    <td>Кол-во</td>
                    <td>Цена ед.</td>
                    <td>Всего</td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan={4} align={"right"}>Result</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}


