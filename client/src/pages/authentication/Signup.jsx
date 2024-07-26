import { Link, useNavigate } from "react-router-dom"
import PathConstants from "../../routes/PathConstants"
import { Typography } from "@mui/material"
import axios from "axios"
import { useThemeDetector, logo } from "../../components/ThemeDetector"
import Loading from "react-loading"
import { useState } from "react"

const Signup = () => {
    const navigate = useNavigate()
    const dark = useThemeDetector()
    const [loading, setLoading] = useState(false)

    const submitHandler = async (event) => {

        event.preventDefault();
        setLoading(true)
        try{
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth`, {
                username: event.target.username.value,
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value
            });
            navigate(PathConstants.LOGIN)
        }catch(err){
            console.log(err);
            alert('some error occured!')
            window.location.reload()
        }finally{
            setLoading(false)
        }
    }

    return (
        <>
        <form method="post" className="container" aria-label="login form" onSubmit={submitHandler}>
            <img src={dark ? logo.dark: logo.light} alt="X icon" className="x-logo" />
            <div className="form">
                <Typography variant="h1" gutterBottom fontWeight={500}>Twitter</Typography>
                <input type="text" name="username" placeholder="Username" className="login-field" />
                <input type="text" name="name" placeholder="Name" className="login-field" />
                <input type="text" name="email" placeholder="E-Mail" className="login-field" />
                <input type="password" name="password" placeholder="Password" className="login-field" />
                <input type="password" placeholder="Confirm Password" className="login-field" />
                <button type="submit" className="login-btn">
                    {loading ? <Loading width={25} height={25} type="spin"/> : "Signup"}
                </button>
                <Link to={PathConstants.LOGIN} rel="noopener noreferrer">Already a user?</Link>
            </div>
        </form>
        </>
    )
}

export default Signup