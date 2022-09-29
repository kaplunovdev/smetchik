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
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import {
    Alert,
    Button, FormControlLabel, Icon,
    Paper, Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import {
    actionAddCustom,
    actionClearDataPlitka,
    actionCountPlitkaWork,
    actionIsVisiblePlitka,
    actionPricePlitkaWork
} from "../../redux/paymentReducerPlitka";
import {useDispatch, useSelector, useStore} from "react-redux";
import {actionClearDataMaterials, actionIsVisibleMaterials} from "../../redux/reducerMaterials";
import SelectUnits from "../SelectForm/SelectUnits";


export const Payment = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const [openModalMaterials, setOpenModalMaterials] = React.useState(false);
    const [customWorkTitle, setCustomWorkTitle] = React.useState('');
    const [customWorkCount, setCustomWorkCount] = React.useState('');
    const [customWorkPrice, setCustomWorkPrice] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const [alertWarning, setAlertWarning] = React.useState(false);
    // const [placeholderCount, setPlaceholderCount] = React.useState('');
    const [typeUnits, setTypeUnits] = React.useState('');
    const [customAccordion, setCustomAccordion] = React.useState(false);

    const handleChecked = (event) => {
        if (state.materialPage.pricePesok > 0 ||
            state.materialPage.priceSheben > 0 ||
            state.materialPage.priceCement > 0) {

            setChecked(event.target.checked)
            setAlertWarning(false)
        } else if (state.materialPage.pricePesok === "" &&
            state.materialPage.priceSheben === "" &&
            state.materialPage.priceCement === "") {
            setAlertWarning(true)
            setTimeout(()=>{
                setAlertWarning(false)
            },3000)
            setChecked(false)
        }

    }



    const addCustomWork = () => {
        dispatch(actionAddCustom(customWorkCount, customWorkTitle, customWorkPrice, typeUnits))
        setCustomAccordion(false)
        setCustomWorkCount('')
        setCustomWorkPrice('')
        setCustomWorkTitle('')
        setTypeUnits('')
    }
    const updateUnits = (value) => {
        setTypeUnits(value)
    }
    const handleOpen = () => {
        setOpenModal(true);
    }

    const handleOpenMaterials = () => {
        setOpenModalMaterials(true);
    }
    const handleCloseModal = () => setOpenModal(false);
    const handleCloseModalMaterial = () => setOpenModalMaterials(false);


    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const openMaterials = () => {
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
        setOpenModalMaterials(false)
        dispatch(actionClearDataMaterials(false))
    }
    const selectItemMenu = () => {
        setCustomAccordion(true)
        handleClose()
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleChangeToogle = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const cards = useSelector(state => state.paymentPage.cards)
    const plitkaPrice = useSelector(state => state.materialPage.plitkaPrice)
    const porebrikPrice = useSelector(state => state.materialPage.porebrikPrice)
    const priceCement = useSelector(state => state.materialPage.priceCement)
    const isVisibleMaterials = useSelector(state => state.materialPage.isVisible)
    const priceSheben = useSelector(state => state.materialPage.priceSheben)
    const pricePesok = useSelector(state => state.materialPage.pricePesok)
    const pricePorebrik = useSelector(state => state.materialPage.porebrikPrice)

    const store = useStore();
    const state = store.getState();
    const setVisible = (payload, title) => {
        dispatch(actionIsVisiblePlitka(payload, title))
        handleClose()
    }

    function createData(name, price, count) {
        return {name, price, count};
    }

    const works = state.paymentPage.cards.map(el =>
        createData(el.title, el.price, el.count)
    )
    let checkDataWorks
    for (let key of cards) {
        if (key.count > 0 && key.price > 0) {
            checkDataWorks = true
        }
    }


    const materialsCount = {
        plitka: parseInt(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Тротуарная плитка')).map(el => el.count)),
        beton: parseInt(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Бетон')).map(el => el.count)),
        plitkaCement: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Тротуарная плитка')).map(el => el.count) / 10),
        pesok: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Тротуарная плитка')).map(el => el.count) * 0.05 * 1.8),
        sheben: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Тротуарная плитка')).map(el => el.count) * 0.05 * 1.8),
        porebrik: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Поребрик')).map(el => el.count)),
        bordur: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Бордюр')).map(el => el.count)),
        porebrikCement: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Поребрик')).map(el => el.count) / 14),
        bordurCement: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Бордюр')).map(el => el.count) / 14),
        bordurPesok: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Бордюр')).map(el => el.count) / 14 * 0.150),
        betonCement: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Бетон')).map(el => el.count) * 3.3),
        betonPesok: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Бетон')).map(el => el.count) * 4.5),
        betonSheben: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Бетон')).map(el => el.count) * 0.9),
        porebrikPesok: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Поребрик')).map(el => el.count) / 14 * 0.150),
        porebrikSheben: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Поребрик')).map(el => el.count) * 0.021 + (0.03 * 0.25 * 1.8)),
        bordurSheben: Math.ceil(useSelector(state => state.paymentPage.cards.filter(el => el.title === 'Бордюр')).map(el => el.count) * 0.021 + (0.03 * 0.25 * 1.8)),
    }

    const materials = [
        plitkaPrice !== '' ? createData('Тротуарная плитка', plitkaPrice, materialsCount.plitka) : null,
        priceCement !== '' ? createData('Цемент (50кг)', priceCement, materialsCount.plitkaCement + materialsCount.porebrikCement + materialsCount.bordurCement + materialsCount.betonCement) : null,
        priceSheben !== '' ? createData('Щебень', priceSheben, materialsCount.sheben + materialsCount.betonSheben + materialsCount.porebrikSheben + materialsCount.bordurSheben) : null,
        pricePesok !== '' ? createData('Песок', pricePesok, materialsCount.pesok + materialsCount.betonPesok + materialsCount.porebrikPesok + materialsCount.bordurPesok) : null,
        pricePorebrik !== '' ? createData('Поребрик', pricePorebrik, materialsCount.porebrik) : null,
    ];
    const materialsFilter = materials.filter(elem => elem !== null)

    let totalMaterialPrice = materialsFilter.map((elem) => {
        return elem.price * elem.count
    });
    let totalWorkPrice = cards.map((elem) => {

        return elem.count * elem.price


    });
    let resultWorks = 0;
    let resultMaterials = 0;
    const sum = () => {

        for (let i = 0; i < totalMaterialPrice.length; i++) {
            resultMaterials += totalMaterialPrice[i]
        }
        for (let i = 0; i < totalWorkPrice.length; i++) {
            resultWorks += totalWorkPrice[i]
        }
    }
    sum()


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
                      //values,
                      errors,
                      //touched,
                      //handleChange,
                      //handleBlur,
                      handleSubmit,
                      // isSubmitting,

                  }) => (
                    <form onSubmit={handleSubmit} className={style.paymentBox}>
                        <div>
                            <div className={style.topBar}>
                                <div style={{width: "300px"}}>
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
                                        className={!isVisibleMaterials ? style.buttonMaterials : style.buttonMaterialsDelete}
                                        id="material"
                                        aria-controls={open ? 'material_control' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={!isVisibleMaterials ? openMaterials : handleOpenMaterials}
                                    >
                                        {isVisibleMaterials ? '- Удалить материалы' : '+ Добавить материалы'}
                                    </Button>
                                    {
                                        alertWarning &&
                                        <div className={style.alertWarning}>
                                            <Icon component={ArrowUpwardIcon}></Icon>
                                            <p>Добавьте цены на материалы, нужные для бетона</p>
                                        </div>

                                    }
                                </div>
                                <div className={style.materialsPanel}>
                                    {isVisibleMaterials &&
                                        <Accordion className={style.materials} expanded={expanded === 'materials'}
                                                   onChange={handleChangeToogle('materials')}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon/>}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                            >

                                                <Typography sx={{flexShrink: 0}}>
                                                    Стоимость материалов

                                                </Typography>

                                            </AccordionSummary>

                                            <AccordionDetails>
                                                <div className={style.infoPanel}>
                                                    {plitkaPrice === '' && pricePesok === '' &&
                                                        priceCement === '' && priceSheben === '' && porebrikPrice === '' &&
                                                        <p className={style.infoMaterials}>Заполните нужные вам поля</p>
                                                    }
                                                </div>

                                                <Typography className={style.accordion}>

                                                    <Material
                                                    />

                                                </Typography>

                                            </AccordionDetails>

                                        </Accordion>
                                    }

                                </div>
                                {openModalMaterials && <Modal
                                    openModalMaterials={openModalMaterials}
                                    handleOpenMaterials={handleOpenMaterials}
                                    clearDataMaterials={clearDataMaterials}
                                    onCloseMaterial={handleCloseModalMaterial}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                </Modal>}
                            </div>


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
                                {cards.map(el =>
                                    <MenuItem
                                        key={el}
                                        onClick={() => setVisible(true, el.title)}
                                        disabled={el.isVisible}
                                    >
                                        {el.title}
                                    </MenuItem>
                                )}
                                <MenuItem
                                    className={style.moreBtnMenu}
                                    onClick={selectItemMenu}
                                >
                                    Другое ...
                                </MenuItem>

                            </Menu>

                            {state.paymentPage.cards.map((el) =>
                                el.isVisible &&
                                <Accordion key={el.title} expanded={expanded === el.title}
                                           onChange={handleChangeToogle(el.title)}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}

                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >

                                        <Typography sx={{flexShrink: 0}}>
                                            {el.title} {(el.count === '' || el.price === '') &&
                                            <span className={style.warningTitle}>Нет данных!</span>}
                                        </Typography>

                                    </AccordionSummary>

                                    <AccordionDetails>
                                        <Typography>
                                            <div className={style.panelPlitka}>
                                                <div className={style.panelPlitkaInputs}>
                                                    <TextField
                                                        className={errors.countS && style.errorInput}
                                                        value={el.count}
                                                        onChange={(e) =>
                                                            dispatch(actionCountPlitkaWork(e.target.value, el.title))
                                                        }
                                                        name='countS'
                                                        type="input"
                                                        label={el.placeholderCount + ' ' + el.typeUnits}
                                                    />

                                                    <TextField
                                                        className={errors.price && style.errorInput}
                                                        value={el.price}
                                                        onChange={(e) =>
                                                            dispatch(actionPricePlitkaWork(e.target.value, el.title))}
                                                        type="input"
                                                        name='price'
                                                        label={el.placeholderPrice}
                                                    />
                                                    {el.title === 'Бетон' &&
                                                        <FormControlLabel
                                                            control={
                                                                <Switch
                                                                    checked={checked}
                                                                    defaultChecked
                                                                    size="small"
                                                                    onChange={handleChecked}

                                                                />
                                                            } label="Материалы"/>
                                                    }
                                                </div>
                                                <TrashIcon onClick={handleOpen}/>

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
                            {customAccordion &&
                                <Accordion expanded={expanded === false}
                                           onChange={handleChangeToogle('more')}
                                >

                                    <AccordionDetails>
                                        <Typography>
                                            {plitkaPrice === '' && pricePesok === '' &&
                                                priceCement === '' && priceSheben === '' && porebrikPrice === '' &&
                                                <p className={style.infoMaterials}>Заполните поля</p>
                                            }
                                            <div className={style.panelPlitkaCustom}>
                                                <div className={style.panelPlitkaCustomInputs}>
                                                    <TextField
                                                        className={errors.countS && style.errorInput}
                                                        value={customWorkTitle}
                                                        onChange={(e) =>
                                                            setCustomWorkTitle(e.target.value)
                                                        }
                                                        name='countS'
                                                        type="input"
                                                        label='Название'
                                                    />
                                                    <TextField
                                                        className={errors.countS && style.errorInput}
                                                        value={customWorkCount}
                                                        onChange={(e) =>
                                                            setCustomWorkCount(e.target.value)
                                                        }
                                                        name='countS'
                                                        type="input"
                                                        label='Кол-во'
                                                    />

                                                    <TextField
                                                        className={errors.price && style.errorInput}
                                                        value={customWorkPrice}
                                                        onChange={(e) =>
                                                            setCustomWorkPrice(e.target.value)
                                                        }
                                                        type="input"
                                                        name='price'
                                                        label='Стоимость'
                                                    />

                                                    <SelectUnits

                                                        updateUnits={updateUnits}

                                                    />

                                                </div>


                                            </div>
                                            <div className={style.panelButtons}>
                                                <Button variant="contained"
                                                        onClick={addCustomWork}
                                                >
                                                    Добавить

                                                </Button>
                                                <Button variant="text"
                                                        onClick={() => setCustomAccordion(false)}
                                                >
                                                    Отмена
                                                </Button>
                                            </div>


                                            {openModal && <Modal
                                                open={openModal}
                                                onClose={handleCloseModal}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                            </Modal>}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            }


                        </div>

                        <div>
                        </div>

                        <TableContainer sx={{maxHeight: 400}} component={Paper}
                                        style={{marginBottom: 20, marginTop: 20}}>

                            {checkDataWorks &&

                                <Table
                                    sx={{minWidth: 300}}
                                    size="small"
                                    //aria-label="simple table"
                                    stickyHeader aria-label="sticky table"
                                >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{minWidth: 110}}>Позиция</TableCell>
                                            <TableCell style={{minWidth: 110}} align="right">Кол-во</TableCell>
                                            <TableCell style={{minWidth: 110}} align="right">Стоимость</TableCell>
                                            <TableCell style={{minWidth: 110}} align="right">Всего</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {works.map((el) => (
                                            el.count && el.price &&
                                            <TableRow
                                                key={el.name}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell component="td" scope="row">{el.name}</TableCell>
                                                <TableCell
                                                    align="right">{el.count}
                                                    {el.name === 'Поребрик' ? ' м' :
                                                        el.name === 'Люки' ? ' шт' :
                                                            el.name === 'Люки' ? ' шт' : ' м²'
                                                    }
                                                </TableCell>
                                                <TableCell align="right">{el.price} ₽</TableCell>
                                                <TableCell align="right">{el.count * el.price} ₽</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            }

                            {
                                // (state.materialPage.plitkaPrice > 0 ||
                                //     state.materialPage.porebrikPrice > 0 ||
                                //     state.materialPage.pricePesok > 0 ||
                                //     state.materialPage.priceSheben > 0 ||
                                //     state.materialPage.priceCement > 0
                                // ) && materialsCount.plitka > 0 &&
                                //   materialsCount.beton > 0 &&
                                // state.materialPage.priceCement > 0 ||
                                // state.materialPage.pricePesok > 0
                                // &&
                                (materialsCount.plitka > 0 ||
                                    materialsCount.beton > 0 && checked ||
                                    materialsCount.porebrik > 0 ||
                                    materialsCount.bordur > 0

                                ) &&
                                (state.materialPage.plitkaPrice > 0 ||
                                    state.materialPage.porebrikPrice > 0 ||
                                    state.materialPage.pricePesok > 0 ||
                                    state.materialPage.priceSheben > 0 ||
                                    state.materialPage.priceCement > 0

                                )
                                &&
                                <Table sx={{minWidth: 300}}
                                       size="small"
                                       stickyHeader aria-label="sticky table"
                                       style={{marginTop: 20}}
                                >

                                    <TableRow>
                                        <TableCell colSpan={4} style={{padding: '10px', color: '#d46832'}}>Необходимые
                                            материалы:</TableCell>
                                    </TableRow>
                                    <TableBody>
                                        {materialsFilter.map((elem) => (
                                            elem.count > 0 &&
                                            <TableRow key={elem.name}
                                                      sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                                <TableCell style={{minWidth: 110}}>{elem.name}</TableCell>
                                                <TableCell style={{minWidth: 110}} align="right">{elem.count}
                                                    {
                                                        elem.name === 'Поребрик' ? ' м' :
                                                            elem.name === 'Тротуарная плитка' ? ' м²' :
                                                                elem.name === 'Цемент (50кг)' ? ` шт` : ' т'

                                                    }
                                                </TableCell>
                                                <TableCell style={{minWidth: 110}}
                                                           align="right">{elem.price} ₽
                                                </TableCell>
                                                <TableCell
                                                    style={{minWidth: 110}}
                                                    align="right">{parseInt(elem.count) * elem.price} ₽
                                                </TableCell>
                                            </TableRow>
                                        ))
                                        }
                                    </TableBody>
                                </Table>
                            }
                        </TableContainer>
                        {checkDataWorks &&
                            <div className={style.result}>
                                <p className={style.resultItem}>
                                    <span>Работа:</span>
                                    <span className={style.resultNum}>{resultWorks} ₽</span>
                                </p>
                                <p className={style.resultItem}>
                                    <span>Материалы:</span>
                                    <span className={style.resultNum}>{ resultMaterials} ₽</span>
                                </p>
                                <p className={style.resultItem}>
                                    <span>Итого:</span>
                                    <span className={style.resultNum}>{resultWorks + resultMaterials} ₽</span>
                                </p>
                            </div>

                        }
                    </form>
                )}
            </Formik>
        </div>
    )
}



