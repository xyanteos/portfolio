import React from 'react'
import ZaladujStrone from './ZaladujStrone'
import logowanie from './Pictures/postsLogin.png'
import posty from './Pictures/postsListing.png'
import youtube1 from './Pictures/YT_API_ss.png'
import youtube2 from './Pictures/YT_API_ss2.png'
import nasa1 from './Pictures/NASA_API_ss.png'
import nasa2 from './Pictures/NASA_API_ss2.png'
const linked = 'https://www.linkedin.com/in/maciej-nowacki-12b4581b3/'

class Portfolio extends React.Component{
    state={
        podstrona:""
    }

    dodajPodstrone=(props)=>{
        console.log("ładuję stronkę : " + props)
        this.setState({podstrona:props})
    }

    redirectToPages = () =>{
        window.location.href="https://xyanteos.github.io/authenticatedPosts/"
    }

    render(){
        return(
            <div className="portfolio">
    
                <div className="body">
                    <div className="projekty text-focus-in-fast">
                        <h1>Przykładowe projekty</h1>
                        <div className="projekt">
                            <h1>Projekt CRUD w stacku MERN</h1>
                            <img src={logowanie} alt="Logowanie" className='text-focus-in-fast'/>
                            <img src={posty} alt="Posty" className='text-focus-in-fast' />
                            <p>Projekt mojego autorstwa wykorzystujący pełną funkcjonalność CRUD w postaci serwisu do przesyłania postów na wzór Twittera lub facebook-owego walla. 
                                Strona jest napisana w stylu single-page application. W projekcie zawarte są funkcjonalności: rejestracja użytkowników, autoryzacja za pomocą JWT,
                                edycja danych użytkownika, usuwanie konta oraz dodawanie, edycja i usuwanie postów.
                                Funkcjonalnością, której na razie brakuje jest aktualizacja w czasie rzeczywistym za pomocą Web Socketów, 
                                co w tej chwili obszedłem odświeżając stronę przy każdej zmianie.
                            </p>
                            <button className="ui button text-focus-in-fast" onClick={()=>window.location.href="https://xyanteos.github.io/authenticatedPosts/"}>Zobacz!</button>
                        </div>
                        <div className="projekt">
                            <h1>Projekt Wykorzystania NASA API</h1>
                            <br/>
                            <img src={nasa1} alt = "nasAPI" />
                            <img src={nasa2} alt = "nasAPI2" />
                            <p>
                                Jest to mój autorski projekt strony dającej wgląd do aktualnych newsów, oraz do bazy danych NASA. Na początku podczas ładowania komponentu 
                                pobierana jest automatycznie informacja odnośnie zdjęcia dnia. Jest ono wyświetlane wraz z tytułem artykułu oraz krótkim opisem. 
                                Ponadto możemy wyszukać informacje odnośnie np. danej planety czy rover-a, o których chcemy się czegoś dowiedzieć. Wtedy wykorzystywane jest inne 
                                API (również od NASA) pozwalające na wyszukanie infromacji o 100 artykułach/zdjęciach powiązanych z naszą frazą. (Wyszukiwarka działa jedynie w języku 
                                angielskim).
                            </p>
                            <br/>

                            <button className="ui button" onClick={()=>this.dodajPodstrone("NASA_API")}>Sprawdź demo!</button>
                            <button className= "ui button" onClick={()=>this.dodajPodstrone("")}>Zwiń</button>  
                            {this.state.podstrona==="NASA_API" ? <ZaladujStrone nazwaStrony={this.state.podstrona}/> : null}   
                        </div>

                        <div className="projekt">
                            <h1 className='text-focus-in-fast'>Projekt Wykorzystania Youtube API</h1>
                            <br/>
                            <img src={youtube1} alt = "ap" />
                            <img src={youtube2} alt="screenshot"/>
                            <p>
                                Projekt ten stworzyliśmy na zajęciach. Działa bardzo podobnie jak zwykła wyszukiwarka Youtube, z małą różnicą wizualną.
                                Aplikacja wysyła zapytanie do Youtube Data API, po czym wyświetla filmy, ich tytuły i 5 najbardziej trafnych filmów w stosunku do 
                                wyszukiwanej frazy.
                            </p>
                            <br/>
                            <button className = "ui button" onClick={()=>this.dodajPodstrone("YouTubeAPI")}>Sprawdź demo!</button>
                            <button className= "ui button" onClick={()=>this.dodajPodstrone("")}>Zwiń</button>  
                            {this.state.podstrona==="YouTubeAPI" ? <ZaladujStrone nazwaStrony={this.state.podstrona}/> : null}       
                        </div>

                        <h2>
                            Więcej na <a href="https://www.github.com/xyanteos">GitHub<br/><img src="https://github.com/fluidicon.png" alt="Github" id="git"/></a>
                        </h2>
    
                        <div className="stopka">
                            <p>
                                Made by <a href={linked} className="madeBy">Maciej Nowacki</a>
                            </p>
                        </div>
                    </div>
    
                </div>
                
            </div>
        )
    }

}


export default Portfolio