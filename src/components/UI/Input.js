import React from 'react';
import classes from './Input.module.css';

const Input  = React.forwardRef((props,ref) => {
 return (
    <div className={classes.input}>
        <label htmlFor={props.type.id}>{props.title}</label>
        <input {...props.type} ref={ref}/>
    </div>
 );
});

export default Input;