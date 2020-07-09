import {
  GET_POKEMON_LIST,
  GET_POKEMON_INFO,
  GET_POKEMON_DESCRIPTION,
} from '../actions/types';

const initialState = {
  nextPage: '',
  previousPage: '',
  list: [],
};

export default function listReducer(
  state = initialState,
  { type, nextPage, previousPage, list, id, image, stats, flavorText }
) {
  switch (type) {
    case GET_POKEMON_LIST:
      return { ...state, nextPage, previousPage, list };
    case GET_POKEMON_INFO:
      return {
        ...state,
        list: state.list.map((pokemon, index) => {
          if (index === id) {
            return {
              ...pokemon,
              image,
              stats,
            };
          }
          return pokemon;
        }),
      };
    case GET_POKEMON_DESCRIPTION:
      return {
        ...state,
        list: state.list.map((pokemon, index) => {
          if (index == id) {
            const description = ((flavors = flavorText) => {
              let description = '';
              flavors.some((flavor) => {
                if (flavor.language.name === 'en') {
                  description = flavor.flavor_text;
                  return true;
                }
                return false;
              });
              return description;
            })();
            return {
              ...pokemon,
              description,
            };
          }
          return pokemon;
        }),
      };

    default:
      return state;
  }
}
