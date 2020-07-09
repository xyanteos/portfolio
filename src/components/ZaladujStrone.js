import React from 'react'
import StronaGlowna from './StronaGlowna'
import Portfolio from './Portfolio'
import Kontakt from './Kontakt'
import YouTubeAPI from './YouTubeAPI/YouTubeAPI'
import NasaAPI from './NASA_API/NasaAPI'

const ZaladujStrone = (nazwaStrony)=>{

    switch(nazwaStrony.nazwaStrony){
        case 'StronaGlowna':
            return(
                <div className="zawartoscStrony">
                    <StronaGlowna />
                </div>
            )
        case 'Portfolio':
            return(
                <div className="zawartoscStrony">
                    <Portfolio />
                </div>
            )
        case 'Kontakt':
            return(
                <div className="zawartoscStrony">
                    <Kontakt />
                </div>
                )
        case 'YouTubeAPI':
            return(
                <div className="zawartoscStrony">
                    <YouTubeAPI />
                </div>
            )
        case 'NASA_API':
            return(
                <div className="zawartoscStrony">
                    <NasaAPI />
                </div>
            )
        default:
            return(
                <div>To się nie powinno stać... Podano błędną nazwę strony!</div>
            )
    }

    // if(nazwaStrony.nazwaStrony==="StronaGlowna"){
    //     return(
    //         <div className="zawartoscStrony">
    //             <StronaGlowna />
    //         </div>
    //     )

    // }
    // else if(nazwaStrony.nazwaStrony==="Portfolio"){
    //     return(
    //         <div className="zawartoscStrony">
    //             <Portfolio />
    //         </div>

    //     )
    // }
    
    // else{
    //     return(
    //         <div>
    //             To nie powinno się stać...
    //             Podano błędną nazwę strony!
    //         </div>
    //     )
    // }
}


export default ZaladujStrone