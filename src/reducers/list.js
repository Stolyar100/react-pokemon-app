import {GET_POKEMON_LIST} from '../actions/types';

const initialState = {
    next: '',
    previous: '',
    list: [],
}

export default function listReducer(state = initialState, {nextPage, previousPage, list, type}) {
    switch (type) {
        case GET_POKEMON_LIST:
            return Object.assign({}, state,
                {
                    nextPage,
                    previousPage, 
                    list,
                }
            );

        default: 
            return state;
    }
}
