
import React, { useState } from 'react'
import Header from './Header'


const Login = () => {

  const[isSignInForm,setisSignInform]=useState(true)


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
    <from className=" w-3/12 absolute p-12 bg-black my-36  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" >
       <h1 className=" font-bold py-4 text-3xl">
        {isSignInForm?"signin":"signup"}</h1>


        {!isSignInForm &&(<input
        type="text"
        placeholder="enter user name" 
        className="p-4 my-4 w-full bg-slate-700"/> )   }     





       <input 
       type="text" 
       placeholder="EmailAddress" 
       className="p-4 my-4 w-full bg-slate-700"/>


       <input
        type="password"
        placeholder="password" 
        className="p-4 my-4 w-full bg-slate-700"/>  

        <button className="p-4 my-6 bg-red-700 rounded-lg w-full">
        {isSignInForm?"signin":"signup"} </button>

           <p className="py- cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm?"New to netflix? SignUp now":"Already a user then SignIn"}</p>  
        
         </from>
   
    </div>
  )
}

export default Login