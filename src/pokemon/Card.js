import React, { Component } from 'react';
import Stat from './Stat'
import './Card.css'

export default class Card extends Component {
    state = {
    name: 'wartotle',
    hp: 59,
    attack: 63,
    defence: 80,
    speed: 58,
    spAttack: 65,
    spDefence: 80,
    description: 'Its tail is large and covered with a rich, thick fur. The tail\nbecomes increasingly deeper in color as Wartortle ages.\nThe scratches on its shell are evidence of this Pokémon’s\ntoughness as a battler.',
    type: 'water',
    themeColor: '3295F6',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    }
    
    render() {
        return (
            <div className="card">
                <div className="card__info">
                    <div className="card__left-block">
                        <div className="card__image-block">
                            <img src={this.state.image} className="card__image" alt="pokemon" />
                        </div>
                        <h2 className="card__name">{this.state.name}</h2>
                    </div>
                    <div className="card__stats-block">
                        <Stat name="HP" value={this.state.hp}/>
                        <Stat name="Attack" value={this.state.attack}/>
                        <Stat name="Defence" value={this.state.defence}/>
                        <Stat name="Speed" value={this.state.speed}/>
                        <Stat name="Sp Attack" value={this.state.spAttack}/>
                        <Stat name="Sp Def" value={this.state.spDefence}/>
                    </div>
                </div>
                <p className="card__description">{this.state.description}</p>
            </div>
        )
    }
}
