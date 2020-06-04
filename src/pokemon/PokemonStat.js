import React from 'react';
import './PokemonStat.css';

export default function PokemonStat({ name, value }) {
    return (
        <div className="pokemon__stat">
            <h3 className="pokemon__stat-name">{name}</h3>
            <div className="pokemon__stat-block">
                <div
                    className="pokemon__stat-left"
                    style={{
                        width: `${value}%`,
                    }}
                >
                    {value}
                </div>
                <div
                    className="pokemon__stat-right"
                    style={{
                        width: `${100 - value}%`,
                    }}
                ></div>
            </div>
        </div>
    );
}
