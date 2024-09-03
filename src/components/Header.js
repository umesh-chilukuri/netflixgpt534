import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
const Header = () => {

  const navigate=useNavigate

   const handleSignOut=()=>{
   

signOut(auth).then(() => {
  // Sign-out successful
  navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error")
});

   }

  return (
    <div className="absolute w-full flex px-8 py-2 bg-gradient-to-b from-black z-10  justify-between" >
    <img className="w-44"
     src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
    alt='netflixtext'
    />

    <div className="flex ">
      <img alt='userdp'
       src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7b9cd77-2f16-42ba-a311-d6732e747156/ddoaobq-d918817d-29f3-4773-b8f0-5513ebdf9792.png/v1/fill/w_1024,h_1024/naruto_icon_by_cleberricardo_ddoaobq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3YjljZDc3LTJmMTYtNDJiYS1hMzExLWQ2NzMyZTc0NzE1NlwvZGRvYW9icS1kOTE4ODE3ZC0yOWYzLTQ3NzMtYjhmMC01NTEzZWJkZjk3OTIucG5nIiwiaGVpZ2h0IjoiPD0xMDI0Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYjdiOWNkNzctMmYxNi00MmJhLWEzMTEtZDY3MzJlNzQ3MTU2XC9jbGViZXJyaWNhcmRvLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.sF3Vt7Z5QYLpZzu6GbQDyNmpTNwA9U3E1sUgI1Cimjc"
       className="w-20"/>
      <button onClick={handleSignOut} className=" font-bold text-white">Sign Out</button>
    </div>

    </div>
  )
}

export default Header