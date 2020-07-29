import React from 'react'


const Glowna = () =>{
    return(
        <div className="stronaGlowna">


            <div className="body">
                <div className="image">
                    <img src="tlo321.png"/>
                </div>
                <h1>Kim jestem?</h1>
                <p className="akapit">
                    Jestem studentem 7 semestru informatyki (Inż.) na uczelni wyższej WSB w Gdańsku ze specjalizacją programowania.
                    Poprzednio studiowałem elektrotechnikę na Politechnice Gdańskiej, lecz nie był to kierunek w którym mógłbym się spełnić.
                    Od dziecka fascynowały mnie komputery i wszystko co z nimi związane.
                    Uczelnie wyższe pomogły w pewnym stopniu zrozumieć jak te maszyny działają, chociaż moja droga 
                    w celu poznania wszytkich procesów komunikacji człowiek-komputer i komputer-człowiek dopiero się zaczyna.
                    <br/>
                    <span className="bold">Aktualnie jestem w trakcie poszukiwania pracy, aby zdobyć doświadczenie i wiedzę programistyczną w środowisku biznesowym.</span>
                </p>
                <h2>
                    Z jakimi technologiami miałem styczność?
                </h2>
                <p>
                    Podczas studiów tworzyłem różne projekty. Większość z nich robiłem sam, lecz czasami również współpracowałem z kolegami z roku. Technologie, z jakimi miałem styczność w międzyczasie to między innymi:
                    <div className="LISTAADIV">
                        <ul className="LISTAA">
                            <li>
                                C# - Visual Studio, OOP, WPF, WindowsForms App, Console App, linq, delegatory, NUnit - testy jednostkowe, Selenium.
                            </li>
                            <li>
                                Strony Internetowe - React, HTML, CSS, JavaScript, CMS (Joomla, Wordpress).
                            </li>
                            <li>
                                Java - Android Studio (aplikacje na Androida z wykorzystaniem API), IntelliJ, OOP.
                            </li>
                            <li>
                                R - Sztuczna Inteligencja - algorytmy genetyczne oraz rekurencyjne.
                            </li>
                            <li>
                                IoT - Raspberry Pi oraz Arduino (projekt inżynierski), protokół MQTT, ThingSpeak, Node-Red (wizualizacja przepływu danych - flow).
                            </li>
                            <li>
                                Środowisko Linux - Bash, Shell, Nginx, Apache, FTP, SSH, fail2ban, [...]
                            </li>
                            <li>
                                Maszyny Wirtualne - w tym: VirtualBox, AzureVM, Google Compute Engine.
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
                                C - programowanie funkcyjne, w tym obliczenia na liczbach zespolonych.
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
                        </ul>
                    </div>

                </p>
                <h2>
                    W jakich technologiach dobrze się czuję?
                </h2>
                <p>
                    <div className="LISTAADIV">
                        <ul className="LISTAA">
                            <li>
                                C# - Visual Studio
                            </li>
                            <li>
                                Android Studio
                            </li>
                            <li>
                                REACT - Strony internetowe (Front end)
                            </li>
                            <li>
                                Linux
                            </li>
                        </ul>
                    </div>
                </p>
                <h2>
                    Hobby?
                </h2>
                <p>                        
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
                                Podróże/zwiedzanie
                            </li>
                        </ul>
                    </div>


                    Zabicie czasu:

                    <div className="LISTAADIV">
                        <ul className="LISTAA">
                            <li>
                                Gry komputerowe
                            </li>
                            <li>
                                Książki Fantasy
                            </li>
                            <li>
                                Grill ;)
                            </li>
                        </ul>
                    </div>
                </p>
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
