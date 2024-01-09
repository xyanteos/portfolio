import React, { JSXElementConstructor, useEffect } from "react";
import './OptionsPage.css'
import { useOutletContext } from "react-router-dom";

type expectedContext = {
    english : boolean,
    setEnglish : React.Dispatch<React.SetStateAction<boolean>> | null,
    currentModeBlack : boolean,
    setCurrentModeBlack : React.Dispatch<React.SetStateAction<boolean>> | null
}

const OptionsPage = () => {

    const context : expectedContext = useOutletContext();

    useEffect(()=>{
        console.log(context.english);
    },[])

    const renderPlOrEn = () : JSX.Element =>{
        if(context.english) return polishOptions()
        else return englishOptions()
    }

    const polishOptions = () : JSX.Element => {
        return (
            <div className="optionsContainer">
                <h1>
                    Opcje
                </h1>
            </div>
        )
    }

    const englishOptions = () : JSX.Element => {
        return (
            <div>
                <h1 className="optionsContainer">
                    Options
                </h1>
            </div>
        )
    }

    return renderPlOrEn()
}

export default OptionsPage