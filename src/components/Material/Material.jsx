import React from "react";
import style from "./Material.module.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { actionPrice, actionClearPrice } from "../../redux/reducerMaterials";

import AddIconMaterials from "@mui/icons-material/AddCircleOutline";
import RemoveIconMaterials from "@mui/icons-material/RemoveCircle";
export const Material = ({ stateMaterials }) => {
  const dispatch = useDispatch();

  console.log("stateMaterials", stateMaterials);
  return (
    <div>
      <div className={style.formInputs}>
        {stateMaterials.map((el) => (
          <div className={style.formInputsItem}>
            <TextField
              onChange={(e) => dispatch(actionPrice(el.title, e.target.value))}
              value={el.price}
              label={el.title + el.label}
              key={el.title}
            />
            <RemoveIconMaterials
              className={style.RemoveIconMaterials}
              onClick={() => dispatch(actionClearPrice(el.title))}
            />
          </div>
        ))}
      </div>
      <AddIconMaterials
        className={style.AddIconMaterials}
        onClick={() => alert(777)}
      />
    </div>
  );
};
