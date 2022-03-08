import React from "react";
import style from './Payment.module.css'
import {Formik} from 'formik';
import {Material} from "../Material/Material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TrashIcon from '@mui/icons-material/RestoreFromTrash'
import Modal from '../Modal/Modal'

import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import {
    actionClearDataPlitka,
    actionCountPlitkaWork,
    actionIsVisiblePlitka,
    actionPricePlitkaWork
} from "../../redux/paymentReducerPlitka";
import {useDispatch, useSelector, useStore} from "react-redux";
import {actionClearDataMaterials, actionIsVisibleMaterials} from "../../redux/reducerMaterials";


export const Payment = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const openMaterials = (action) => {
        dispatch(actionIsVisibleMaterials(true))
    }

    const handleClose = () => {
        setAnchorEl(null);
    };
    const clearDataPlitka = (title) => {
        dispatch(actionClearDataPlitka(title))
        setOpenModal(false)
    }
    const clearDataMaterials = () => {
        dispatch(actionClearDataMaterials())
    }
    // const tooglePlitkaPanel = (action) => {
    //     dispatch(actionIsVisiblePlitka(action))
    //     handleClose();
    //     setOpenModal(false);
    //     // clearDataPlitka();
    // }
    const [expanded, setExpanded] = React.useState(false);

    const handleChangeToogle = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const cards = useSelector(state => state.paymentPage.cards)
    const price = useSelector(state => state.paymentPage.price)
    const plitkaPrice = useSelector(state => state.materialPage.plitkaPrice)
    const porebrikPrice = useSelector(state => state.materialPage.porebrikPrice)
    const priceCement = useSelector(state => state.materialPage.priceCement)
    const isVisibleMaterials = useSelector(state => state.materialPage.isVisible)
    const priceSheben = useSelector(state => state.materialPage.priceSheben)
    const pricePesok = useSelector(state => state.materialPage.pricePesok)
    const pricePorebrik = useSelector(state => state.materialPage.porebrikPrice)
    // const totalWork = price * count;

    // const setCount = (e) => {
    //     const value = e.target.value
    //     dispatch(actionCountPlitkaWork(value))
    //
    // }
    const store = useStore();
    const state = store.getState();
    const setVisible = (payload, title) => {
        dispatch(actionIsVisiblePlitka(payload, title))
        handleClose()
    }

    // const setPrice = (e) => {
    //     const value = e.target.value
    //     dispatch(actionPricePlitkaWork(value))
    // }


    function createData(name, price, count) {
        return {name, price, count};
    }

    const works = state.paymentPage.cards.map(el =>
        createData(el.title, el.price, el.count)
    )


// const plitka = count.map(el=>{
//     if(el.title === 'Тротуарная плитка'){
//         return el.count
//     }
// })


    const materialsCount = {
        plitka: parseInt(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Тротуарная плитка')).map(el => el.count)),
        cement: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Тротуарная плитка')).map(el => el.count) / 9),
        pesok: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Тротуарная плитка')).map(el => el.count) * 0.05 * 1.8),
        sheben: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Тротуарная плитка')).map(el => el.count) * 0.05 * 1.8),
        porebrik: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Поребрик')).map(el => el.count)),
    }

    const materials = [
        plitkaPrice !== '' ? createData('Плитка', plitkaPrice, materialsCount.plitka) : null,
        priceCement !== '' ? createData('Цемент', priceCement, materialsCount.cement) : null,
        priceSheben !== '' ? createData('Щебень', priceSheben, materialsCount.sheben) : null,
        pricePesok !== '' ? createData('Песок', pricePesok, materialsCount.pesok) : null,
        pricePorebrik !== '' ? createData('Поребрик', pricePorebrik, materialsCount.porebrik) : null,
    ];
    const materialsFilter = materials.filter(elem => elem !== null)

    let totalMaterialPrice = materialsFilter.map((elem) => {
        return elem.price * elem.count
    });
    let totalWorkPrice = cards.map((elem) => {
        return elem.count * elem.price
    });


    const sum = () => {
        let result = 0;
        for (let i = 0; i < totalMaterialPrice.length; i++) {
            result += totalMaterialPrice[i]
        }
        for (let i = 0; i < totalWorkPrice.length; i++) {
            result += totalWorkPrice[i]
        }
        return result;
    }

    return (
        <div className={style.paymentBox}>
            <h2 className={style.title}>Сметчик</h2>
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
                            <Button
                                id="work"
                                aria-controls={open ? 'work_control' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                + Добавить работу
                            </Button>
                            <Button
                                id="material"
                                aria-controls={open ? 'material_control' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={openMaterials}
                                disabled={isVisibleMaterials}
                            >
                                + Добавить материалы
                            </Button>
                            <Menu
                                id="work_control"
                                aria-labelledby="work"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                            </Menu>
                            <Menu
                                id="material_control"
                                aria-labelledby="material"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuItem

                                    onClick={() => setVisible(true, 'Тротуарная плитка')}>Тротуарная
                                    плитка</MenuItem>
                                <MenuItem
                                    onClick={() => setVisible(true, 'Поребрик')}>Поребрик</MenuItem>
                                <MenuItem onClick={handleClose}>Бордюр</MenuItem>
                            </Menu>

                            {state.paymentPage.cards.map((el) =>
                                el.isVisible &&
                                <Accordion key={el.title} expanded={expanded === el.title}
                                           onChange={handleChangeToogle(el.title)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}

                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >

                                        <Typography sx={{width: '33%', flexShrink: 0}}>
                                            {el.title}
                                        </Typography>

                                    </AccordionSummary>

                                    <AccordionDetails>
                                        <Typography>
                                            <div className={style.panelPlitka}>
                                                <div style={{display: "flex", gap: 15, alignItems: 'center'}}>
                                                    <TextField
                                                        className={errors.countS && style.errorInput}
                                                        // value={el.count}
                                                        onChange={(e) =>
                                                            dispatch(actionCountPlitkaWork(e.target.value, el.title))
                                                        }


                                                        name='countS'
                                                        type="input"
                                                        label="Площадь укладки"
                                                    />

                                                    <TextField
                                                        className={errors.price && style.errorInput}
                                                        // value={el.price}
                                                        onChange={(e) =>
                                                            dispatch(actionPricePlitkaWork(e.target.value, el.title))}
                                                        type="input"
                                                        name='price'
                                                        label="Стоимость 1м2"
                                                    />
                                                </div>
                                                <TrashIcon onClick={() => setOpenModal(true)}/>

                                            </div>


                                            {openModal && <Modal
                                                open={openModal}
                                                onClose={handleCloseModal}
                                                clearDataPlitka={() => clearDataPlitka(el.title)}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                            </Modal>}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )

                            }
                            {isVisibleMaterials &&
                                <Accordion expanded={expanded === 'materials'}
                                           onChange={handleChangeToogle('materials')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >

                                        <Typography sx={{width: '33%', flexShrink: 0}}>
                                            Стоимость материалов

                                        </Typography>

                                    </AccordionSummary>

                                    <AccordionDetails>
                                        <Typography className={style.accordion}>
                                            <Material/>

                                            <div className={style.panelPlitka}>
                                                <TrashIcon onClick={() => setOpenModal(true)}/>
                                            </div>

                                        </Typography>
                                        {plitkaPrice === '' && pricePesok === '' &&
                                            priceCement === '' && priceSheben === '' && porebrikPrice === '' &&
                                            <p className={style.infoMaterials}>Заполните нужные вам поля</p>

                                        }
                                    </AccordionDetails>
                                </Accordion>
                            }

                        </div>

                        <div>
                            {/*<button type="submit" disabled={isSubmitting}>Отправить</button>*/}
                        </div>

                        <TableContainer component={Paper} style={{marginBottom: 20, marginTop: 20}}>


                            <Table sx={{minWidth: 300}} size="small" aria-label="simple table">
                                <TableHead>
                                    <TableRow>Стоимость работ</TableRow>
                                    <TableRow style={{background: '#29d9b085'}}>
                                        <TableCell>Позиция</TableCell>
                                        <TableCell align="right">Кол-во</TableCell>
                                        <TableCell align="right">Стоимость</TableCell>
                                        <TableCell align="right">Всего</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {works.map((el) => (
                                        el.count && el.price &&
                                        <TableRow
                                            key={el.name}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">{el.name}</TableCell>
                                            <TableCell align="right">{el.count}</TableCell>
                                            <TableCell align="right">{el.price}</TableCell>
                                            <TableCell align="right">{el.count * el.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>


                            <Table style={{marginTop: 20}} sx={{minWidth: 300}} size="small"
                                   aria-label="simple table">
                                <TableHead>
                                    <TableRow>Стоимость материалов</TableRow>
                                    <TableRow style={{background: 'rgb(60 181 255 / 52%)'}}>
                                        <TableCell>Позиция</TableCell>
                                        <TableCell>Кол-во</TableCell>
                                        <TableCell align="right">Стоимость</TableCell>
                                        <TableCell align="right">Всего</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {materialsFilter.map((elem) => (
                                        <TableRow key={elem.name}
                                                  sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                            <TableCell>{elem.name}</TableCell>
                                            <TableCell>{elem.count}</TableCell>
                                            <TableCell align="right">{elem.price}</TableCell>
                                            <TableCell align="right">{parseInt(elem.count) * elem.price}</TableCell>
                                        </TableRow>
                                    ))
                                    }
                                </TableBody>
                                <TableHead>
                                    <TableRow style={{background: '#e9424285'}}>
                                        <TableCell
                                            colspan={4}
                                            align="right">Итого: {sum()}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>


                        </TableContainer>
                    </form>
                )}
            < /Formik>
            {/*<NavBottom/>*/}
        </div>
    )
}



