import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import * as filmsActions from '../../actions/filmsActions';
import Input from '../components/Input';
import FilmList from '../components/FilmList';

class FilmSearch extends Component {

  handleInputChange(val) {
    if (val)
      this.props.getFilms(val);
  }

  render() {
    const { items, isFetching, defaultInputValue, error } = this.props;

    return (
      <div className='container'>
        <Input 
          handleChange={(e) => this.handleInputChange(e)} 
          delay={400} 
          labelText='Search for films with this input:'
          defaultValue={defaultInputValue}
          />
        {
          error &&
          <Alert bsStyle="danger">
            error
          </Alert>
        }
        <FilmList items={items} isFetching={isFetching} />
      </div>
    );
  }
}

FilmSearch.propTypes = {
  items: PropTypes.array,
  message: PropTypes.string,
  isFetching: PropTypes.bool
};

export default connect(
  ({films}) => ({
    items: films.items,
    error: films.error,
    isFetching: films.isFetching,
    defaultInputValue: films.query
  }),
  {
    getFilms: filmsActions.getFilms
  }
)(FilmSearch);


