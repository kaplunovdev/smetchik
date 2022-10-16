import React from "react";
import style from "./AddMaterial.module.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { actionNewMaterial } from "../../../redux/reducerMaterials";
import SelectUnits from "../../SelectForm/SelectUnits";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { FormControl, InputLabel, } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from '@mui/material/Select';

export const AddMaterial = ({ setModalAddMaterial }) => {
  const dispatch = useDispatch();

  const [newPriceTitle, setNewTitlePrice] = React.useState('')
  const [newPrice, setNewPrice] = React.useState('')
  const [newPriceLabel, setNewPriceLabel] = React.useState('')


  const handleNewPrice = (event) => {
    setNewPriceLabel(event.target.value)
    dispatch(actionNewMaterial(newPriceTitle, newPrice, newPriceLabel))
    setModalAddMaterial(false)
  }




  return (
    <Box sx={style}>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <div className={style.AddMaterial}>
            <div className={style.formInputs}>
              <span>Введите данные </span>
              <div className={style.formInputsItem}>
                <TextField label="Название"
                  onChange={(e) => setNewTitlePrice(e.target.value)}
                />
                <TextField label="Цена"
                  onChange={(e) => setNewPrice(e.target.value)}
                />
                <FormControl sx={{ m: 0, minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-label">Ед.изм</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={newPriceLabel}
                    label='Ед.изм.'
                    onChange={(e) => setNewPriceLabel(e.target.value)}
                  >
                    <MenuItem value='м'>м</MenuItem>
                    <MenuItem value='м²'>м²</MenuItem>
                    <MenuItem value='м³'>м³</MenuItem>
                    <MenuItem value='шт'>шт</MenuItem>
                    <MenuItem value='т'>т</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <p style={{ display: "flex", paddingTop: "20px" }}>
              <Button
                onClick={handleNewPrice}
              >
                Добавить
              </Button>
              <Button onClick={() => setModalAddMaterial(false)}>Отмена</Button>
            </p>
          </div>
        </div>
      </Typography>
    </Box>
  );
};
