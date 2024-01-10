import React from "react";
import './HomePage.css'
import { useOutletContext } from "react-router-dom";

type expectedContext = {
    english: boolean,
    setEnglish: React.Dispatch<React.SetStateAction<boolean>>,
    currentModeBlack: boolean,
    setCurrentModeBlack: React.Dispatch<React.SetStateAction<boolean>>
}

const HomePage = () => {

    const context: expectedContext = useOutletContext()

    return (
        context.english
            ?
            <div className="homeBody">
                <h1>Welcome to my Website!</h1>
                <p>
                    I'm thrilled You're visiting. This Website contains a few neat motives, which definetley are worth exploring before leaving!
                </p>
                <p>
                    If the currently chosen device colors palette ({context.currentModeBlack ? 'Dark Mode' : 'Light Mode'}) doesn't fit Your liking and/or You'd like to check how the other colors scheme looks like here, feel free to change the current settings in the Options tab.
                </p>
                <p>
                    The projects tab also contains my small, interactive demo versions of my few non-commercial applications. I believe checking them out is totally worhwile ;)
                </p>
                <p>
                    I encourage You to check out all of the available info about me here, especially the portfolio section. If, by any chance, the info presented here proves intriguing, feel free to contact me through one of the provided methods under the Contact tab.
                </p>
                <p>
                    I'm a self-employed developer working preferably via long-term B2B contracts, although I'm also open for shorter contracts and/or smaller projects that I can provide a VAT invoice for.
                </p>
                <p>
                    Best regards,
                </p>
                <p>
                    Maciej
                </p>
            </div>
            : <div className="homeBody">
                <h1>Witam na mojej stronie!</h1>
                <p>
                    Bardzo mi miło, że mnie odwiedzasz. Ta strona posiada parę fajnych motywów, które zdecydowanie polecam przeklikać zanim uciekniesz!
                </p>
                <p>
                    Jeśli obecnie wybrany przez Ciebie tryb wyświetlania treści w urządzeniu (jasny bądź ciemny) Ci nie odpowiada i/lub chcesz spradzić, jak strona wygląda w innym trybie, to możesz śmiało zmienić ustawienia wyświetlania w zakładce Ustawienia.
                </p>
                <p>
                    Zakładka Projekty zawiera w sobie również mniejsze, interaktywne wersje demo napisanych dotąd przeze mnie prostych aplikacji niekomercyjnych. Myślę, że warto sprawdzić ich działanie ;)
                </p>
                <p>
                    Zapraszam do zapoznania się ze wsystkimi dostępnymi tutaj informacjami o mnie, a zwłaszcza z moim portfolio. Jeśli treść tej strony okaże się wystarczająco intrygująca, to zapraszam również do kontaktu poprzez podane pod odpowiednim odnośnikiem informacje.
                </p>
                <p>
                    Prowadzę działalność JDG, w związku z czym poza stałą współpracą jestem również otwarty na pojedyncze zlecenia, za które mogę wystawić Fakturę VAT.
                </p>
                <p>
                    Pozdrawiam serdecznie i życzę miłego dnia!
                </p>
                <p>
                    Maciej
                </p>
            </div>
    )
}

export default HomePage