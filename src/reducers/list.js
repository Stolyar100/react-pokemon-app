import {GET_POKEMON_LIST, GET_POKEMON_INFO, GET_POKEMON_DESCRIPTION} from '../actions/types';

const initialState = {
    nextPage: '',
    previousPage: '',
    list: [],
}

export default function listReducer(state = initialState, {type, nextPage, previousPage, list, id, image, stats, flavorText}) {
    switch (type) {
        case GET_POKEMON_LIST:
            return Object.assign({}, state,
                {
                    nextPage,
                    previousPage, 
                    list,
                }
            );
        case GET_POKEMON_INFO:
            return Object.assign({}, state, {
                    list: state.list.map((pokemon, index) => {
                        if (index == id) {
                            return {
                                ...pokemon,
                                image, 
                                stats
                            }
                        } else {
                            return pokemon;
                        }
                    }) 
            });
        case GET_POKEMON_DESCRIPTION:
            debugger;
            let description = '';
            flavorText.some(flavor => {
                if (flavor.language.name === 'en') {
                    description = flavor.flavor_text;
                    return true;
                }
                return false;
            });
            return Object.assign({}, state, {
                list: state.list.map((pokemon, index) => {
                    if (index == id) {
                        return {
                            ...pokemon,
                            description
                        }
                    } else {
                        return pokemon;
                    }
                })
            });

        default: 
            return state;
    }
}
