import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",

         }
    }

    onChange = (event) => {
        const newTitle = event.target.value;
        this.setState({
            title: newTitle
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSearch(this.state.title)
    }

    render() { 
        return ( 
            <div >
                <form onSubmit={this.onSubmit}>
                    <div className="form-controls">
                        <label>Search</label>
                        <input onChange={this.onChange} value={this.state.title} type="text" placeholder="Placeholder text"/>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Search;