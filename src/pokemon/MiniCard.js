import React, { Component } from 'react';
import './MiniCard.css';
import '../actions/requests'

export default function MiniCard({name = 'loading', image = '', url, id}) {
    if (image === '') {
        
    }
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
