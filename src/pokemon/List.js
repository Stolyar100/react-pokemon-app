import { connect } from 'react-redux';
import React, { Component } from 'react';
import {pokemonListURL} from '../API/requestUrl';
import {AsyncGetPokemonList} from '../actions/requests'
import MiniCard from './MiniCard';
import './List.css';
import { Link } from 'react-router-dom';

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
                {this.props.list.map((pokemon, id) => (
                        <Link to={`/pokemon/${pokemon.name}`}>
                            <MiniCard name={pokemon.name} url={pokemon.url} image={pokemon.image} id={id}/>
                        </Link>
                    ))}
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
