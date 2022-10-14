import React from "react";
import style from "./AddMaterial.module.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
//import { actionPrice, actionClearPrice } from "../../redux/reducerMaterials";
import SelectUnits from "../../SelectForm/SelectUnits";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
export const AddMaterial = ({ setModalAddMaterial }) => {
  const dispatch = useDispatch();

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
                <TextField label="Название" />
                <TextField label="Цена" />
                <SelectUnits />
              </div>
            </div>
            <p style={{ display: "flex", paddingTop: "20px" }}>
              <Button
              // onClick={openModalMaterials ? clearDataMaterials : clearDataPlitka}
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
