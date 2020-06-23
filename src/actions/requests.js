import store from '../store';
import {GET_POKEMON_LIST, GET_POKEMON_INFO, GET_POKEMON_DESCRIPTION} from './types';
import { pokemonListURL } from '../API/requestUrl';
const axios = require('axios').default;

const getPokemonList = (list) => ({
    type: GET_POKEMON_LIST,
    nextPage: list.next,
    previousPage: list.previous,
    list: list.results,
});

export const AsyncGetPokemonList = (url) => 
    axios.get(url)
    .then(res => res.data)
    .then(list => store.dispatch(getPokemonList(list)));

const getPokemonInfo = (id, pokemonInfo) => ({
    type: GET_POKEMON_INFO,
    id: id,
    image: pokemonInfo.sprites.front_default,
    stats: pokemonInfo.stats,
})

export const AsyncGetPokemonInfo = (id, url) => 
    axios.get(url)
    .then(res => res.data)
    .then(pokemonInfo => store.dispatch(getPokemonInfo(id, pokemonInfo)))
