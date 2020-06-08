import React, { Component } from 'react';
import MiniCard from './MiniCard';
import './List.css';


export default class List extends Component {
    render() {
        return (
            <div className="list">
                <div className="list__list">
                    <div className="list__list-row">
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </div>
                    <div className="list__list-row">
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </div>
                    <div className="list__list-row">
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </div>
                    <div className="list__list-row">
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </div>
                    <div className="list__list-row">
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </div>
                </div>
            </div>
        )
    }
}
