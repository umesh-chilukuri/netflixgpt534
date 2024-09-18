import React from 'react'
import { useSelector} from "react-redux";
import useMovietrailer from '../hooks/useMovietrailer';



const VideoBackground = ({movieId}) => {
     
  const TrailerVideo=useSelector(store => store.movies?.TrailerVideo)
  
 useMovietrailer(movieId);
 
 


  return (
    <div className=''>
   <iframe className='w-screen aspect-video' 
   src={"https://www.youtube.com/embed/"+ TrailerVideo?.key + "?&autoplay=1&mute=1" }
   title="YouTube video player"
    frameborder="0" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>

    </div>
  )
}

export default VideoBackground