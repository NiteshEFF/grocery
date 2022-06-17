import React,{useContext} from 'react';
import classes from './MealItems.module.css';
import MealItemForm from './MealItemForm';
import PopupComponentContext from '../../store/popup-context';

const MealItems = (props) => {
    const ctx = useContext(PopupComponentContext);
    const addItemHandler = amount =>{
        ctx.addItemToCart({...props, amount});
    };


    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{`${props.price.toFixed(2)}`}</div>
        </div>
        <div>
            <MealItemForm 
            id={props.id}
            key={props.id}
            addItemToCart={addItemHandler}
            />
        </div>
    </li>

};

export default MealItems;