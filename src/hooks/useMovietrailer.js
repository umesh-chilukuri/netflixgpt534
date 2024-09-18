import React,{useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants';
import {useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from '../utils/MoviesSlice';

const useMovietrailer = (movieId) => {



    const dispatch=useDispatch();
    const url = "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US";


  const getmovievideos=async ()=>{
    const data=await fetch(url,API_OPTIONS);
    const json=await data.json();
    console.log(json);
    const filterdata=json.results.filter(video => video.type=== "Trailer");
    const trailer=filterdata.length?filterdata[0]:json.results[0];
    dispatch(addTrailerVideo(trailer))
  };



  useEffect(()=>{
    getmovievideos();
},[]);



  
}

export default useMovietrailer