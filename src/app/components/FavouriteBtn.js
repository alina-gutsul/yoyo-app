import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { favouriteFilm, unfavouriteFilm } from '../../actions/favouritesActions';

const FavouriteBtn = (props) => {
  const { favourites, unfavouriteFilm, favouriteFilm, filmData } = props;
	const favourite = favourites.find(item => item.id === filmData.id);
  const btnProps = favourite ? 
      {
        bsStyle: 'danger',
        onClick: () => unfavouriteFilm(filmData.id)
      }
      :
      {
        bsStyle: 'success',
        onClick: () => favouriteFilm(filmData)
      };
  const btnText = favourite ? 'Unfavourite This film' : 'Favourite This film';
  
  return <Button {...btnProps}>{btnText}</Button>
}

FavouriteBtn.propTypes = {
  filmData: PropTypes.shape({
    id:PropTypes.string,
    name: PropTypes.string
  }),
  favouriteFilm: PropTypes.func,
  unfavouriteFilm: PropTypes.func,
  favourites: PropTypes.array
}

export default connect(
  ({favourites}) => ({
    favourites
  }),
  {
    unfavouriteFilm,
    favouriteFilm
  }
)(FavouriteBtn);