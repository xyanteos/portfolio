import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import './DeviceModeSlider.css'

type expectedContext = {
    currentModeBlack: boolean,
    setCurrentModeBlack: React.Dispatch<React.SetStateAction<boolean>>
}

const DeviceModeSlider = ({ currentModeBlack, setCurrentModeBlack }: expectedContext) => {
    
    const HandleDeviceModeFieldChange = () =>{
        setCurrentModeBlack(prev => !prev);
    }
    
    return (
        <label className="switch">
            <div className="lightBox">
                <span className='lightModeText'>
                    {/* Light Mode */}
                    <FontAwesomeIcon icon={faSun} size="2x" className="fa-sun" />
                </span>
            </div>
            <input type="checkbox" checked={currentModeBlack} onChange={HandleDeviceModeFieldChange} />
            <span className="slider round"></span>
            <div className="darkBox">
                <span className='darkModeText'>
                    {/* Dark Mode */}
                    {/* <i className="fas fa-moon"></i> */}
                    <FontAwesomeIcon icon={faMoon} size="2x" className="fa-moon"/>
                </span>
            </div>
        </label>
    )

}

export default DeviceModeSlider