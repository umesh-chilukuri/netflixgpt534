import React ,{ useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth"
//import { auth } from "../utils/firebase"
import { addUser, removeUser } from "../utils/userSlice"
import {useDispatch} from "react-redux"



const Header = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch()
  //const navigate=useNavigate()
   const user=useSelector((state)=>state.user)




   const handleSignOut=()=>{

        signOut(auth).then(() => {
         // Sign-out successful
         //navigate("/")
        }).catch((error) => {
        // An error happened.
         navigate("/error")
          });

   }

   useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,dispalyName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,dispalyName:dispalyName,photoURL:photoURL,
            
        
        }))
        navigate("/browse")
        
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser())
          navigate("/")
          
        }
      });

      return () => unsubscribe();
       
},[ ])

      



  return (
    <div className="absolute w-full flex px-8 py-2 bg-gradient-to-b from-black z-10  justify-between" >
    <img className="w-44"
     src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
    alt='netflixtext'
    />

{user &&(
    <div className="flex ">
      <img alt='userdp'
       src={user?.photoURL}
       className="w-20"/>
      <button onClick={handleSignOut} className=" font-bold text-white">Sign Out</button>
    </div>
)}

    </div>
  )
}

export default Header