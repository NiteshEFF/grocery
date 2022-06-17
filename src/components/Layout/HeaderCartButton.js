import React,{useContext, useEffect, useState} from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import PopupContext from '../store/popup-context';

const HeaderCartButton = props => {
    const ctx = useContext(PopupContext);

    const {cart} = ctx;

    const [bumpActive,setBumpActive] = useState(false);

    const TotalItemsInCart = ctx.cart.reduce((curNum, item)=>{
        return curNum + item.amount;
    },0);

    const btnClass = `${classes.button} ${bumpActive ? classes.bump : ``}`;
    useEffect(()=>{
        setBumpActive(true);

        const timer = setTimeout(()=>{
            setBumpActive(false);
        },300);

        return ()=>{
            clearTimeout(timer);
        }
    },[cart]);

    return <button className={btnClass} onClick={()=>ctx.togglepopup(true)}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{TotalItemsInCart}</span>
    </button>
};

export default HeaderCartButton;