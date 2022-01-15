import React from "react";
import style from './NavBottom.module.css'
import {NavLink} from "react-router-dom";

const NavBottom = (props) => {
  return(
      <div className={style.navBottom}>
         <div>
             {/*<div className={style.navBottomImg}>*/}
             {/*    <img src="https://logoeps.com/wp-content/uploads/2014/09/23689-chrome-logo-icon-vector-icon-vector-eps.png" alt=""/>*/}
             {/*</div>*/}
             <div>Работа</div>
         </div>
          <div>
              {/*<div className={style.navBottomImg}>*/}
              {/*    <img src="https://logoeps.com/wp-content/uploads/2014/09/23689-chrome-logo-icon-vector-icon-vector-eps.png" alt=""/>*/}
              {/*</div>*/}
             <NavLink to={'/'}>Главная</NavLink>
          </div>
          <div>
              {/*<div className={style.navBottomImg}>*/}
              {/*    <img src="https://logoeps.com/wp-content/uploads/2014/09/23689-chrome-logo-icon-vector-icon-vector-eps.png" alt=""/>*/}
              {/*</div>*/}
              <div>Материалы</div>
          </div>

      </div>
  )
}

export default NavBottom;