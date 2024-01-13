import logowanie from '/Pictures/postsLogin.png?url'
import buyItHome from "/Pictures/BuyMain.png?url"
import buyItRoom from '/Pictures/BuyRoom.png?url'
import dockerized from '/Pictures/docker-compose.png?url'
import codeSnippet from '/Pictures/codeSnippet.png?url'
import posty from '/Pictures/postsListing.png?url'
import youtube1 from '/Pictures/YT_API_ss.png?url'
import youtube2 from '/Pictures/YT_API_ss2.png?url'
import nasa1 from '/Pictures/NASA_API_ss.png?url'
import nasa2 from '/Pictures/NASA_API_ss2.png?url'
import MauiHome from '/Pictures/MauiHome.png?url'
import MauiRoom from '/Pictures/MauiRoom.png?url'
import MauiRoomOptions from '/Pictures/MauiRoomOptions.png?url'
import ShoppingListRoomController from '/Pictures/ShoppingListRoomController.png?url'
import ShoppingListDockerized from '/Pictures/ShoppingListDockerized.png?url'
import HomePage from '/Pictures/HomePage.png?url'
import AboutMePage from '/Pictures/AboutMePage.png?url'
import PreviousVersionProjects from '/Pictures/PreviousVersionProjects.png?url'
import PreviousVersionAbout from '/Pictures/PreviousVersionAbout.png?url'
import { useState } from 'react'
import YoutubeDemoRe from './Demos/DemoYoutubeReimplementation'
import NasaReimplementation from './Demos/NasaReimplementation'

const PortfolioPageEn = (): JSX.Element => {
    const [nasaDemoActive, setNasaDemoActive] = useState(false);
    const [youtubeApiActive, setYoutubeApiActive] = useState(false);

    return (
        <>
            <h1 className="centered">Example projects</h1>

            <div className='project'>
                <h2 className="centered">
                    Shopping list
                </h2>
                <p>
                    The project was inspired by my personal need for a live shopping list application. Alongside my fiancee we're using it daily for our needs. <br />
                    Every change introduced to a room is instantly provided to all subscribers at once, that way every user can update the list whilst others are using it.
                    The list of items can be ubdated even when the other user is already in a shop doing the shopping which means the list grows instead of shrinking for the buyer ;).<br />
                    You can send family members on shopping and update the list on the fly!
                </p>
                <p>
                    The application allows:
                </p>
                <ul>
                    <li>
                        Creating a new room, editing it and deleting
                    </li>
                    <li>
                        Searching for a room based on its name
                    </li>
                    <li>
                        Setting the room to private (takes away the searching by name possibility)
                    </li>
                    <li>
                        Entering the given room based on its browser link (via React Router)
                    </li>
                    <li>
                        Adding, editing and removing the items from the shopping list and shopping cart
                    </li>
                    <li>
                        Mogin a given item to and from the cart back to the list (updated Live thanks to WebSockets - events fix is on the way)
                    </li>
                    <li>
                        Removing all of the items from the shopping cart (not from the shopping list)
                    </li>
                    <li>
                        TBD - securing the room with a password, searching for all public rooms at once, WS events fix (the data provided by them and Keep Alive feature)
                    </li>
                    <li>
                        Ideas of features to be implemented - matching the provided items names with suggested produce, scraping the produce from different shops and evaluating the shopping list value in each of them
                    </li>
                </ul>
                <h3 className='centered spacious'>
                    The REACT Front-end
                </h3>
                <div className="imagesContainer spacious">
                    <img src={buyItHome} alt="LetsBuyIt_HomePage" />
                    <img src={buyItRoom} alt="LetsBuyIt_RoomView" />
                </div>
                <div className="centered spacious">
                    <button className='button' onClick={() => window.open("https://xyanteos.github.io/shopping-list/")}>
                        Check on website!
                    </button>
                </div>
                <p>
                    The Frontend was created using: React.js, functional components, JS ES 6, Router.
                    It was created mainly for the purpose of allowing the app to be used without pre-installing any apps.
                    The visuals (CSS styles) were heavily based on the SemanticUi package.
                    Website provides the whole functionality currently available. I highly encourage You to checking it Yourself.
                    Please keep in mind that all of the provided information on this website will be considered as public, hence no info intended to be private should be provided. <br />
                    Who knows, maybe You'll like it well enough to also start using it daily?
                </p>
                <h3 className='centered spacious'>
                    The Multi Platformed application version using .NET MAUI
                </h3>
                <p>
                    A multi-platformed application (Shown on Android device on the screenshots) written in .NET MAUI.
                    It's an arguably faster version for the full application experience to use the Shopping List backend, which might prove more to be more confortable than the web form for consistant usage.
                    It communicates with the exact same API and uses the same SignalR communication solution for Live updates inside a given room.
                </p>
                <div className='imagesContainer spacious'>
                    <img src={MauiHome} alt="ShoppingListMauiPic" />
                    <img src={MauiRoom} alt="ShoppingListMauiPic2" />
                    <img src={MauiRoomOptions} alt="ShoppingListMauiPic3" />
                </div>
                <p>
                    Since the application is not web-based, it focuses more on the room searching by name feature. <br />
                    Outside the typically expected behaviour, the app will finally provide features such as:
                </p>
                <ul>
                    <li>
                        Searching for the room via provided link,
                    </li>
                    <li>
                        Auto-saving feature for the last visited path and automatical recovery of it upon the next app startup,
                    </li>
                    <li>
                        An ability to create a local, offline room (by using Dapper + SQLite),
                    </li>
                    <li>
                        The ability to override a part of the online room by using the differences in offline room - sort of copying the offline diffs from device
                    </li>
                    <li>
                        The ability to ovveride the offline room with the online room entries (Saving the API version on a device).
                    </li>
                    <li>
                        The ability to override the online room by using the offline room state.
                    </li>
                </ul>
                <h3 className='centered spacious'>
                    Backend MVC
                </h3>
                <p>
                    A simple MVC backend in .Net 7 tying together the web and local apps with the NoSQL MongoDb Atlas instance, which is hosted as a docker image on Heroku and automatically downloaded via GH Actions after each PR (a simple CI CD pipeline).
                </p>
                <div className='imagesContainer spacious'>
                    <img src={ShoppingListRoomController} alt='ShoppingListRoomController' />
                    <img src={ShoppingListDockerized} alt='DockerfileAndSolution' />
                </div>
            </div>

            <div className='project spacious'>
                <h2 className='centered'>
                    This website ;)
                </h2>
                <div className='imageContainer spacious centerContent'>
                    <img src={HomePage} alt='HomePage.png ' />
                    <img src={AboutMePage} alt='AboutMePage.png ' />
                </div>
                <p>
                    This website was created by using:
                </p>
                <ul>
                    <li>
                        React.js Vite implementation,
                    </li>
                    <li>
                        TypeScript with ES6,
                    </li>
                    <li>
                        React functional components,
                    </li>
                    <li>
                        React Router (Browser Router) - with Outlet and its context,
                    </li>
                    <li>
                        CSS,
                    </li>
                    <li>
                        useState and useEffect.
                    </li>
                </ul>
                <p>
                    The website provides a few availability features like Responsive Web Design, Localization (English and Polish languages support), supporting Color palette mode (Dark Mode and Light Mode).<br />
                    I highly encourage checking all of the provided website aspects for Yourself.
                </p>
                <h3 className='centered spacious'>
                    This website's predescessor
                </h3>
                <p className='spacious'>
                    The previous version of this website was quite outdated both in terms of styling and its contents as of today's standards. <br />
                    This is why a new version was required and hence delivered. <br />
                </p>
                <div className='imageContainer spacious centerContent'>
                    <img src={PreviousVersionAbout} alt='PreviousVersionAbout.png'/>
                    <img src={PreviousVersionProjects} alt='PreviousVersionProjects.png'/>
                </div>
                <p>
                    Previous website used technologies:
                </p>
                <ul>
                    <li>
                        React.js create-react-app
                    </li>
                    <li>
                        JS with ES6
                    </li>
                    <li>
                        React class based components and functional components mixture.
                    </li>
                    <li>
                        React Router (Hash Router),
                    </li>
                    <li>
                        CSS,
                    </li>
                    <li>
                        Class components state and mounting phases.
                    </li>
                </ul>
            </div>

            <div className='project'>
                <h2 className="centered">
                    Backend and microservice for measurement sensors
                </h2>
                <div className="imagesContainer">
                    <img src={dockerized} alt='docker-compose' />
                    <img src={codeSnippet} alt="code-snippet" />
                </div>
                <p>
                    The project I was solely responsible for designing and implementing (AirQ) premise was to create a dockerized solution designed to gather air quality information provided to us by our clients sensors, ensuring a proper data flow
                    for the gathered data, stacking messages in a message broker queue, consuming and re-verifying the data via an API and saving them in a DataBase placed in WSB university.
                    The users can also create an account, tie the sensor to their account and get its readings through our system.
                    <br />
                    My responsibilities in the project consisted of:
                </p>
                <ul>
                    <li>
                        Preparing a client (Node.js) for a Kafka message broker passing the measurements through the API verification to our DataBase.
                    </li>
                    <li>
                        Preparing an API (.NET 7) responsible for verifying the given measurements data, creating user accounts, verifying and authorizing users,
                        pairing the measurement device to a user, as well as saving all of the verified data to MySQL DataBase.
                    </li>
                </ul>
                <p>
                    The project of the API in .NET 7 was created using theese project patterns/technologies: .NET minimal API, Onion architecture, Repository pattern, KISS, and ultimately was supposed to implement CQRS pattern.
                    Solution as a whole is based on HTTP pattern, although the kafka client was supposed to be working with gRPC protocol in the end.
                    The client can view his sensors measurements history via our API. There also ought to be a live readings subscriber-provider service via SignalR.
                    <br />
                    Should You be interested enough to crave for more details, I can describe the project in-depth eye-to-eye.
                </p>
            </div>

            <div className="project">
                <h2 className="centered">Project with CRUD functionality in MERN stack</h2>
                <div className="imagesContainer">
                    <img src={logowanie} alt="Logowanie" className='text-focus-in-fast' />
                    <img src={posty} alt="Posty" className='text-focus-in-fast' />
                </div>
                <div className="centered spacious">
                    <button className="button" onClick={() => window.location.href = "https://xyanteos.github.io/authenticatedPosts/"}>Check on website!</button>
                </div>
                <p>
                    The project doesn't follow the RWD (Responsive Web Design), which means it's not suited for mobile devices!
                    <br />
                    This project is the first one of my chat-like implementations. It provides full CRUD (Create, Read, Update, Delete) functionality to send posts in Twitter/Facebook wall maner.
                    The wensite was written in a single-page fassion. It contains functionalities such as: registering users, authorizing them with JWT,
                    editing the users account info, removing an account and both editing and removing posts.
                    At the time of creating the solution, I didn't implement WebSockets for live updates, which I overcame by refreshing the page every time a post is created or updated.
                </p>
            </div>

            <div className="project">
                <h2 className="centered">
                    The NASA API implementation
                </h2>
                <br />
                <div className="imagesContainer">
                    <img src={nasa1} alt="nasAPI" />
                    <img src={nasa2} alt="nasAPI2" />
                </div>
                <div className="centered spacious">
                    <button className="button" onClick={() => setNasaDemoActive(prev => !prev)} >
                        {nasaDemoActive ? 'Hide Demo' : 'Check Demo!'}
                    </button>
                </div>
                <p>
                    This is my first personal foregin API implementation. It allows viewing the NASA news (picture of the day and more), which is being displayed with its short message.
                    The picture of the day is being thrown in the page initialization stages. Then, there's also the possiblity to get more specific
                    informations via the searchbar input. You can search for info about a given planet or rover. It provides the first 100 matches to the provided key words.
                    It uses a different API endpoint from the pic of the day previously mentioned. The search engine works only in english language.
                </p>
                <br />
                {/* <button className="ui button big" onClick={() => this.dodajPodstrone("NASA_API")}>Sprawdź demo!</button>
            <button className="ui button big" onClick={() => this.dodajPodstrone("")}>Zwiń</button> */}
                {nasaDemoActive ? <NasaReimplementation /> : <></>}
                {/* {this.state.podstrona === "NASA_API" ? <ZaladujStrone nazwaStrony={this.state.podstrona} /> : null} */}
            </div>

            <div className="project spacious">
                <h2 className='centered'>
                    The project using YouTube API
                </h2>
                <br />
                <div className="imagesContainer">
                    <img src={youtube1} alt="ap" />
                    <img src={youtube2} alt="screenshot" />
                </div>
                <div className="centered spacious">
                    <button className="button" onClick={() => setYoutubeApiActive(prev => !prev)}>
                        {youtubeApiActive ? 'Hide Demo' : 'Check Demo!'}
                    </button>
                </div>
                <p>
                    This is a project that was created back in the University class days. Works similarly as the typical YouTube search engine,
                    the only difference being the visuals and smaller searched videos count. It passes Your entry from the text field to the YouTube API and
                    spits out the first 5 results based on provided phrase.
                </p>
                <br />
                {/* <button className="ui button big" onClick={() => this.dodajPodstrone("YouTubeAPI")}>Sprawdź demo!</button>
            <button className="ui button big" onClick={() => this.dodajPodstrone("")}>Zwiń</button> */}
                {youtubeApiActive ? <YoutubeDemoRe /> : <></>}
                {/* {this.state.podstrona === "YouTubeAPI" ? <ZaladujStrone nazwaStrony={this.state.podstrona} /> : null} */}
            </div>
            <div className="centered spacious">
                <h2 className="spacious">
                    More on:
                </h2>
                <a href="https://www.github.com/xyanteos"><img src="https://github.com/fluidicon.png" alt="Github" id="git" /><br /> <span className="spacious"> GitHub / xyanteos </span></a>
            </div>
        </>
    )
}

export default PortfolioPageEn