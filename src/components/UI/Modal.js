import React,{Fragment} from 'react';
import { createPortal } from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModelOverlay';

const Modal = (props) => {
    return (
        <Fragment>
        {createPortal(<Backdrop close={props.close}/>, document.querySelector("#cart-items"))}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.querySelector("#cart-items"))}
        </Fragment>
    );
};
export default Modal;