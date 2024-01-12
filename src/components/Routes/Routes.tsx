import { createBrowserRouter, useOutletContext } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AboutMePage from "../AboutMePage/AboutMePage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import ContactPage from "../ContactPage/ContactPage";
import App from "../../App";
import OptionsPage from "../OptionsPage/OptionsPage";

type Options = {
    english: boolean,
    setEnglish:  React.Dispatch<React.SetStateAction<boolean>>
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'about',
                element: <AboutMePage />
            },
            {
                path: 'projects',
                element: <PortfolioPage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: 'options',
                element: <OptionsPage />,
            }
        ]
    },
])
