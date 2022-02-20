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
                <h1>Kim jestem?</h1>
                <p className="akapit">
                    Jestem ambitnym developerem z rocznym doświadczeniem komercyjnym w QA przy CI/CD aplikacji webowej oraz niekomercyjnym doświadczeniem w technologii MERN. W ramach projektu inżynierskiego uczestniczyłem w przygotowaniu stacji pomiarowej IoT z brokerem wiadomości MQTT, k8s, bazą danych PostgreSQL oraz stroną internetową reprezentującą zebrane dane. Projekt był tworzony z wykorzystaniem procesów SRE. Byłem odpowiedzialny za zaprojektowanie skalowalnego węzła IoT. 
                </p>

                <h2>
                    W jakich technologiach dobrze się czuję?
                </h2>
                
                    <div className="LISTAADIV">
                        <ul className="LISTAA">
                            <li>
                                C#
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


                <h2>
                    Z jakimi technologiami miałem styczność?
                </h2>
                
                    
                    <div className="LISTAADIV">
                        <ul className="LISTAA">
                            <li>
                                C# - Visual Studio, OOP, WPF, WindowsForms App, Console App, linq, delegatory, fabryki obiektów, NUnit - testy jednostkowe, Selenium.
                            </li>
                            <li>
                                Strony Internetowe - HTML, CSS (SCSS) , JavaScript, ES6, RWD, React.js, Node.js.
                            </li>
                            <li>
                                IoT - Raspberry Pi + protokół MQTT.
                            </li>
                            <li>
                                Środowisko Linux - Bash, Shell, Cron, Nginx, Apache, FTP, SSH, fail2ban, [...]
                            </li>
                            <li>
                                Java - Android Studio (aplikacje na Androida z wykorzystaniem API), IntelliJ, OOP.
                            </li>
                            <li>
                                Maszyny Wirtualne / Chmura - w tym: VirtualBox, AzureVM, Google Compute Engine, AWS.
                            </li>
                            <li>
                                Git, GitLab, GitHub.
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
                                Docker, docker compose
                            </li>
                            <li>
                                Inżynieria Oprogramowania - modele oraz metodyki w konkretnych przypadkach.
                            </li>
                            <li>
                                R - Sztuczna Inteligencja - algorytmy genetyczne oraz rekurencyjne.
                            </li>
                        </ul>
                    </div>



                
                <h2>
                    Hobby?
                </h2>
                
                    Rekreacja:
                    <div className="LISTAADIV">

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


                    Czas wolny:

                    <div className="LISTAADIV">
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
