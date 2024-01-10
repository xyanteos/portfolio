
const AboutMePagePL = () => {
    return <>
        <h1>
            Kim jestem?
        </h1>
        <p >
            Jestem ambitnym developerem z dwuipółletnim doświadczeniem komercyjnym w QA aplikacji webowej w firmie Sii. <br />
            W pracy wykorzystuję: C#, .NET Framework, .NET Core, Selenium, Visual Studio, GitHub, RDP, SSH, Windows, Linux i inne. <br />
            Do moich codziennych obowiązków należą takie zagadnienia, jak:
            Tworzenie Test Case-ów, pisanie testów automatycznych, Code Review, dokumentacja, fixowanie istniejących testów oraz utrzymanie środowisk testowych.
        </p>
        <p >
            Mój ostatni duży projekt w Sii dotyczył refaktoryzacji naszej solucji testowej i unowocześnienia technologii w niej wykorzystywanych celem pozbycia się długu technologicznego.
            W ramach wprowadzanych zmian przeszliśmy z .NET Framework 3.5 na .NET Framework 4.8, a z .NET Core 3.0 na .NET 6. Z kolei moje zadanie refaktoru polegało na przetworzeniu rozwiązania z - bazującego na klasach statycznych i abstrakcyjnych, oraz dużej ilości dziedziczenia -
            na bazujące na interfejsach, wztrzykiwaniu zależności (DI), Odwróceniu kontroli nad zależnościami (IoC) i kompozycji.
        </p>
        <p>
            Nieustannie szlifuję swoje umiejętności po godzinach w zakresie backendu (.NET MVC), frontendu (React.js) i wielopratformowych rozwiązań (.Net MAUI). Chciałbym dalej się rozwijać zawodowo w którymś z tych środowisk, aczkolwiek jestem również otwarty na ciekawe oferty z zakresu testowania i zapewniania jakości.
        </p>
        <p>
            W czasie wolnym zdobyłem doświadczenie w pisaniu aplikacji full-stackowych i wieloplatformowych, a do tego brałem udział w projekcie AirQ w grupie prowadzonej przez Pana Profesora Cezarego Orłowskiego, w którym to moja rola była ściśle związana z zaprojektowaniem rozwiązania IoT korzystającego z czujników jakości powietrza,
            brokerów wiadomości MQTT (Kafka), klienta do Kafki w Node.js, oraz API w .NET 6 z bazą danych jako kod, dającego użytkownikom możliość założenia konta, logowania się i autoryzacji,
            przypisania swoich urządzeń pomiarowych do konta oraz odczytywania pomiarów przez nie przesyłanych do naszego systemu. Rozwiązanie bazowało na obrazach dockerowych budowanych za pomocą GitLab i utrzymywanych na czas developmentu w docker-compose, aby finalnie trafiły do Docker Swarma.
        </p>
        <h2>
            W jakich technologiach dobrze się czuję?
        </h2>
        <div>
            <ul>
                <li>
                    C# - Selenium, .Net Framework 4.8, .Net Core 6+ - MVC, .NET MAUI - MVVM
                </li>
                <li>
                    React.js
                </li>
                <li>
                    Windows/Linux
                </li>
            </ul>
        </div>
        <h2>
            Mój styl programowania
        </h2>
        <div>
            Mój preferowany styl programowania najłatwiej opisać korzystając z haseł:
            <p>
                SOLID (Single Responsibility Principle, Open Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, Dependency Inversion Principle)
            </p>
            <p>
                DRY (Don't Repeat Yourself)
            </p>
            <p>
                KISS (Keep It Simple, Stupid!)
            </p>
            <p>
                Guarding Clauses
            </p>
            <p>
                IoC (Inversion of Control)
            </p>
            <p>
                In code Documentation
            </p>
        </div>
        <h2>
            Z jakimi technologiami miałem styczność?
        </h2>
        <div>
            <ul>
                <li>
                    C# - Visual Studio, MVC/minimal API, EF Core, Onion, Vertical slice, Repository pattern, MAUI MVVM, Selenium, NUnit, Console App, Linq, OOP.
                </li>
                <li>
                    Strony Internetowe - HTML, CSS (SCSS) , JavaScript, TypeScript, ES6, Web Sockets, JWT, RWD, React.js, .NET Core, Node.js, create-react-app, Vite.
                </li>
                <li>
                    Git, GitLab, GitHub, Code Review.
                </li>
                <li>
                    Docker, docker-compose, dockerfile, yaml
                </li>
                <li>
                    Środowisko Linux - Bash, Shell, Cron, Nginx, Apache, FTP, SSH, RDP, fail2ban, [...]
                </li>
                <li>
                    Maszyny Wirtualne / Chmura - w tym: VirtualBox, AzureVM, Google Compute Engine, AWS EC2.
                </li>
                <li>
                    IoT - Raspberry Pi + protokół MQTT.
                </li>
                <li>
                    AD - Windows server 2012r2, Linux CentOS Samba.
                </li>
                <li>
                    C++ - Podstawy, proste projekty z Arduino.
                </li>
                <li>
                    Python - proste skrypty, Pycharm.
                </li>
                <li>
                    Bazy danych - SQL, MySql, Diagramy ERD, MongoDB, ORM - Entity Framework + LINQ.
                </li>
                <li>
                    Unity Game Engine - podstawy.
                </li>
                <li>
                    R - Sztuczna Inteligencja - algorytmy genetyczne oraz rekurencyjne.
                </li>
            </ul>
        </div>
        <h2>
            Rekreacja:
        </h2>
        <div>

            <ul>
                <li>
                    Narciarstwo
                </li>
                <li>
                    Łyżwy
                </li>
                <li>
                    Podróże, zwiedzanie
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
            </ul>
        </div>
        <h2>
            Czas wolny:
        </h2>
        <div>
            <ul>
                <li>
                    Książki Fantasy
                </li>
                <li>
                    Gry komputerowe
                </li>
            </ul>
        </div>
    </>
}


export default AboutMePagePL