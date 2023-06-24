import { createContext, useContext, useState } from "react";


const ModalContext = createContext();

export const ModalProvider=({children})=>{

    const[modal,setModal] = useState(false)

    const showModalHandler =()=>{
        setModal(true)
    }

    const hideModalHandler =()=>{
        setModal(false)
    }



    return<ModalContext.Provider value={{showModalHandler,hideModalHandler,modal}}>{children}</ModalContext.Provider>
}

//custom-hook to use the context-api

export const useModalContext =()=>{
    return useContext(ModalContext)
}