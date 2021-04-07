import React from 'react'


const Glowna = () =>{
    return(
        <div className="stronaGlowna">


            <div className="body">
                <div className="image">
                    <img src="tlo321.png" alt="mojeZdj"/>
                </div>
                <h1>Kim jestem?</h1>
                <p className="akapit">
                    Jestem ambitnym developerem z niekomercyjnym doświadczeniem w technologii MERN. Podczas studiów tworzyłem różne projekty grupowe w środowisku SCRUM-owym. Największym z nich był projekt wysoce skalowalnego rozwiązania stacji pomiarowej IoT z brokerem wiadomości MQTT, k8s, bazą danych PostgreSQL oraz stroną internetową reprezentującą zebrane dane. Projekt był tworzony z wykorzystaniem procesów SRE. W projekcie byłem odpowiedzialny za zaprojektowanie węzła IoT. 
                    <br/>
                    <span className="bold">Aktualnie jestem w trakcie poszukiwania pracy, aby zdobyć doświadczenie i wiedzę programistyczną w środowisku biznesowym.</span>
                </p>

                <h2>
                    W jakich technologiach dobrze się czuję?
                </h2>
                
                    <div className="LISTAADIV">
                        <ul className="LISTAA">
                            <li>
                                MERN - full stack
                            </li>
                            <li>
                                Linux
                            </li>
                            <li>
                                Unity / C#
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
                                C# - Visual Studio, OOP, WPF, WindowsForms App, Console App, linq, delegatory, NUnit - testy jednostkowe, Selenium.
                            </li>
                            <li>
                                Strony Internetowe - React.js, HTML, SCSS, RWD, JavaScript, Node.js, express.js, CMS (Joomla, Wordpress).
                            </li>
                            <li>
                                IoT - Raspberry Pi (projekt inżynierski), protokół MQTT.
                            </li>
                            <li>
                                Środowisko Linux - Bash, Shell, Nginx, Apache, FTP, SSH, fail2ban, [...]
                            </li>
                            <li>
                                Java - Android Studio (aplikacje na Androida z wykorzystaniem API), IntelliJ, OOP.
                            </li>
                            <li>
                                Maszyny Wirtualne - w tym: VirtualBox, AzureVM, Google Compute Engine, AWS.
                            </li>
                            <li>
                                CI/CD - Git - GitHub, Markdown.
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
                                Bazy danych - SQL, Diagramy ERD, MongoDB.           
                            </li>
                            <li>
                                Unity Game Engine - podstawy.
                            </li>
                            <li>
                                Docker, Kubernetes, Swarm - teoretyczne zagadnienia odnośnie logiki działania oraz przypadki użycia, a także korzyści wynikające ze stosowania tych technologii.
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


                    Zabicie czasu:

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
                        Made by <a href="https://www.facebook.com/1431627220249093" className="madeBy">Maciej Nowacki</a>
                    </p>
                </div>
            </div>

        </div>

    )
}


export default Glowna
