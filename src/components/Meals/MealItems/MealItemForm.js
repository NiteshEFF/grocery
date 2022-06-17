import React,{useRef, useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

    const inputRef = useRef();

    const [validInput, setValid] = useState(true);

    const submitHandler = (el) => {
        el.preventDefault();

        const enteredAmount = parseInt(inputRef.current.value);

        if(enteredAmount < 0 || enteredAmount > 5 ){
            setValid(false);
            return;
        }
        props.addItemToCart(enteredAmount);
    };

    return (<form className={classes.form} onSubmit={submitHandler}>
        <Input title='Amount' type={{
            type:'number',
            id:`amount_${props.id}`,
            min:1,
            max:5,
            step:1,
            defaultValue:1
            }}
            ref={inputRef}
            />
        <button>+ Add</button>
        {(!validInput) && <p>Please enter a valid amount in between 1-5</p>}
    </form>)
};

export default MealItemForm;