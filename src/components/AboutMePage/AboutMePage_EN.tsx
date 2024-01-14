
const AboutMePageEn = () => {
    return <>
        <h1>
            A bit of info about me
        </h1>
        <p >
            I'm a developer with a can-do and will-do attitute. I've got 2,5 years of experience as a Testing & QA - Test Automation engineer in Sii sp. z o.o.
            My daily responsibilities include creating Test Cases, test automation and fixing, Code Review, issuing and analysing product defects, automatic and manual tests execution; and maintaining off-site computing NUC (Windows and Linux) machines via RDP and SSH.<br />
            In my day-to-day work I'm using: C#, .NET Framework, .NET Core, Selenium, Visual Studio, GitHub, RDP, SSH, Windows, Linux, Bash and more.<br />
        </p>
        <p >
            My most recent big project in Sii required me to refactor our solution to get rid of some technical debt and ease the process of writing new tests.<br />
            For that purpose I've helped our team to move from .NET Framework 3.5 and .NET Core 3.0 to .NET Framework 4.8 and .NET 6.
            The refactor changes that I've been tasked to introduce personally consisted of moving our solution from one heavily based on static and abstract classes, and intrusive inheritance, to one based on Interfaces, Dependency Injection (DI), Inversion of Control (IoC) and composition.
        </p>
        <p>
            In my free time I'm constantly honing my skills within backend (.NET MVC), frontend (React.js) and multi-plaform soluitons (.NET MAUI MVVM). I'm seeking for opportunities to work within the mentioned technologies, although I'm also open to other interesting offers.
        </p>
        <p>
            I've also participated in an after-hours student project led by Prof. Cezary Orłowski, which was named AirQ, which required me to prepare an IoT solution using air quality sensors,
            MQTT message broker (Kafka), a client for the mentioned broker written in Node.js, an API (.NET 6) with Database as Code for clients to log into, get authorized and pair up with their sensors, allowing them to get the readings provided by their sensors to our solution.
            The whole project was based on docker images, instances of which were automatically built using GitLab. During the developing phase the images were tied together via docker-compose, but in the final version those were supposed to work with Docker Swarm.
        </p>
        <h2>
            What technologies do I feel best in?
        </h2>
        <div className="flexCentered">
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
            My programming style
        </h2>
        <p>
            My most preferred programming style is easiest described by using those key phrases:
        </p>
        <div className="flexCentered">
            <ul>
                <li>
                    SOLID (Single Responsibility Principle, Open Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, Dependency Inversion Principle)
                </li>
                <li>
                    DRY (Don't Repeat Yourself)
                </li>
                <li>
                    KISS (Keep It Simple, Stupid!)
                </li>
                <li>
                    Guarding Clauses
                </li>
                <li>
                    IoC (Inversion of Control)
                </li>
                <li>
                    In code Documentation
                </li>
            </ul>
        </div>
        <h2>
            What technologies did I come in contact with?
        </h2>
        <div className="flexCentered">
            <ul>
                <li>
                    C# - Visual Studio, MVC/minimal API, EF Core, Onion, Vertical slice, Repository pattern, MAUI MVVM, Selenium, NUnit, Console App, Linq, OOP, HTTP, gRPC.
                </li>
                <li>
                    Websites (Full Stack) - HTML, CSS (SCSS) , JavaScript, TypeScript, ES6, Web Sockets, JWT, RWD, React.js, .NET Core, Node.js, create-react-app, Vite.
                </li>
                <li>
                    Git, GitLab, GitHub, Code Review.
                </li>
                <li>
                    Docker, docker-compose, dockerfile, yaml
                </li>
                <li>
                    Linux environment - Bash, Shell, Cron, Nginx, Apache, FTP, SSH, RDP, scp, rsync, fail2ban, [...]
                </li>
                <li>
                    VMs / Cloud - including, but not limited to: VirtualBox, AzureVM, Google Compute Engine, AWS EC2.
                </li>
                <li>
                    IoT - Arduino, DHT11, DHT22, Raspberry Pi + MQTT protocol (RabbitMQ, Kafka).
                </li>
                <li>
                    AD - Windows server 2012r2, Linux CentOS Samba.
                </li>
                <li>
                    C++ - basics, simple projects using Arduino.
                </li>
                <li>
                    Python - simple scripts, Pycharm.
                </li>
                <li>
                    DataBases - SQL, MySql, ERD diagrams, MongoDB, ORM - Entity Framework + LINQ.
                </li>
                <li>
                    Unity Game Engine - basics.
                </li>
                <li>
                    R - AI, ML - genetic and recurrence algorithms.
                </li>
            </ul>
        </div>
        <h2>
            Recreation:
        </h2>
        <div className="flexCentered">
            <ul>
                <li>
                    Skiing
                </li>
                <li>
                    Ice scating
                </li>
                <li>
                    Travelling and sightseeing
                </li>
                <li>
                    Swimming
                </li>
                <li>
                    Basketball
                </li>
                <li>
                    Roller skating
                </li>
            </ul>
        </div>
        <h2>
            In free time:
        </h2>
        <div className="flexCentered">
            <ul>
                <li>
                    Fantasy Books
                </li>
                <li>
                    Computer Games
                </li>
            </ul>
        </div>
    </>
}

export default AboutMePageEn