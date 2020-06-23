import { connect } from 'react-redux';
import React, { Component } from 'react';
import {pokemonListURL} from '../API/requestUrl';
import {AsyncGetPokemonList} from '../actions/requests'
import MiniCard from './MiniCard';
import './List.css';



class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    
    componentDidMount() {
        AsyncGetPokemonList(pokemonListURL);
    }

    render() {
        return (
            <div className="list">
                <div className="list__list">
                {this.props.list.map((pokemon, id) => (
                        <MiniCard name={pokemon.name} url={pokemon.url} id={id}/>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.listReducer.list,
        nextPage: state.listReducer.nextPage,
        previousPage: state.listReducer.previousPage
    }
}

export default connect(mapStateToProps)(List)
