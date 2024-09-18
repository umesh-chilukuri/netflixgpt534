import React from 'react'
import Moviecard from './Moviecard'

const MovieList = ({title,Movies}) => {
    console.log(Movies);
  return (
    <div className='px-6  bg-black'>
        <h1 className='text-3xl py-4 text-white '>{title}</h1>
           <div className='flex  overflow-x-scroll '>
           <div className='flex'>
    {Movies?.map((movie) => (
            <Moviecard key={movie.id} posterPath={movie.poster_path} />
          ))}
            </div>
            
            </div>
    </div>
  )
}

export default MovieList