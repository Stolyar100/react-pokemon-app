import React, { Component } from 'react';
import Search from './navigation/Search'
import List from './pokemon/List'
import Card from './pokemon/Card';
import './Layout.css';

export default class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Search />
                <List />
            </div>
        )
    }
}
