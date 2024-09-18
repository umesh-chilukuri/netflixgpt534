import React from 'react'
import MovieList from './MovieList'
import{useSelector} from "react-redux"
//import nowPlayingMovies

const Secondarycontainer = () => {

const movies=useSelector((store) =>store.movies);
//const movies=useSelector((store)=>store.movies?.nowPlayingMovies)


  return (
    <div>
      <MovieList  title="Now Playing"  Movies={movies?.nowPlayingMovies} />
      <MovieList  title="Trending"  Movies={movies?.nowPlayingMovies} />
      <MovieList  title="Popular"  Movies={movies?.nowPlayingMovies} />
      <MovieList  title="Horror"  Movies={movies?.nowPlayingMovies} />
      <MovieList  title="Now Playing"  Movies={movies?.nowPlayingMovies} /> 
    </div>
  )
}

export default Secondarycontainer