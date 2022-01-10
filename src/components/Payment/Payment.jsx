import React from "react";
import style from './Payment.module.css'
import { Field, Form, Formik, FormikProps } from 'formik';
import NavBottom from "../NavBottom/NavBottom";
import SelectForm from "../SelectForm/SelectForm";

const Payment = (props) => {
    return (
        <div className={style.paymentBox}>
            <div>
                <div>
                    <button>+ Добавить позицию</button>
                    {props.typeWorkList.length > 0 &&
                        <form >

                                <option selected={true}>Выберите пункт</option>
                                {props.typeWorkList.map(elem => <option key={elem.id}>{elem.title}</option>)}

                        </form>
                    }
                </div>
            </div>

            <NavBottom/>
        </div>
    )
}

export default Payment;