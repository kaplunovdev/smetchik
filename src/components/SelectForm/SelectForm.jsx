import React from "react";
import style from './SelectForm.module.css'
import NavBottom from "../NavBottom/NavBottom";

const SelectForm = (props) => {
    return (
        <div className={style.listPopup}>
          <ul>
              <li>Тротуарная плитка</li>
              <li>Асфальт</li>
              <li>Бордюр</li>
          </ul>
        </div>

    )
}

export default SelectForm;