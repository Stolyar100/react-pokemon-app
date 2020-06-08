import React from 'react';
import './Stat.css';

export default function Stat({ name, value }) {
    return (
        <div className="stat">
            <h3 className="stat__name">{name}</h3>
            <div className="stat__block">
                <div
                    className="stat__left"
                    style={{
                        width: `${value}%`,
                    }}
                >
                    {value}
                </div>
                <div
                    className="stat__right"
                    style={{
                        width: `${100 - value}%`,
                    }}
                ></div>
            </div>
        </div>
    );
}
