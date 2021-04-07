import React from 'react'

const Kontakt = () =>{
    return(
        <div className="kontakt">
            <div className="body">
                
                <div className="kontaktInfo">
                    <p>Skontaktuj się ze mną poprzez:</p>
                    <br/>
                    <div className="kontaktInfoCredentials">
                        <a href="https://www.linkedin.com/in/maciej-nowacki-12b4581b3/"><img src="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" alt="LinkedIn"/> <span>LinkedIn</span></a>
                        <br/>
                        <a href="mailto:nowacki.maciej.pr@gmail.com?subject=Wiadomość%20z%20Nowacki.cba.pl"><img src="https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico" alt="gmail"/><span>E-mail: </span></a>
                        nowacki.maciej.pr@gmail.com
                        <br/>
                        <p>Lub</p>
                        <img src="pngguru.com.png" alt="phone"/> 
                        <span>(+48) 502-891-350</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Kontakt
