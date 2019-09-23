import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import Movie from '../Movie/Movie'
import Showfilms from '../Showfilms/Showfilms'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/mywatchlist' render={
      props => (<Showfilms currentPage='My Watchlist' category='my_watchlist' {...props} />
    )} />
	<Route exact path='/nowplaying' render={
      props => (<Showfilms currentPage='Now Playing' category='now_playing' {...props} />
    )} />
    <Route exact path='/myfavourites' render={
      props => (<Showfilms currentPage='My favourites' category='my_favourites' {...props} />
    )} />
    <Route exact path='/search/:query' render={
      props => (<Showfilms currentPage='Search Results' {...props} />
    )} />
    <Route exact path='/movie/:id' component={Movie} />
  </Switch>
)

export default Routes
