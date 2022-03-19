import React from 'react'
import ZaladujStrone from './ZaladujStrone'


class App extends React.Component{
    state={
        aktualnaStrona:""
    }    

    zmieniamStrone = (jaka) =>{
        // console.log(jaka)
        this.setState({aktualnaStrona:jaka});
    }
    componentDidMount(){
        this.setState({aktualnaStrona:"StronaGlowna"})
    }
    

    render(){

        return(

            <div>
                <main>
                    <header>
                        <div className="header color-change-3x">
                            <div className="innerHeader">
                                <div className="logoContainer">
                                    <h1><a href="https://github.com/xyanteos">Maciej<span> Nowacki</span><br/><img src="https://github.com/fluidicon.png" alt="GitHub"/>
                                    </a>
                                    </h1>
                                </div>
                                <nav>
                                    <div className="navigation">

                                                <span onClick={()=>this.zmieniamStrone("StronaGlowna")}>O mnie</span>
                                                <span onClick={()=>this.zmieniamStrone("Portfolio")}>Portfolio</span>
                                                <span onClick={()=>this.zmieniamStrone("Kontakt")}>Kontakt</span>

                                    </div>
                                </nav>
                            </div>
                        </div>
                    </header>
                    
                        <div className="coWyswietlic">
                            <ZaladujStrone nazwaStrony={this.state.aktualnaStrona}/>
                        </div>
                </main>                
            </div>

        )

    }
}
export default App