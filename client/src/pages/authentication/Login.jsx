import PathConstants from "../../routes/PathConstants"
import { Link, useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"
import axios from "axios"
import { logo, useThemeDetector } from "../../components/ThemeDetector"
import { useEffect } from "react"

const Login = () => {
  
  const dark = useThemeDetector()
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem("API_KEY")){
      navigate(PathConstants.HOME)
    }
  })


  const submitHandler = async(event) => {
    event.preventDefault()
    if(!localStorage.getItem("API_KEY")){
      try{
        const { data } = await axios.post("http://localhost:3000/auth/login", {
          username: event.target.username.value,
          password: event.target.password.value
        })
        localStorage.setItem("API_KEY", data)
        navigate('/')
      }catch(err){
        console.log(err);
      }
    }
  }

  return (
    <form method="get" className="container space-x-8" aria-label="login form" onSubmit={submitHandler}>
        <img src={dark ? logo.dark: logo.light} alt="X icon" className="x-logo" />
        <div className="form">
            <Typography variant="h1" gutterBottom fontWeight={500}>Twitter</Typography>
            <input type="text" name="username" placeholder="Username" className="login-field" />
            <input type="password" name="password" placeholder="Password" className="login-field" />
            <button type="submit" className="login-btn">Login</button>
            <div className="flex justify-center">
              <Link to={PathConstants.SIGNUP} rel="noopener noreferrer">Create a new account.</Link>
            </div>
        </div>
    </form>
  )
}

export default Login