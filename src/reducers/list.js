import {GET_POKEMON_LIST, GET_POKEMON_INFO} from '../actions/types';

const initialState = {
    nextPage: '',
    previousPage: '',
    list: [],
}

export default function listReducer(state = initialState, {type, nextPage, previousPage, list, id, image, stats}) {
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
                        if (index === id) {
                            return {
                                ...pokemon,
                                image, 
                                stats
                            }
                        } else {
                            return pokemon;
                        }
                    }) 
            }
            );

        default: 
            return state;
    }
}
