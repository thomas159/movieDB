import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import media from '../Shared/Media'
import MovieList from '../MovieList'
import MovieDetails from '../MovieDetails'
import NotFound from '../NotFound'
import Search from '../Search'
import * as allActions from './actions'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Syncopate:700|Teko:400|Orbitron:400|Raleway:400');
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html,
body {
    position: relative;
    color: #474247;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.2;
    background: #f2f2f2;
    word-break: normal;
}

ul,li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.selected {
  color: #ff00ff;
}
`

const Wrap = styled.div`
  position: relative;
`

const MainWrap = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 80px);
  ${media.lg`
    min-height: calc(100vh - 50px);
  `}
`

const Main = () => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allActions.fetchMovies())
  }, [])

  const { movies } = useSelector((state) => ({
    movies: state.movies.isFetching ? [] : state.movies.items.results,
  }))

  return (
    <Router>
      <Wrap>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <GlobalStyle whiteColor />
        <MainWrap>
          <Switch>
            <Route exact path="/">
              <MovieList movies={movies} searchValue={searchValue} setSearchValue={setSearchValue} />
            </Route>
            <Route path="/details/:movieId">
              <MovieDetails />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </MainWrap>
      </Wrap>
    </Router>
  )
}

export default Main
