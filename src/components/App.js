import React from 'react'
import Api from '../Api'
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
                <div className="header">
                    <div className="innerHeader">
                        <div className="logoContainer">
                            <h1><a href="https://github.com/xyanteos">Maciej<span> Nowacki</span><br/><img src="https://github.com/fluidicon.png"/>
                            </a>
                            </h1>
                        </div>
                        <div className="navigation">

                                    <span onClick={()=>this.zmieniamStrone("StronaGlowna")}>O mnie</span>
                                    <span onClick={()=>this.zmieniamStrone("Portfolio")}>Portfolio</span>
                                    <span onClick={()=>this.zmieniamStrone("Kontakt")}>Kontakt</span>

                        </div>
                    </div>
                </div>
                <div className="coWyswietlic">
                    <ZaladujStrone nazwaStrony={this.state.aktualnaStrona}/>
                </div>
                
            </div>

        )

    }
}
export default App