import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'react-loading';
import { ListGroup, Alert } from 'react-bootstrap';

import FilmListItem from './FilmListItem';

const FilmList = ({items, isFetching, className, emptyListMessage}) => {
  
  if(isFetching)
    return <Loading 
              className='center-block mt-60' 
              type='spokes' 
              color='#0057a0' 
              />;
  
  const films = items.map(item => <FilmListItem {...item} key={item.id} />);

  if(films.length === 0 && emptyListMessage)
    return <Alert bsStyle="warning"> {emptyListMessage} </Alert>;

  return (
    <ListGroup className={className}>
      {films}
    </ListGroup>
  );
}

FilmList.propTypes = {
  items: PropTypes.array,
  isFetching: PropTypes.bool,
  className: PropTypes.string,
  emptyListMessage: PropTypes.string 
}

export default FilmList;