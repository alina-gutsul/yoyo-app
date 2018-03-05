import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { ListGroupItem } from 'react-bootstrap';

const FilmListItem = ({id, name}) => {
  return (
    <Link to={`/films/${id}`}>
      <ListGroupItem>{name}</ListGroupItem>
    </Link> 
  )
}

FilmListItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string
}

export default FilmListItem;