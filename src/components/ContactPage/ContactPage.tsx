import React from "react";
// import phoneIcon from '../Pictures/pngguru.com.png'
import './ContactPage.css'
import { useOutletContext } from "react-router-dom";
// import Phone from '../../../public/Phone.png'
import Phone from '/Pictures/Phone.png?url'

type expectedContext = {
    english: boolean,
    setEnglish: React.Dispatch<React.SetStateAction<boolean>>,
    currentModeBlack: boolean,
    setCurrentModeBlack: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactPage = () => {

    const context: expectedContext = useOutletContext()

    const linked = 'https://www.linkedin.com/in/maciej-nowacki-12b4581b3/'
    return <>
        <div className="kontaktInfo">
            <p className="centeredText">{context.english ? 'You can contact me via:' : 'Skontaktuj się ze mną poprzez:'}</p>
            <br />
            <div className="kontaktInfoCredentials">
                <div className="centered">
                    <a href={linked}>
                        <img src="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" alt="LinkedIn" />
                        <span>LinkedIn</span>
                    </a>
                    https://www.linkedin.com/in/maciej-nowacki-12b4581b3/
                </div>
                <div className="centered spacious">
                    <a className="" href="mailto:nowacki.maciej.pr@gmail.com?subject=Wiadomość%20z%20portfolio">
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico" alt="gmail" />
                        <span>E-mail: </span>
                    </a>
                    nowacki.maciej.pr@gmail.com
                </div>
                <div className="centered spacious">
                    <p className="centeredText spacious">{context.english ? 'Or by phone:' : 'Lub telefonicznie:'}</p>
                    <a href='tel:502891350'>
                        <img src={Phone} alt="phone" />
                        <br />
                        <span>Call me</span>
                    </a>
                    <span>(+48) 502-891-350</span>
                </div>
            </div>
        </div>
    </>
}

export default ContactPage