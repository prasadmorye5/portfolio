import React from 'react'
import Card from './Card';
import "./modal.css"
import  ReactDOM  from 'react-dom';
import { useModalContext } from '../context/modal-context';
const Modal = ({className,children}) => {
    const {modal,hideModalHandler} = useModalContext()
  return (
    <>
        
        {
            modal &&
             ReactDOM.createPortal(<>
                <section id='backdrop' onClick={hideModalHandler}>
                </section>
                <Card className={className}>{children}</Card>
            </>,document.querySelector("#overlays"))
        }
    </>
  )
}

export default Modal
