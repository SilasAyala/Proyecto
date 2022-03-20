import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import './Modal.css'
import Backdrop from '../../Backdrop/Backdrop.js'

const ModalLayOut = (props) => {
    const content = (
        <div className={`modal ${props.className}`}>
            {/*Header del Modal*/}
            <header className={`modal__header ${props.headerClass}`}>
                <h2> {props.header} </h2>
            </header>
            
            <form
                onSubmit={
                    props.onSubmit ? props.onSubmit: event => event.preventDefault()
                }
            >

                {/* Body del Modal*/}
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>

                {/* Footer del Modal */}
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    );
    
    return ReactDOM.createPortal(content, document.querySelector('#modal-container'));
}

const Modal = (props) => {
    return(
        <React.Fragment>
            {props.show ? <Backdrop onClick={props.onCancel} /> : null}
            
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalLayOut {...props} />
            </CSSTransition>
        </React.Fragment>
        
    );
}

export default Modal;