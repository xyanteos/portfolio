import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import HomePage from "../HomePage/HomePage";
import AboutMePage from "../AboutMePage/AboutMePage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import ContactPage from "../ContactPage/ContactPage";
import App from "../../App.tsx";
import OptionsPage from "../OptionsPage/OptionsPage";
import ReactDOM from "react-dom/client";

// type Options = {
//     english: boolean,
//     setEnglish:  React.Dispatch<React.SetStateAction<boolean>>
// }

export const router = createBrowserRouter([
    {
        path: '/portfolio/',
        element: <App />,
        children: [
            {
                path: '/portfolio/',
                element: <HomePage />
            },
            {
                path: '/portfolio/about',
                element: <AboutMePage />
            },
            {
                path: '/portfolio/projects',
                element: <PortfolioPage />
            },
            {
                path: '/portfolio/contact',
                element: <ContactPage />
            },
            {
                path: '/portfolio/options',
                element: <OptionsPage />,
            }
        ]
    },
])

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//     <React.StrictMode>
//         <RouterProvider router={router}/>
//     </React.StrictMode>
// );