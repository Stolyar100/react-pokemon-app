import store from '../store';
import {GET_POKEMON_LIST, GET_POKEMON_INFO, GET_POKEMON_DESCRIPTION} from './types';
import { pokemonSpeciesURL } from '../API/requestUrl';
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
    image: pokemonInfo.sprites.front_default,
    stats: pokemonInfo.stats,
    id
})

export const AsyncGetPokemonInfo = (id, url) => 
    axios.get(url)
    .then(res => res.data)
    .then(pokemonInfo => store.dispatch(getPokemonInfo(id, pokemonInfo)))

const getPokemonDescription = (id, speciesInfo) => ({
    type: GET_POKEMON_DESCRIPTION,
    flavorText: speciesInfo.flavor_text_entries,
    id
})

export const AsyncGetPokemonDescription = (id, name) => 
    axios.get(pokemonSpeciesURL + name)
    .then(res => res.data)
    .then(speciesInfo => store.dispatch(getPokemonDescription(id, speciesInfo)))
