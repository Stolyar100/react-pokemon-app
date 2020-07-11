import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { pokemonListURL } from '../API/requestUrl';
import { AsyncGetPokemonList } from '../actions/requests';
import MiniCard from './MiniCard';
import './List.css';

class List extends Component {
  componentDidMount() {
    AsyncGetPokemonList(pokemonListURL);
  }

  render() {
    return (
      <div className="list">
        {this.props.list.map((pokemon, id) => (
          <Link to={`/pokemon/${id}`} key={pokemon.name}>
            <MiniCard
              name={pokemon.name}
              url={pokemon.url}
              image={pokemon.image}
              id={id}
            />
          </Link>
        ))}
      </div>
    );
  }
}

List.propTypes = {
  nextPage: PropTypes.string,
  previousPage: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

List.defaultProps = {
  nextPage: PropTypes.string,
  previousPage: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

const mapStateToProps = (state) => {
  return {
    list: state.listReducer.list,
    nextPage: state.listReducer.nextPage,
    previousPage: state.listReducer.previousPage,
  };
};

export default connect(mapStateToProps)(List);
