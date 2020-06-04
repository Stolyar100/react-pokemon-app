import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    
    render() {
        return (
            <div className="search">
                <div className="search__icon-block">
                    <img src={require('./assets/search.svg')} alt="search"/>
                </div>
                <input onChange={this.handleChange} />
            </div>
        )
    }
}
