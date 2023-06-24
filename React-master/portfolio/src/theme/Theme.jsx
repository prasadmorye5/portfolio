import React from 'react'
import Modal from '../components/Modal'
import "./theme.css"
import {primaryColors,backgroundColors} from "./data"
import PrimaryColor from './PrimaryColor'
import BackgroundColor from './BackgroundColor'
const Theme = () => {
  return (
    <Modal className="theme_modal">
        <h3>Customize Your Theme</h3>
        <small>Change the primary and background color to your preference.</small>
        <div className="theme_primary_wrapper">
            <h5>Primary Color</h5>

                <div className="theme_primary_colors">
                {
                    primaryColors.map(pcolor=><PrimaryColor key={pcolor.className} className={pcolor.className}/>)
                }
                </div>
                
        </div>

        <div className="theme_background_wrapper">
            
                <h5>Background Color</h5>
                <div className="theme_background_colors">
                    {
                        backgroundColors.map(bcolor=><BackgroundColor key={bcolor.className} className={bcolor.className}/>)
                    }
                </div>

              
            
        </div>
    </Modal>
  )
}

export default Theme
