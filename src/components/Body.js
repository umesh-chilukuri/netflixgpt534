import {createBrowserRouter, RouterProvider} from "react-router-dom"
import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {  onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { addUser, removeUser } from "../utils/userSlice"
import {useDispatch} from "react-redux"

const Body = () => {
    const dispatch=useDispatch()
    //const navigate=useNavigate()


    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>,

        },
        {
            path:"/browse",
            element:<Browse/>,

        },

    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,dispalyName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,dispalyName:dispalyName,photoURL:photoURL,
                
            
            }))
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser())
              
            }
          });
           
    },[ ])


  return (
    <div>
        <RouterProvider  router={appRouter}/>
    </div>
  )
}

export default Body