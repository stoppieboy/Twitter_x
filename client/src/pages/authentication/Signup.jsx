import { Link, useNavigate } from "react-router-dom"
import PathConstants from "../../routes/PathConstants"
import { Typography } from "@mui/material"
import axios from "axios"
import { useThemeDetector, logo } from "../../components/ThemeDetector"

const Signup = () => {
  const navigate = useNavigate()
  const dark = useThemeDetector()

  const submitHandler = (event) => {

    event.preventDefault();
    axios.post('http://localhost:3000/auth', {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value
    }).then(() => navigate(PathConstants.LOGIN))
  }

  return (
    <>
    <form method="post" className="container" aria-label="login form" onSubmit={submitHandler}>
        <img src={dark ? logo.dark: logo.light} alt="X icon" className="x-logo" />
        <div className="form">
            <Typography variant="h1" gutterBottom fontWeight={500}>Twitter</Typography>
            <input type="text" name="username" id="" placeholder="Username" className="login-field" />
            <input type="text" name="email" placeholder="E-Mail" className="login-field" />
            <input type="password" name="password" placeholder="Password" className="login-field" />
            <input type="password" name="" placeholder="Confirm Password" className="login-field" />
            <button type="submit" className="login-btn">Sign Up</button>
            <Link to={PathConstants.LOGIN} rel="noopener noreferrer">Already a user?</Link>
        </div>
    </form>
    </>
  )
}

export default Signup