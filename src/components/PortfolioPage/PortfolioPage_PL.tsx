import { useState } from 'react'
import { PortfolioImages } from '../Global/Data/Images/ProjectImages'
import ImagesRenderer from '../ImagesRenderer'
import YoutubeDemoRe from './Demos/DemoYoutubeReimplementation'
import NasaReimplementation from './Demos/NasaReimplementation'


// type imageViewingType = {
//     projectName : string,
//     images: {name: string, path: string, alt: string}[]
// }

const PortfolioPagePl = (): JSX.Element => {
    const [nasaDemoActive, setNasaDemoActive] = useState(false);
    const [youtubeApiActive, setYoutubeApiActive] = useState(false);


    const ImagesShoppingList = PortfolioImages.find(x => x.projectName.includes('ShoppingListWeb'))!.images
    const ImagesShoppingListMaui = PortfolioImages.find(x => x.projectName.includes('ShoppingListMaui'))!.images
    const ImagesShoppingListBackend = PortfolioImages.find(x => x.projectName.includes('ShoppingListBackend'))!.images
    const ImagesCurrentPortfolio = PortfolioImages.find(x => x.projectName.includes('CurrentPortfolio'))!.images
    const ImagesPreviousPortfolio = PortfolioImages.find(x => x.projectName.includes('PreviousPortfolio'))!.images
    const ImagesAirQ = PortfolioImages.find(x => x.projectName.includes('AirQ'))!.images
    const ImagesNASA = PortfolioImages.find(x => x.projectName.includes('NASA'))!.images
    const ImagesPostsProject = PortfolioImages.find(x => x.projectName.includes('PostsProject'))!.images
    const ImagesYouTubeApi = PortfolioImages.find(x => x.projectName.includes('YouTubeApi'))!.images



    return (
        <>
            <h1 className="centered">Przykładowe projekty</h1>

            <div className='project'>
                <h2 className="centered">
                    Lista zakupów (LetsBuy.it)
                </h2>
                <p>
                    Projekt stworzony z prywatnej potrzeby posiadania aplikacji do tworzenia listy zakupów live. Z funkcjonalności w nim zawartych korzystamy z narzeczoną na porządku dziennym.<br />
                    Wszystkie zmiany dokonane w pokojach są od razu widoczne u innych użytkowników aplikacji, w związku z czym mogę aktualizować listę zakupów, gdy drugi użytkownik jest już w sklepie,
                    a lista rzeczy do kupienia zamiast się zmniejszać będzie coraz dłuższa ;).
                </p>
                <p>
                    Aplikacja umożliwia:
                </p>
                <ul>
                    <li>
                        Stworzenie nowego pokoju, jego edycję i usunięcie
                    </li>
                    <li>
                        Wyszukanie pokoju po nazwie,
                    </li>
                    <li>
                        Ustawienie prywatności pokoju (odbiera możliwość odnalezienia go po nazwie),
                    </li>
                    <li>
                        Wejście do pokoju po podanym linku (React Router),
                    </li>
                    <li>
                        Dodanie, edycję i usunięcie przedmiotu z listy zakupów oraz koszyka,
                    </li>
                    <li>
                        Przerzucenie produktu do i z koszyka celem śledzenia progressu zakupów (Live za pomocą Web Socketów - w planach poprawa eventów),
                    </li>
                    <li>
                        Usunięcie wszystkich przedmiotów z koszyka (nie z listy),
                    </li>
                    <li>
                        W planach - zabezpieczenie pokoju hasłem, wyszukiwanie wszystkich pokojów publicznych, poprawa działania WS (danych i ustawień Keep Alive).
                    </li>
                    <li>
                        Pomysł na rozwój - dopasowywanie nazw przedmiotów z listy do bazy proponowanych produktów, scraping cen produktów z różnych sieci sklepowych i wycena listy zakupów dla każdego z nich.
                    </li>
                </ul>
                <h3 className='centered spacious'>
                    Wersja Front-endowa REACT
                </h3>
                <div className="imagesContainer spacious">
                    <ImagesRenderer imagesToRender={ImagesShoppingList} />
                </div>
                <div className="centered spacious">
                    <button className='button' onClick={() => window.open("https://xyanteos.github.io/shopping-list/")}>
                        Sprawdź na stronie!
                    </button>
                </div>
                <p>
                    Frontend został stworzony za pomocą: React.js, functional components, JS ES6, Router. Powstał głównie po to, aby nie trzeba było posiadać mobilnej aplikacji celem korzystania z udostępnionej funkcjonalności.
                    Oprawa wizualna (CSS) bazuje głównie na Semantic UI. Strona posiada pełną funkcjonalność udostępnioną przez obecny stan aplikacji. Zapraszam do zapoznania się z nią i przetestowania.
                    Wszystkie informacje udostępnione przez użytkowników na stronie traktowane są jako dane publiczne, dlatego proszę nie wrzucać informacji nieprzeznaczonych dla publicznych oczu.
                    Kto wie, może zaczniesz z niej korzystać na codzień?
                </p>
                <h3 className='centered spacious'>
                    Wersja wieloplatformowa .Net MAUI
                </h3>
                <p>
                    Aplikacja wieloplatformowa (na zdjęciach używana na Androidzie) napisana w .NET MAUI.
                    Szybsza forma korzystania z backendu listy zakupów i wygodniejsza od przeglądarki przy częstym korzystaniu z listy zakupów.
                    Komunikuje się dokładnie z tym samym API, korzysta z tego samego połącznia SignalR celem pobierania na żywo zmian wewnątrz danego pokoju.
                </p>
                <div className='imagesContainer spacious'>
                    <ImagesRenderer imagesToRender={ImagesShoppingListMaui} />
                </div>
                <p>
                    Aplikacja z racji nie bycia przeglądarką bazuje na wyszukiwaniu pokojów poprzez ich nazwę. <br />
                    Poza typowym dla tej aplikacji zachowaniem i spodziewaną funkcjonalnością aplikacja ta będzie finalnie posiadała:
                </p>
                <ul>
                    <li>
                        Wyszukanie pokoju po linku,
                    </li>
                    <li>
                        Autozapis ostatniej odwiedzonej ścieżki (ostatniego pokoju) i automatycznie rozpoczynała nową sesję w miejscu zakończenia poprzedniej,
                    </li>
                    <li>
                        Możliwość stworzenia pokoju lokalnego offline (korzystając z Dapper + SQLite),
                    </li>
                    <li>
                        Możliwość nadpisywania zawartości pokoju offline zawartością z pokoju online - swoiste skopiowanie pokoju na urządezenie (zapis pokoju z API w bazie lokalnej SQLite),
                    </li>
                    <li>
                        Możliwość dodania do pokoju online obiektów w nim niedostępnych z pokoju offline
                    </li>
                    <li>
                        Nadpisanie pokoju online stanem z pokoju offline
                    </li>
                </ul>
                <h3 className='centered spacious'>
                    Backend MVC
                </h3>
                <p>
                    Prosty backend MVC w .Net 7 łączący ze sobą aplikacje wyświetlające dane oraz bazę danych NoSQL MongoDb Atlas.
                    Zahostowany jest jako obraz dockerowy na Heroku, które podpięte jest do GH Actions, aby pobierać z GH obraz i go budować po każdej zmianie (swoiste CI-CD).
                </p>
                <div className='imagesContainer spacious'>
                    <ImagesRenderer imagesToRender={ImagesShoppingListBackend}/>
                </div>
            </div>

            <div className='project spacious'>
                <h2 className='centered'>
                    Ta strona ;)
                </h2>
                <div className='imageContainer centerContent'>
                    <ImagesRenderer imagesToRender={ImagesCurrentPortfolio} />
                </div>
                <p>
                    Ta strona została stworzona za pomocą:
                </p>
                <ul>
                    <li>
                        React.js i Vite (w przeciwieństwie do poprzednich projektów, gdzie jest użyte create-react-app),
                    </li>
                    <li>
                        TypeScript z ES2020 (wcześniej JS ES6),
                    </li>
                    <li>
                        komponenty funkcyjne,
                    </li>
                    <li>
                        React Router (Browser Router) - z endpointem Outlet i jego contextem,
                    </li>
                    <li>
                        CSS,
                    </li>
                    <li>
                        useState i useEffect.
                    </li>
                </ul>
                <p>
                    Strona ta posiada parę funkcjonalności dostępności, tj. Responsive Web Design, Localizację (wspiera język Angielski i Polski), oraz wsparcie dla jasnego i ciemnego trybu wyświetlania.<br />
                    Zapraszam do sprawdzenia wszelkich funkcjonalności dostępnych na stronie samemu.
                </p>
                <h3 className='centered spacious'>
                    Protoplasta strony
                </h3>
                <p className='spacious'>
                    Poprzednia wersja tej strony była trochę przeterminowana technologicznie i wyglądowo względem dzisejszych standardów. <br />
                    Stąd wzieła się potrzeba oraz jej realizacja w postaci nowego projektu. <br />
                </p>
                <div className='imageContainer spacious centerContent'>
                    <ImagesRenderer imagesToRender={ImagesPreviousPortfolio} />
                </div>
                <p>
                    Poprzednia strona wykorzystywała tehcnologie:
                </p>
                <ul>
                    <li>
                        React.js create-react-app
                    </li>
                    <li>
                        JS z ES6
                    </li>
                    <li>
                        React mix komponentów klasowych i funkcyjnych.
                    </li>
                    <li>
                        React Router (Hash Router),
                    </li>
                    <li>
                        CSS,
                    </li>
                    <li>
                        Stan komponentów klasowych oraz różne etapy ich montowania.
                    </li>
                </ul>
            </div>

            <div className='project spacious'>
                <h2 className="centered">
                    Backend oraz mikroserwis dla danych z czujników pomiarowych
                </h2>
                <div className="imagesContainer">
                    <ImagesRenderer imagesToRender={ImagesAirQ} />
                </div>
                <p>
                    Projekt całościowy (AirQ) polega na stworzeniu zdockeryzowanego rozwiązania dla potrzeb pobierania informacji o jakości powietrza z czujników przez nas przygotowanych,
                    zapewnieniu odpowiedniego flow i formatu danych, kolejkowaniu ich w brokerze wiadomości, weryfikacji przez API i zapisywaniu do bazy danych w placówce WSB.
                    Możliwe jest również stworzenie konta użytkownika i przypisania sobie danego czujnika po jego ID.
                    <br />
                    Do moich obowiązków w projekcie należało:
                </p>
                <ul>
                    <li>
                        Przygotowanie klienta (Node.js) dla brokera wiadomości Kafka przekazującego pomiary poprzez API do bazy danych.
                    </li>
                    <li>
                        Przygotowanie API (.NET 7) odpowiedzialnego za weryfikację modelu danych pomiarowych, zakładanie kont, weryfikację i autoryzację użytkowników,
                        parowanie czujnika do użytkownika, oraz zapisywanie wszystkich poprawnych danych wejściowych do bazy danych MySql.
                    </li>
                </ul>
                <p>
                    Projekt API w .NET 7 stworzony został z użyciem wzorców projektowych: minimal API, Onion, Repository, (docelowo) CQRS.
                    Rozwiązadnie bazuje głównie na działaniu protokołu HTTP, chociaż klient kafki miał finalnie działać na gRPC.
                    Na prośbę klienta możliwe jest podglądanie danych zapisanych w bazie MySql.
                    Dla zapewnienia skalowalności oraz wydajności rozwiązania zastosowany miał być wzorzec CQRS.
                    Osobny serwis ma być odpowiedzialny za podsyłanie najnowszych pomiarów z czujników, w momencie ich zatwierdzenia przez API, do subskrybujących klientów.
                    <br />
                    W przypadku zainteresowania - perojekt mogę omówić dokładniej w cztery oczy.
                </p>
            </div>

            <div className="project">
                <h2 className="centered">
                    Projekt chat CRUD + WS w stacku MERN
                </h2>
                <div className="imagesContainer">
                    <ImagesRenderer imagesToRender={ImagesPostsProject} />
                </div>
                <div className="centered spacious">
                    <button className="button" onClick={() => window.location.href = "https://xyanteos.github.io/authenticatedPosts/"}>Sprawdź na stronie!</button>
                </div>
                <p>
                    Projekt nie zachowuje właściwości RWD (Responsive Web Design), a więc nie jest przystosowany do widoku na urządzeniach mobilnych!
                    <br />
                    Projekt mojego autorstwa wykorzystujący pełną funkcjonalność CRUD (Create, Read, Update, Delete) w postaci serwisu do przesyłania postów na wzór Twittera lub facebook-owego walla.
                    Strona jest napisana w stylu single-page application (React.js). W projekcie zawarte są funkcjonalności: rejestracja użytkowników, autoryzacja za pomocą JWT,
                    edycja danych użytkownika, usuwanie konta oraz dodawanie, edycja i usuwanie wiadomości, pobieranie zmian w wiadomościach.
                    Funkcjonalnością, której na razie brakuje jest aktualizacja w czasie rzeczywistym za pomocą Web Socketów,
                    co w tej chwili obszedłem odświeżając stronę przy każdej zmianie. <br />
                    <b>Jeśli zdecydujesz się ją przetestować, to lepiej nie korzystaj ze swoich prawdziwych danych!</b>
                </p>
            </div>

            <div className="project">
                <h2 className="centered">
                    Projekt Wykorzystania NASA API
                </h2>
                <br />
                <div className="imagesContainer">
                    <ImagesRenderer imagesToRender={ImagesNASA}/>
                </div>
                <div className="centered spacious">
                    <button className="button" onClick={() => setNasaDemoActive(prev => !prev)} >
                        {nasaDemoActive ? 'Zwiń' : 'Sprawdź demo!'}
                    </button>
                </div>
                <p>
                    Jest to mój autorski projekt strony dającej wgląd do aktualnych newsów, oraz do bazy danych NASA. Na początku podczas ładowania komponentu
                    pobierana jest automatycznie informacja odnośnie zdjęcia dnia. Jest ono wyświetlane wraz z tytułem artykułu oraz krótkim opisem.
                    Ponadto możemy wyszukać informacje odnośnie np. danej planety czy rover-a, o których chcemy się czegoś dowiedzieć. Wtedy wykorzystywane jest inne
                    API (również od NASA) pozwalające na wyszukanie infromacji o 100 artykułach/zdjęciach powiązanych z naszą frazą. (Wyszukiwarka działa jedynie w języku
                    angielskim).
                </p>
                <br />
                {nasaDemoActive ? <NasaReimplementation /> : <></>}
            </div>

            <div className="project">
                <h2 className='centered'>
                    Projekt Wykorzystania Youtube API
                </h2>
                <br />
                <div className="imagesContainer">
                    <ImagesRenderer imagesToRender={ImagesYouTubeApi}/>
                </div>
                <div className="centered spacious">
                    <button className="button" onClick={() => setYoutubeApiActive(prev => !prev)}>
                        {youtubeApiActive ? 'Zwiń' : 'Sprawdź demo!'}
                    </button>
                </div>
                <p>
                    Projekt ten stworzyliśmy na zajęciach. Działa bardzo podobnie jak zwykła wyszukiwarka Youtube, z małą różnicą wizualną.
                    Aplikacja wysyła zapytanie do Youtube Data API, po czym wyświetla filmy, ich tytuły i 5 najbardziej trafnych filmów w stosunku do
                    wyszukiwanej frazy.
                </p>
                <br />
                {youtubeApiActive ? <YoutubeDemoRe /> : <></>}
            </div>
            <div className="centered spacious">
                <h2 className="spacious">
                    Więcej na
                </h2>
                <a href="https://www.github.com/xyanteos"><img src="https://github.com/fluidicon.png" alt="Github" id="git" /><br /> <span className="spacious"> GitHub / xyanteos </span></a>
            </div>
        </>
    )
}

export default PortfolioPagePl