import { auth } from '../utils/firebase';
import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { updateProfile } from "firebase/auth";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';







const Login = () => {

  const[isSignInForm,setisSignInform]=useState(true)
   const[errorMessage,seterrorMessage]=useState(null)
   const email=useRef(null)
   const name=useRef(null)
   const password=useRef(null)
   const navigate=useNavigate();
   const dispatch=useDispatch()

   const HandleButtonClick=()=>{
    const message=checkValidData(email.current.value,password.current.value)
    seterrorMessage(message)

    if(message) return;




    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;


    updateProfile(user, {
      displayName:name.current.value,
       photoURL: "https://i.pinimg.com/736x/e3/70/f7/e370f7451f1b9dd00ac1f0e46418b1a6.jpg"
    })
    .then(() => {
      const {uid,email,dispalyName,photoURL} = auth.currentUser;
      dispatch(
        addUser({
          uid:uid,
          email:email,
          dispalyName:dispalyName,
          photoURL:photoURL,
        })
      )


      // Profile updated!
      navigate("/browse")
    }).catch((error) => {
      seterrorMessage(error.message);
      // An error occurred
      // ...
    });





    console.log(user)
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    seterrorMessage(errorCode+ "-" +errorMessage)
    // ..
  });

    }





    else{
      signInWithEmailAndPassword(
        auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ "-" +errorMessage)
  });


    }


   }



  const toggleSignInForm=()=>{
    setisSignInform(!isSignInForm)
  }


  return (
    <div>  
    <Header/>
    <div className="absolute"> 
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
    alt='netflixlogo'
    />
     </div>



    <from onSubmit={(e)=>e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" >
       <h1 className=" font-bold py-4 text-3xl">
        {isSignInForm?"signin":"signup"}</h1>


        {!isSignInForm &&(
          <input
          ref={name}
        type="text"
        placeholder="enter user name" 
        className="p-4 my-4 w-full bg-slate-700"/> )   }     





       <input 
       ref={email}
       type="text" 
       placeholder="EmailAddress" 
       className="p-4 my-4 w-full bg-slate-700"/>


       <input
       ref={password}
        type="password"
        placeholder="password" 
        className="p-4 my-4 w-full bg-slate-700"/>  
         

       <p className=" text-red-500 font-bold text-lg p-2 ">{errorMessage}</p>




        <button className="p-4 my-6 bg-red-700 rounded-lg w-full"
        onClick={HandleButtonClick}>
        {isSignInForm?"signin":"signup"} </button>

           <p className="py- cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm?"New to netflix? SignUp now":"Already a user then SignIn"}</p>  
        
         </from>
   
    </div>
  )
}

export default Login