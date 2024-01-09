import React from "react";

type LanguageOptions = {
    english : boolean,
    setEnglish : React.Dispatch<React.SetStateAction<boolean>>,
    header : boolean
}

const LanguageOptionsSlider = ({english, setEnglish, header} : LanguageOptions) : JSX.Element =>{

    const HandleEnglishFieldChange = () =>{
        setEnglish(prev => !prev);
    }

    return <label className={header ? "switch header" : "switch"}>
            <span className={`${header ? 'polishCheckerText' : 'polishCheckerTextOptions'}`}>
                {header ? 'PL' : 'Polish'}
            </span>
            <input type="checkbox" checked={english} onChange={HandleEnglishFieldChange} />
            <span className="slider round"></span>
            <span className={`${header ? 'englishCheckerText' : 'englishCheckerTextOptions'}`}>
                {header ? 'EN' : 'English'}
            </span>
        </label>
    
}

export default LanguageOptionsSlider