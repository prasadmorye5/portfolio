import { createContext, useContext, useEffect, useReducer } from "react";
import themeReducer from "./themeReducer";

export const ThemeComtext = createContext();

const initialState = JSON.parse(localStorage.getItem("theme")) || {primary:"color-1",background:'bg-1'}

export const ThemeProvider = ({children})=>{

   const[themeState,dispatch]= useReducer(themeReducer,initialState);

   const themeHandler = (buttonClassName)=>{
    dispatch({type:buttonClassName})
   }
//    console.log(themeState)

//storing theme-state
useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(themeState))
},[themeState.primary,themeState.background])
    
    return <ThemeComtext.Provider value={{themeState,themeHandler}}>{children}</ThemeComtext.Provider>
}


//custom-hook

export const useThemeContext =()=>{
    return useContext(ThemeComtext)
}
