import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const FilmInfo = ({data}) => {
  return (
    <ListGroup className="container">
      <ListGroupItem header="Original title" bsStyle="info">
        {data.original_title}
      </ListGroupItem>
      <ListGroupItem header="Overview">
        {data.overview}
      </ListGroupItem>
      <ListGroupItem header="Popularity">
        {data.popularity}
      </ListGroupItem>
      <ListGroupItem header="Release date">
        {data.release_date}
      </ListGroupItem>
      <ListGroupItem header="Vote average">
        {data.vote_average}
      </ListGroupItem>
    </ListGroup> 
  )
}

FilmInfo.propTypes = {
  data: PropTypes.object
}

export default FilmInfo;
