import React,{Fragment, useContext} from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import PopupContext from "../store/popup-context";
import Cart from "../Cart/Cart";


const Header = (props) =>{
    const ctx = useContext(PopupContext);
    return <Fragment>
        <header className={classes.header}>
            <h1>Govinda's Prasadam</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Table of delicious Krishna Prasadam"/>
        </div>
        {(ctx.showPopup) && <Cart/>}
    </Fragment>
}
export default Header;