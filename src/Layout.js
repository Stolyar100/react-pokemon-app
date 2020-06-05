import React, { Component } from 'react';
import PokemonCard from './pokemon/PokemonCard';
import Search from './navigation/Search'

export default class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Search />
                <PokemonCard />
            </div>
        )
    }
}
