import React, { Component } from 'react';
import './MiniCard.css';

export default class MiniCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'wartotle',
            image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
        };
    }

    render() {
        return (
            <div className="mini-card">
                <div className="mini-card__image-block">
                    <img
                        className="mini-card__image"
                        src={this.state.image}
                        alt={this.state.name}
                    />
                </div>
                <h2 className="mini-card__name">{this.state.name}</h2>
            </div>
        );
    }
}
