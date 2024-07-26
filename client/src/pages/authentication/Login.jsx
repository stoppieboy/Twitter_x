import PathConstants from "../../routes/PathConstants"
import { Link, useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"
import axios from "axios"
import { logo, useThemeDetector } from "../../components/ThemeDetector"
import { useEffect, useState } from "react"
import Loading from "react-loading"

const Login = () => {
  
  const dark = useThemeDetector()
  const navigate = useNavigate()
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("API_KEY")){
      navigate(PathConstants.HOME)
    }
  })

  // const sleep = async (ms) => {
  //   return new Promise(resolve => setTimeout(resolve, ms))
  // }

  const submitHandler = async(event) => {
    event.preventDefault()
    setLoading(true)
    if(!localStorage.getItem("API_KEY")){
      try{
        console.log('timeout begin')
        // await sleep(3000)
        const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
          username: event.target.username.value,
          password: event.target.password.value
        })
        localStorage.setItem("API_KEY", data)
        navigate('/')
      }catch(err){
        alert('some error occured')
        console.log(err);
      }finally{
        setLoading(false)
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
            <button type="submit" className="login-btn">
              {loading ? <Loading width={25} height={25} type="spin"/> : "Login"}
            </button>
            <div className="flex justify-center">
              <Link to={PathConstants.SIGNUP} rel="noopener noreferrer">Create a new account.</Link>
            </div>
        </div>
    </form>
  )
}

export default Login