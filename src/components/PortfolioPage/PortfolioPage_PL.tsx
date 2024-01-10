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
import { useState } from 'react'

const PortfolioPagePl = (): JSX.Element => {
    const [nasaDemoActive, setNasaDemoActive] = useState(false);
    const [youtubeApiActive, setYoutubeApiActive] = useState(false);

    return (
        <>
            <h1 className="centered">Przykładowe projekty</h1>
            <div className='project'>
                <h2 className="centered">
                    Backend i mikroserwis dla danych z czujników pomiarowych
                </h2>
                <div className="imagesContainer">
                    <img src={dockerized} alt='docker-compose' className='text-focus-in-fast' />
                    <img src={codeSnippet} alt="code-snippet" className='text-focus-in-fast' />
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
                        parowanie czujnika do użytkownika, oraz zapisywanie wszystkich poprawnych danych wejściowych do bazy danych MySql. W przyszłości będzie również eventual consistency z szybszą bazą danych.
                    </li>
                </ul>
                <p>
                    Projekt API w .NET 7 stworzony został z użyciem wzorców projektowych: minimal API, Onion, Repository, (docelowo) CQRS.
                    Rozwiązadnie bazuje głównie na działaniu protokołu HTTP.
                    Na prośbę klienta możliwe jest podglądanie danych zapisanych w bazie MySql.
                    Dla zapewnienia skalowalności oraz wydajności rozwiązania zastosowany miał być wzorzec CQRS.
                    Osobny serwis ma być odpowiedzialny za podsyłanie najnowszych pomiarów z czujników, w momencie ich zatwierdzenia przez API, do subskrybujących klientów.
                    <br />
                    W przypadku zainteresowania - perojekt mogę omówić dokładniej w cztery oczy.
                </p>
            </div>

            <div className='project'>
                <h2 className="centered">
                    Lista zakupów
                </h2>
                <div className="imagesContainer">
                    <img src={buyItHome} alt="LetsBuyIt_HomePage" className='text-focus-in-fast' />
                    <img src={buyItRoom} alt="LetsBuyIt_RoomView" className='text-focus-in-fast' />
                </div>
                <div className="centered spacious">
                    <button className='button' onClick={() => window.open("https://xyanteos.github.io/shopping-list/")}>
                        Sprawdź na stronie!
                    </button>
                </div>
                <p>
                    Projekt stworzony z potrzeby posiadania aplikacji ineternetowej do tworzenia listy zakupów bez konieczności pobierania jej na komórkę.
                    Backend stworzony został za pomocą .NET 6 minimal API, baza danych MongoDB (Atlas). Frontend został stworzony za pomocą React.js.
                </p>
                <p>
                    Aplikacja umożliwia:
                </p>
                <ul>
                    <li>
                        Stworzenie nowego pokoju,
                    </li>
                    <li>
                        Wyszukanie pokoju po nazwie,
                    </li>
                    <li>
                        Edytowanie nazwy pokoju,
                    </li>
                    <li>
                        Usunięcie pokoju,
                    </li>
                    <li>
                        Ustawienie prywatności pokoju (odbiera możliwość odnalezienia go po nazwie),
                    </li>
                    <li>
                        Wejście do pokoju po podanym linku (router),
                    </li>
                    <li>
                        Dodanie przedmiotu do listy zakupów,
                    </li>
                    <li>
                        Edycję nazwy (textu) danego przedmiotu z listy,
                    </li>
                    <li>
                        Przerzucenie produktu do i z koszyka celem śledzenia progressu zakupów (Live za pomocą Web Socketów - częściowo eventy do poprawy),
                    </li>
                    <li>
                        Usunięcie wszystkich przedmiotów z koszyka,
                    </li>
                    <li>
                        TBD - zabezpieczenie pokoju hasłem.
                    </li>
                </ul>
            </div>

            <div className="project">
                <h2 className="centered">
                    Projekt CRUD w stacku MERN
                </h2>
                <div className="imagesContainer">
                    <img src={logowanie} alt="Logowanie" className='text-focus-in-fast' />
                    <img src={posty} alt="Posty" className='text-focus-in-fast' />
                </div>
                <div className="centered spacious">
                    <button className="button" onClick={() => window.location.href = "https://xyanteos.github.io/authenticatedPosts/"}>Sprawdź na stronie!</button>
                </div>
                <p>
                    Projekt nie zachowuje właściwości RWD (Responsive Web Design), a więc nie jest przystosowany do widoku na urządzeniach mobilnych!
                    <br />
                    Projekt mojego autorstwa wykorzystujący pełną funkcjonalność CRUD (Create, Read, Update, Delete) w postaci serwisu do przesyłania postów na wzór Twittera lub facebook-owego walla.
                    Strona jest napisana w stylu single-page application. W projekcie zawarte są funkcjonalności: rejestracja użytkowników, autoryzacja za pomocą JWT,
                    edycja danych użytkownika, usuwanie konta oraz dodawanie, edycja i usuwanie postów.
                    Funkcjonalnością, której na razie brakuje jest aktualizacja w czasie rzeczywistym za pomocą Web Socketów,
                    co w tej chwili obszedłem odświeżając stronę przy każdej zmianie.
                </p>
            </div>
            <div className="project">
                <h1 className="centered">
                    Projekt Wykorzystania NASA API
                </h1>
                <br />
                <div className="imagesContainer">
                    <img src={nasa1} alt="nasAPI" />
                    <img src={nasa2} alt="nasAPI2" />
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
                {/* <button className="ui button big" onClick={() => this.dodajPodstrone("NASA_API")}>Sprawdź demo!</button>
            <button className="ui button big" onClick={() => this.dodajPodstrone("")}>Zwiń</button> */}
                {/* {nasaDemoActive ? <NasaAPI /> : <></>} */}
                {/* {this.state.podstrona === "NASA_API" ? <ZaladujStrone nazwaStrony={this.state.podstrona} /> : null} */}
            </div>

            <div className="project">
                <h2 className='centered'>
                    Projekt Wykorzystania Youtube API
                </h2>
                <br />
                <div className="imagesContainer">
                    <img src={youtube1} alt="ap" />
                    <img src={youtube2} alt="screenshot" />
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
                {/* <button className="ui button big" onClick={() => this.dodajPodstrone("YouTubeAPI")}>Sprawdź demo!</button>
            <button className="ui button big" onClick={() => this.dodajPodstrone("")}>Zwiń</button> */}
                {/* {youtubeApiActive ? <YouTubeAPI /> : <></>} */}
                {/* {this.state.podstrona === "YouTubeAPI" ? <ZaladujStrone nazwaStrony={this.state.podstrona} /> : null} */}
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