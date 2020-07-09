import React from 'react'
import ZaladujStrone from './ZaladujStrone'


class Portfolio extends React.Component{
    state={
        podstrona:""
    }

    dodajPodstrone=(props)=>{
        console.log("ładuję stronkę : " + props)
        this.setState({podstrona:props})
    }


    render(){
        return(
            <div className="portfolio">
    
                <div className="body">
                    <div className="projekty">
                        <h1>Przykładowe projekty</h1>
                        <div className="projekt">
                            <h1>Projekt Wykorzystania NASA API</h1>
                            <br/>
                            <img src="NASA_API_ss.png" width="300px" height="250px"/>
                            <img src="NASA_API_ss2.png" width="300px" height="250px"/>
                            <p>
                                Jest to mój autorski projekt strony dającej wgląd do aktualnych newsów, oraz do bazy danych NASA. Na początku podczas ładowania komponentu 
                                pobierana jest automatycznie informacja odnośnie zdjęcia dnia. Jest ono wyświetlane wraz z tytułem artykułu oraz krótkim opisem. 
                                Ponadto możemy wyszukać informacje odnośnie np. danej planety czy rover-a, o których chcemy się czegoś dowiedzieć. Wtedy wykorzystywane jest inne 
                                API (również od NASA) pozwalające na wyszukanie infromacji o 100 artykułach/zdjęciach powiązanych z naszą frazą. (Wyszukiwarka działa jedynie w języku 
                                angielskim).
                            </p>
                            <br/>
                            <button onClick={()=>this.dodajPodstrone("NASA_API")}>Sprawdź demo!</button>
                            <button onClick={()=>this.dodajPodstrone("")}>Zwiń</button>  
                            {this.state.podstrona==="NASA_API" ? <ZaladujStrone nazwaStrony={this.state.podstrona}/> : null}   
                        </div>
                        <div className="projekt">
                            <h1>Projekt Wykorzystania Youtube API</h1>
                            <br/>
                            <img src="YT_API_ss.png" width="300px" height="250px"/>
                            <img src="YT_API_ss2.png" width="300px" height="250px" alt="screenshot"/>
                            <p>
                                Projekt ten stworzyliśmy na zajęciach. Działa bardzo podobnie jak zwykła wyszukiwarka Youtube, z małą różnicą wizualną.
                                Aplikacja wysyła zapytanie do Youtube Data API, po czym wyświetla filmy, ich tytuły i 5 najbardziej trafnych filmów w stosunku do 
                                wyszukiwanej frazy.
                            </p>
                            <br/>
                            <button onClick={()=>this.dodajPodstrone("YouTubeAPI")}>Sprawdź demo!</button>
                            <button onClick={()=>this.dodajPodstrone("")}>Zwiń</button>  
                            {this.state.podstrona==="YouTubeAPI" ? <ZaladujStrone nazwaStrony={this.state.podstrona}/> : null}       
                        </div>

                        <h2>
                            Więcej na <a href="https://www.github.com/xyanteos">GitHub<br/><img src="https://github.com/fluidicon.png"/></a>
                        </h2>
    
                        <div className="stopka">
                            <p>
                                Made by <a href="https://www.facebook.com/1431627220249093" className="madeBy">Maciej Nowacki</a>
                            </p>
                        </div>
                    </div>
    
                </div>
                
            </div>
        )
    }

}


export default Portfolio