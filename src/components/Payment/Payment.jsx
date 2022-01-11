import React, {useEffect, useState} from "react";
import style from './Payment.module.css'
import NavBottom from "../NavBottom/NavBottom";
import {getStorage, setStorage} from "../../localStorage/localStorage";
import axios from "axios";

const Payment = (props, values) => {
    const [value, setValue] = useState(getStorage('value'))
    const [price, setPrice] = useState(getStorage('price'))
    const [materialVisible, setMaterialVisible] = useState(false)

    useEffect(() => {
        const value = getStorage('value')
        const price = getStorage('price')
        if (value || price) {
            setPrice(price)
            setValue(value)
        }

    }, [value, price])
    const payment = (value, price) => {
        setStorage('value', value)
        setStorage('price', price)
        return value * price
    }

    const materialToggle = () => {
        setMaterialVisible(!materialVisible)
    }

    // Добавление расчета
    async function addWork(workName, priceCount) {

        const response = axios.post("/addPayment", {
            work: {
                plitka: workName
            },
            price: {
                plitka: priceCount
            }

        }).then((res) => {
            const data = response.json();
            console.log(response)
        })
    }

    return (
        <div className={style.paymentBox}>

            <div>
                <p>Тротуарная плитка</p>
                Площадь укладки м2:
                <input onChange={(event => setValue(event.target.value))} value={value}/>
                Стоимость 1м2:
                <input onChange={(event => setPrice(event.target.value))} value={price}/>
            </div>
            <div>Стоимость работ: {payment(value, price) + '₽'}</div>
            <div>
                <button onClick={() => addWork(value, price)}>Отправить</button>
                <button onClick={materialToggle}>
                    {!materialVisible ? 'Рассчитать материалы' : 'Скрыть материалы'}

                </button>
            </div>
            {materialVisible && <Material/>}
            <NavBottom/>
        </div>
    )
}


const Material = () => {
    const [plitka, setPlitka] = useState('')
    const [pesok, setPesok] = useState('')
    const [sheben, setSheben] = useState('')
    const [smes, setSmes] = useState('')

    return (
        <div>
            <p>Нужные материалы:</p>

            <input placeholder={'Стоимость плитки м2'} onChange={(event => setPlitka(event.target.value))}
                   value={plitka}/>

            <input placeholder={'Слой песка (см)'} onChange={(event => setPesok(event.target.value))} value={pesok}/>

            <input placeholder={'Слой щебня (см)'} onChange={(event => setSheben(event.target.value))} value={sheben}/>

            <input placeholder={'Слой цементной смеси (см)'} onChange={(event => setSmes(event.target.value))}
                   value={smes}/>
        </div>
    );
};


export default Payment;