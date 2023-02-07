import React from 'react'
import mirage from './Pictures/tlo321.png'
const linked = 'https://www.linkedin.com/in/maciej-nowacki-12b4581b3/'

const Glowna = () =>{
    return(
        <div className="stronaGlowna">


            <div className="body">
                <div className="image">
                    <img src={mirage} alt="mojeZdj"/>
                </div>
                <h1 className='text-focus-in'>
                    Kim jestem?
                </h1>
                <p className="akapit tracking-in-expand-fwd-bottom">
                    Jestem ambitnym developerem z dwuletnim doświadczeniem komercyjnym w QA aplikacji webowej w firmie Sii. W pracy wykorzystuję: 
                    C#, Selenium, Visual Studio, GitHub, RDP, SSH, Windows, Linux i inne.                   
                    Do moich codziennych obowiązków należą takie zagadnienia, jak: 
                    <br/>Tworzenie Test Case-ów, pisanie testów automatycznych, Code Review, dokumentacja, fixowanie istniejących testów oraz 
                    utrzymanie środowisk testowych.<br/>Posiadam również niekomercyjne doświadczenie w technologii MERN i .NET Core 6+ w docker-yzowanej usłudze. 
                </p>
                <p className='akapit tracking-in-expand-fwd-bottom'>
                    W ramach projektu inżynierskiego uczestniczyłem w przygotowaniu stacji pomiarowej IoT z brokerem wiadomości MQTT, 
                    k8s, bazą danych PostgreSQL oraz stroną internetową reprezentującą zebrane dane. Projekt był tworzony z wykorzystaniem procesów SRE. 
                    Byłem odpowiedzialny za zaprojektowanie skalowalnego węzła IoT, a dokładniej za przygotowanie generatora danych przesyłanych do brokera wiadomości MQTT. 
                </p>
                <p className='akapit tracking-in-expand-fwd-bottom'>
                    Aktualnie poza pracą biorę udział w projekcie Radon prowadzonym pod czujnym okiem Pana Profesora Cezarego Orłowskiego we współpracy z WSB oraz IBM. 
                    Pomagam w procesie wytwarzania rozwiązania IoT do pobierania pomiarów pierwiastka Radon z powietrza. 
                    Rozwiązanie ma działać na zasadzie plug and play ze scentralizowanym serverem bazodanowym, oraz możliwością lokalnej edycji ustawień czujników. 
                    Dotychczas przygotowałem obrazy dockerowe: 
                    <ul>
                        <li>
                            Klienta Kafki w Node.js, pobierającego dane z brokera Kafki i przekazującego je do API poprzez protokół HTTP. 
                        </li>
                        <li>
                            API w .NET 7 MVC - szczegóły w zakładce Projekty.
                        </li>
                        <li>
                            Bazy danych MySql.
                        </li>
                    </ul>
                </p>
                <h2 className='text-focus-in'>
                    W jakich technologiach dobrze się czuję?
                </h2>
                    <div className="LISTAADIV tracking-in-expand-fwd-bottom">
                        <ul className="LISTAA">
                            <li>
                                C# - .Net Framework, .Net Core 6+ - MVC, minimal API
                            </li>
                            <li>
                                MERN stack
                            </li>
                            <li>
                                Windows/Linux
                            </li>
                            <li>
                                Unity
                            </li>
                            <li>
                                Android Studio
                            </li>
                        </ul>
                    </div>
                <h2 className='text-focus-in'>
                    Z jakimi technologiami miałem styczność?
                </h2>
                    <div className="LISTAADIV tracking-in-expand-fwd-bottom">
                        <ul className="LISTAA">
                            <li>
                                C# - Visual Studio, MVC/minimal API, Selenium, NUnit, Console App, Linq, OOP.
                            </li>
                            <li>
                                Strony Internetowe - HTML, CSS (SCSS) , JavaScript, ES6, RWD, React.js, .NET Core, Node.js.
                            </li>
                            <li>
                                Git, GitLab, GitHub.
                            </li>
                            <li>
                                Docker, docker compose
                            </li>
                            <li>
                                Środowisko Linux - Bash, Shell, Cron, Nginx, Apache, FTP, SSH, fail2ban, [...]
                            </li>
                            <li>
                                Maszyny Wirtualne / Chmura - w tym: VirtualBox, AzureVM, Google Compute Engine, AWS.
                            </li>
                            <li>
                                IoT - Raspberry Pi + protokół MQTT.
                            </li>
                            <li>
                                AD - Windows server 2012r2, Linux CentOS.
                            </li>
                            <li>
                                C++ - Podstawy, proste projekty z Arduino.
                            </li>
                            <li>
                                Python - Pycharm, programownie funkcyjne.
                            </li>
                            <li>
                                Bazy danych - SQL, MySql, Diagramy ERD, MongoDB.           
                            </li>
                            <li>
                                Unity Game Engine - podstawy.
                            </li>
                            <li>
                                R - Sztuczna Inteligencja - algorytmy genetyczne oraz rekurencyjne.
                            </li>
                        </ul>
                    </div>
                <h2 className='text-focus-in'>
                    Rekreacja:
                </h2>
                    <div className="LISTAADIV tracking-in-expand-fwd-bottom">

                        <ul className="LISTAA">
                            <li>
                                Narciarstwo
                            </li>
                            <li>
                                Łyżwy
                            </li>
                            <li>
                                Pływanie
                            </li>
                            <li>
                                Koszykówka
                            </li>
                            <li>
                                Rolki
                            </li>
                            <li>
                                Podróże, zwiedzanie
                            </li>
                        </ul>
                    </div>
                    <h2 className='text-focus-in'>
                        Czas wolny:
                    </h2>
                    <div className="LISTAADIV tracking-in-expand-fwd-bottom">
                        <ul className="LISTAA">
                            <li>
                                Książki Fantasy
                            </li>
                            <li>
                                Gry komputerowe
                            </li>
                        </ul>
                    </div>
                <div className="stopka">
                    <p>
                        Made by <a href={linked} className="madeBy">Maciej Nowacki</a>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Glowna
