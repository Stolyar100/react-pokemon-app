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
            return Object.assign({}, state, 
                Object.assign({}, state.list[id], 
                    {
                        image, 
                        stats,
                    }))

        default: 
            return state;
    }
}
