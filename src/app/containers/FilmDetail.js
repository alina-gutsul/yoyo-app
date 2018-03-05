import React, { Component } from 'react';
import Loading from 'react-loading';
import axios from 'axios';
import FavouriteBtn from '../components/FavouriteBtn'; 
import FilmInfo from '../components/FilmInfo';

class FilmDetail extends Component {

  state = {
    data: undefined
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4cb1eeab94f45affe2536f2c684a5c9e`)
    .then(response => {
      this.setState( {data: response.data})
    })
    .catch(error => {
      this.setState( {error: error.message || error} )
    });
  }

  render() {
    const { id } = this.props.match.params;
    const { data } = this.state;

    if(data) {
      const filmData = {id: id, name: data.original_title}
      
      return (
        <div className="container">
          <FilmInfo data={data} />
          <FavouriteBtn filmData={filmData}/>
        </div>
      ) 
    } 

    return <Loading 
              className='center-block mt-60' 
              type='spokes' 
              color='#0057a0' />;
  }
}

export default FilmDetail;
