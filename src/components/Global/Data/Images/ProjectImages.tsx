import buyItHome from "/Pictures/BuyMain.png?url"
import buyItRoom from '/Pictures/BuyRoom.png?url'
import dockerized from '/Pictures/docker-compose.png?url'
import codeSnippet from '/Pictures/codeSnippet.png?url'
import logowanie from '/Pictures/postsLogin.png?url'
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
import { ImageViewingType } from '../../Types/Data'

export const PortfolioImages: ImageViewingType[] = [
    {
        projectName: 'ShoppingListWeb',
        images: [
            {
                name: 'Home',
                path: buyItHome,
                alt: 'LetsBuyIt_HomePage'
            },
            {
                name: 'Room',
                path: buyItRoom,
                alt: 'LetsBuyIt_RoomView'
            }
        ]
    },
    {
        projectName: 'ShoppingListMaui',
        images: [
            {
                name: 'Room',
                path: MauiRoom,
                alt: 'MauiRoomPage'
            },
            {
                name: 'Home',
                path: MauiHome,
                alt: 'MauiHomePage'
            },
            {
                name: 'Room options',
                path: MauiRoomOptions,
                alt: 'MauiRoomOptionsPage'
            }
        ]
    },
    {
        projectName: 'ShoppingListBackend',
        images: [
            {
                name: 'Room controller',
                path: ShoppingListRoomController,
                alt: 'Shopping List Room Controller'
            },
            {
                name: 'Shopping List Dockerized',
                path: ShoppingListDockerized,
                alt: 'Dockerfile and Solution'
            }
        ]
    },
    {
        projectName: 'CurrentPortfolio',
        images: [
            {
                name: 'Home Page',
                path: HomePage,
                alt: 'HomePage'
            },
            {
                name: 'About Page',
                path: AboutMePage,
                alt: 'AboutPage'
            },
        ]
    },
    {
        projectName: 'PreviousPortfolio',
        images: [
            {
                name: 'About',
                path: PreviousVersionAbout,
                alt: 'PreviousVersionAbout.png'
            },
            {
                name: 'Projects',
                path: PreviousVersionProjects,
                alt: 'PreviousVersionProjects.png'
            },
        ]
    },
    {
        projectName: 'AirQ',
        images: [
            {
                name: 'docker-compose',
                path: dockerized,
                alt: 'docker-compose.png'
            },
            {
                name: 'CodeSnippet',
                path: codeSnippet,
                alt: 'code-snippet.png'
            },
        ]
    },
    {
        projectName: 'NASA',
        images: [
            {
                name: 'NasaAPIv1',
                path: nasa1,
                alt: 'NasaApiv1.png'
            },
            {
                name: 'Nasa APIv2',
                path: nasa2,
                alt: 'NasaApiv2.png'
            },
        ]
    },
    {
        projectName: 'PostsProject',
        images: [
            {
                name: 'LoggingIn',
                path: logowanie,
                alt: 'loggingIn.png'
            },
            {
                name: 'Posts',
                path: posty,
                alt: 'Posts.png'
            }
        ]
    },
    {
        projectName: 'YouTubeApi',
        images: [
            {
                name: 'YoutubeApiv1',
                path: youtube1,
                alt: 'YouTubeApiv1.png'
            },
            {
                name: 'YoutubeApiv2',
                path: youtube2,
                alt: 'YouTubeApiv2.png'
            },
        ]
    }
]
