import { Link } from "react-router-dom"
import PathConstants from "../../routes/PathConstants"
import { Typography } from "@mui/material"

const Signup = () => {
  return (
    <>
    <form action="http://localhost:3000/api" method="get" className="container" aria-label="login form">
        <img src="./assets/images/big_icon.svg" alt="X icon" className="x-logo" />
        <div className="form">
            <Typography variant="h1" gutterBottom fontWeight={500}>Twitter</Typography>
            <input type="text" name="Name" id="" placeholder="Name" className="login-field" />
            <input type="text" name="email" placeholder="E-Mail" className="login-field" />
            <input type="password" name="password" placeholder="Password" className="login-field" />
            <input type="password" name="" placeholder="Confirm Password" className="login-field" />
            <button type="submit" className="login-btn">Sign Up</button>
            <Link to={PathConstants.HOME} rel="noopener noreferrer">Already a user?</Link>
        </div>
    </form>
    </>
  )
}

export default Signup