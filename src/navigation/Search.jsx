import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const searchIcon = require('./assets/search.svg');
    return (
      <div className="search">
        <div className="search__icon-block">
          <img src={searchIcon} alt="search" />
        </div>
        <input className="search__input" onChange={this.handleChange} />
      </div>
    );
  }
}
