import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

type HeaderProps = {
    burgerActive : boolean,
    scrolled: boolean,
    HabndleBurgerButtonClick : () => void
    // english : boolean
    HandleEnglishFieldChange : () => void
}
type expectedContext = {
    english : boolean,
    setEnglish : React.Dispatch<React.SetStateAction<boolean>>
}


const HeaderElement = ({ burgerActive, scrolled, HabndleBurgerButtonClick, HandleEnglishFieldChange } : HeaderProps) =>{

    const context : expectedContext = useOutletContext();

    return(
    <header className={`HeaderContainer${scrolled ? ' sticky' : ''}`} >
        <nav className='NavBarMenu menu'>
            <Link className='Logo' to='/'>
                <span>
                Maciej
                </span>
                <img src='./vite.svg'/>
                <span>
                Nowacki
                </span>
            </Link>
            <label className="switch">
                <span className="polishCheckerText">
                    PL
                </span>
                <input type="checkbox" defaultChecked={context?.english} onChange={HandleEnglishFieldChange} />
                <span className="slider round"></span>
                <span className="englishCheckerText">
                    EN
                </span>
            </label>
            {/* <a className='AboutMe mobileHidden' href='/about'>O mnie</a> */}
            <Link className="mobileHidden" to='/about' >O mnie</Link>
            <Link className="mobileHidden" to='/projects' >Projekty</Link>
            <Link className="mobileHidden" to='/contact' >Kontakt</Link>
            {/* <a className='Projekty mobileHidden' href='/projects'>Projekty</a> */}
            {/* <a className='Contact mobileHidden' href='/contact'>Kontakt</a> */}
            <Link className="mobileHidden" to="/options">Opcje</Link>
            <a className={`burger${burgerActive ? ' active' : ''}`} onClick={HabndleBurgerButtonClick}>
                <img src='./burger.svg'/>
            </a>
        </nav>
        <nav className={`NavBarMenu menu sidebar${burgerActive ? '' : ' hidden'}`}>
            <div className='exitButtonContainer'>
                <a className={`exit${!burgerActive ? ' hidden' : ''}`} onClick={HabndleBurgerButtonClick}>
                <img src='./close.svg'/>
                </a>
            </div>
            {/* <a className='AboutMe' href='/about'>O mnie</a> */}
            <Link className="AboutMe" to='/about' onClick={HabndleBurgerButtonClick}>O mnie</Link>
            <Link className="Projects" to='/projects' onClick={HabndleBurgerButtonClick}>Projekty</Link>
            <Link className="Contact" to='/contact' onClick={HabndleBurgerButtonClick}>Kontakt</Link>
            <Link className="Options" to='/options' onClick={HabndleBurgerButtonClick}>Opcje</Link>

            {/* <a className='Projects' href='/projects'>Projekty</a>
            <a className='Contact' href='/contact'>Kontakt</a> */}
        </nav>
    </header>
    )       
}

export default HeaderElement