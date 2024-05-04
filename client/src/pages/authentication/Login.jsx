import PathConstants from "../../routes/PathConstants"
import { Link } from "react-router-dom"
import { Typography } from "@mui/material"

const Login = () => {

  const submitHandler = (event) => {
    event.preventDefault()
    console.log('here')
  }

  return (
    <form method="get" className="container" aria-label="login form" onSubmit={submitHandler}>
        <img src="./assets/images/big_icon.svg" alt="X icon" className="x-logo" />
        {/* <div className="logoContainer">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="logo"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </div> */}
        <div className="form">
            <Typography variant="h1" gutterBottom fontWeight={500}>Twitter</Typography>
            <input type="text" name="email" placeholder="E-Mail" className="login-field" />
            <input type="password" name="password" placeholder="Password" className="login-field" />
            <button type="submit" className="login-btn">Login</button>
            {/* <a href="./views/signup.html" rel="noopener noreferrer">Create a new account.</a> */}
            <Link to={PathConstants.SIGNUP} rel="noopener noreferrer">Create a new account.</Link>
        </div>
    </form>
  )
}

export default Login