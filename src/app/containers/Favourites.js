import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmList from '../components/FilmList';

const Favorites = (props) => {
  return (
    <FilmList 
      items={props.favourites} 
      className='container'
      emptyListMessage='You have no favourite films yet.'/>
  );
}

Favorites.propTypes = {
  favourites: PropTypes.array
}

export default connect(
  ({favourites}) => ({
    favourites
  })
)(Favorites);
