import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        TrailerVideo:null,
    },



    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },

        addTrailerVideo:(state,action)=>{
            state.TrailerVideo=action.payload;
        }
    }
})

//export reducers actions

export const {addNowPlayingMovies,addTrailerVideo}=moviesSlice.actions;

export default moviesSlice.reducer
