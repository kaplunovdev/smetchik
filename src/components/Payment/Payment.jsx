import React from "react";
import style from './Payment.module.css'
import {setStorage} from "../../localStorage/localStorage";
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
    actionCountPlitkaWork,
    actionIsVisible,
    actionPricePlitkaWork,
    clearData
} from "../../redux/paymentReducerPlitka";
import {useDispatch, useSelector} from "react-redux";

export const Payment = (state) => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const clearDataPlitka = () => {
        dispatch(clearData())
    }
    const tooglePlitkaPanel = (action) => {
        dispatch(actionIsVisible(action))
        handleClose();
        setOpenModal(false);
        clearDataPlitka();
    }
    const [expanded, setExpanded] = React.useState(false);

    const handleChangeToogle = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const count = useSelector(state => state.paymentPage.plitkaCount)
    const plitkaPriceWork = useSelector(state => state.paymentPage.plitkaPriceWork)
    const plitkaPrice = useSelector(state => state.paymentPage.plitkaPrice)
    const plitkaPriceCement = useSelector(state => state.paymentPage.plitkaPriceCement)
    const isVisiblePlitka = useSelector(state => state.paymentPage.isVisiblePlitka)
    const plitkaPriceSheben = useSelector(state => state.paymentPage.plitkaPriceSheben)
    const plitkaPricePesok = useSelector(state => state.paymentPage.plitkaPricePesok)
    const totalWork = plitkaPriceWork * count;


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

    const works = [
        createData('Плитка', plitkaPriceWork, count),
    ];

    const materialsCount = {
        plitka: count,
        cement: Math.ceil(count / 9),
        pesok: Math.ceil(count * 0.05 * 1.8),
        sheben: Math.ceil(count * 0.05 * 1.8),
    }


    const materials = [
        plitkaPrice !== '' ? createData('Плитка', plitkaPrice, count): null,
        plitkaPriceCement !== '' ? createData('Цемент', plitkaPriceCement, materialsCount.cement) : null,
        plitkaPriceSheben !== '' ? createData('Щебень', plitkaPriceSheben, materialsCount.sheben): null,
        plitkaPricePesok !== '' ? createData('Песок', plitkaPricePesok, materialsCount.pesok): null,
    ];

    const materialsFilter = materials.filter(elem => elem !== null)

    let totalMaterialPrice = materialsFilter.map((elem) => {
        return elem.price * elem.count
    });

    const sum = () => {
        let result = 0;
        for (let i = 0; i < totalMaterialPrice.length; i++) {
            result += totalMaterialPrice[i]
        }
        return result;
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
                            <Button
                                id="demo-positioned-button"
                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                + Добавить работу
                            </Button>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
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
                                <MenuItem disabled={isVisiblePlitka} onClick={() => tooglePlitkaPanel(true)}>Тротуарная
                                    плитка</MenuItem>
                                <MenuItem onClick={handleClose}>Поребрик</MenuItem>
                            </Menu>

                            {isVisiblePlitka &&
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChangeToogle('panel1')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}

                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >

                                        <Typography sx={{width: '33%', flexShrink: 0}}>
                                            Тротуарная плитка
                                        </Typography>

                                    </AccordionSummary>

                                    <AccordionDetails>
                                        <Typography>
                                            <div className={style.panelPlitka}>
                                                <div style={{display: "flex", gap: 15, alignItems: 'center'}}>
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
                                                        value={plitkaPriceWork}
                                                        onChange={setPrice}
                                                        type="input"
                                                        name='price'
                                                        label="Стоимость 1м2"
                                                    />
                                                </div>
                                                <TrashIcon onClick={() => setOpenModal(true)}/>


                                            </div>
                                            {errors.price && <p className={style.error}>Заполните поле</p>}
                                            <Material/>
                                            {openModal && <Modal
                                                open={openModal}
                                                onClose={handleCloseModal}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                                tooglePlitkaPanel={tooglePlitkaPanel}
                                            >
                                            </Modal>}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            }


                        </div>

                        <div>
                            {/*<button type="submit" disabled={isSubmitting}>Отправить</button>*/}
                        </div>

                        <TableContainer component={Paper} style={{marginBottom: 20, marginTop: 20}}>

                            {count > 0 && plitkaPriceWork &&
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
                                        {works.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                                <TableCell align="right">{row.count}</TableCell>
                                                <TableCell align="right">{row.price}</TableCell>
                                                <TableCell align="right">{row.count * row.price}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            }

                            {count > 0 && plitkaPrice &&
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
                                                align="right">Итого: {sum() + totalWork}
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            }

                        </TableContainer>
                    </form>
                )}
            < /Formik>
            {/*<NavBottom/>*/}
        </div>
    )
}



