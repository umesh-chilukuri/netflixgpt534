export const checkValidData=(email,password)=>{
  const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  const isPasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)


  if(!isEmailValid) return "Email is not valid"
  if(!isPasswordvalid) return "Password is not valid"


  return null;

} 