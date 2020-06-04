import React, { Component } from 'react';
import PokemonStat from './PokemonStat'
import './PokemonCard.css'

export default class PokemonCard extends Component {
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
            <div className="pokemon">
                <div className="pokemon__info">
                    <div className="pokemon__left-block">
                        <div className="pokemon__image-block">
                            <img src={this.state.image} className="pokemon__image" alt="pokemon" />
                        </div>
                        <h2 className="pokemon__name">{this.state.name}</h2>
                    </div>
                    <div className="pokemon__stats-block">
                        <PokemonStat name="HP" value={this.state.hp}/>
                        <PokemonStat name="Attack" value={this.state.attack}/>
                        <PokemonStat name="Defence" value={this.state.defence}/>
                        <PokemonStat name="Speed" value={this.state.speed}/>
                        <PokemonStat name="Sp Attack" value={this.state.spAttack}/>
                        <PokemonStat name="Sp Def" value={this.state.spDefence}/>
                    </div>
                </div>
                <p className="pokemon__description">{this.state.description}</p>
            </div>
        )
    }
}
