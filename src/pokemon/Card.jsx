import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Stat from './Stat';
import { AsyncGetPokemonDescription } from '../actions/requests';
import './Card.css';

class Card extends Component {
  componentDidMount() {
    AsyncGetPokemonDescription(this.props.id, this.props.pokemon.name);
  }

  render() {
    const { image, name, stats, description } = this.props.pokemon;
    return (
      <div className="card">
        <div className="card__info">
          <div className="card__left-block">
            <div className="card__image-block">
              <img src={image} className="card__image" alt="pokemon" />
            </div>
            <h2 className="card__name">{name}</h2>
          </div>
          <div className="card__stats-block">
            <Stat name="HP" value={stats[0].base_stat} />
            <Stat name="Attack" value={stats[1].base_stat} />
            <Stat name="Defence" value={stats[2].base_stat} />
            <Stat name="Speed" value={stats[5].base_stat} />
            <Stat name="Sp Attack" value={stats[3].base_stat} />
            <Stat name="Sp Def" value={stats[4].base_stat} />
          </div>
        </div>
        <p className="card__description">{description}</p>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number,
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
  }),
};

Card.defaultProps = {
  id: PropTypes.number,
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
  }),
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    pokemon: state.listReducer.list[id],
    id,
  };
};
export default connect(mapStateToProps)(Card);
