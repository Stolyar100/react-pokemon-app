import React, { Component } from 'react';
import './MiniCard.css';

export default function MiniCard({name = 'wartotle', image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'}) {
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
