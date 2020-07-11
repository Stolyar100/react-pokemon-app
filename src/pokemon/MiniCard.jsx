import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AsyncGetPokemonInfo } from '../actions/requests';
import './MiniCard.css';

export default class MiniCard extends Component {
  componentDidMount() {
    AsyncGetPokemonInfo(this.props.id, this.props.url);
  }

  render() {
    const { name, image } = this.props;
    return (
      <div className="mini-card">
        <div className="mini-card__image-block">
          <img className="mini-card__image" src={image} alt={name} />
        </div>
        <h2 className="mini-card__name">{name}</h2>
      </div>
    );
  }
}

MiniCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.number,
};

MiniCard.defaultProps = {
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.number,
};
