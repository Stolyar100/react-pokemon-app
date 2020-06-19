import store from '../store';
import {GET_POKEMON_LIST} from './types';
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
