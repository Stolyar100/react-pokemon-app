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

const mapStateToProps = state => {
    return {
        list: state.list,
        nextPage: state.nextPage,
        previousPage: state.previousPage
    }
}

export default connect(mapStateToProps)(List)
