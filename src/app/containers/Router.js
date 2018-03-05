import React from 'react';
import { Switch, Route } from 'react-router-dom'

import FilmDetail from './FilmDetail';
import FilmSearch from './FilmSearch';
import Favourites from './Favourites';

const Router = () => (
	<div>
		<Switch>
      <Route exact path='/' render={()=><h1 class="container mt-60">Welcome to the YOYO Cinema!</h1>}/>
      <Route exact path='/films' component={FilmSearch} />
      <Route path='/films/:id' component={FilmDetail} />
      <Route path='/favourites' component={Favourites} />
    </Switch>
	</div>
)

export default Router;
