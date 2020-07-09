import React from 'react'



class SearchBar extends React.Component {
    state={
        term: ""
    }
    onInputChange = (event)=>{
        this.setState({term:event.target.value})
    }

    onFormSubmit = (event)=>{
        event.preventDefault();
        //przeslac haslo do rodzica (a dalej do api)
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="searchBar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field"> 
                        <label >
                            Wyszukiwanie filmu
                        </label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
