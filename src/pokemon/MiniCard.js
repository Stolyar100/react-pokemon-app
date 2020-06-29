import React, { Component } from 'react';
import './MiniCard.css';
import {AsyncGetPokemonInfo} from '../actions/requests';

export default class MiniCard extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        AsyncGetPokemonInfo(this.props.id, this.props.url);
    }
    
    render() {
        const {name, image} = this.props;
        return (
            <div className="mini-card">
                <div className="mini-card__image-block">
                    <img
                        className="mini-card__image"
                        src={image}
                        alt={name}
                    />
                </div>
                <h2 className="mini-card__name">{name}</h2>
            </div>
        );
    }
}

