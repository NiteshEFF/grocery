import React,{useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import PopupContext from '../store/popup-context';
import CartItem from './CartItem/CartItem';

const Cart = () => {
    const ctx = useContext(PopupContext);

    const isItemsInCart = ctx.cart.length > 0;

    const removeItemHadler = item => {
        ctx.removeItemFromCart(item);
    };

    const cartItems = <ul className={classes['cart-items']}>{ctx.cart.map(item => {
        return (
        <CartItem 
        key={item.id} 
        price={item.price} 
        amount={item.amount}
        name={item.name}
        onAdd={() => ctx.addItemToCart({...item,amount:1})}
        onRemove = {() => removeItemHadler(item)}
        />)
      })}</ul>;

      
    return (
        <Modal close={()=> ctx.closePopup()}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ctx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={()=>ctx.closePopup()}>close</button>
                {isItemsInCart && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;