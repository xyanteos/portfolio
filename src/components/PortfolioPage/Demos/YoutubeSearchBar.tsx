import React, { useState } from "react";

const YoutubeSearchBarRe = (props : any) =>{
    const [term, setTerm] = useState('');
    
    const onInputChange = (event : any)=>{
        setTerm(event.target.value)
    }

    const onFormSubmit = (event : any)=>{
        event.preventDefault();
        //przeslac haslo do rodzica (a dalej do api)
        props.onFormSubmit(term);
    }

    return(
        <div className="searchBar">
        <form className="ui form" onSubmit={onFormSubmit}>
            <div className="field"> 
                <label >
                    Wyszukiwanie filmu
                </label>
                <input id="inputField" type="text" value={term} onChange={onInputChange}/>
            </div>
        </form>
    </div>
    )
}

export default YoutubeSearchBarRe