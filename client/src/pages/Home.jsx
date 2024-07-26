import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"
import PathConstants from "../routes/PathConstants"
import "../assets/styles/Home.css"
import Tweet from "../components/Tweet"
import Loading from "../components/Loading"
import Navbar from "../components/Navbar"
import { UserContext } from "../Utility/Contexts"

const Home = () => {

    const [user, setUser] = useState(null)
    const [tweets, setTweets] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const API_TOKEN = localStorage.getItem("API_KEY")

    const user_context_value = useContext(UserContext)

    useEffect(() => {
        console.log("rendered");
        if(!API_TOKEN){
            console.log('User not logged in.');
            navigate(PathConstants.LOGIN)
        }
        console.log("user_context_value", user_context_value)
        setLoading(true)
        // TODO implement caching to prevent loading tweets again and again unnecessarily
        fetchData()
    }, [])

    
    const logoutHandler = () => {
        localStorage.removeItem("API_KEY")
        localStorage.removeItem("userID")
        navigate(PathConstants.LOGIN);
    }

    // TODO make a state called feedLoading and render the feed or the skeleton for the feed based on its value
    const tweetHandler = async() => {
        try{
            const content = document.getElementById("input").innerHTML
            document.getElementById('input').innerHTML = "Tweet..."
            console.log("content extracted from input box:",content);
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/tweet`,{content}, {
                headers: {
                    "Authorization": `Bearer ${API_TOKEN}`
                }
            })
            fetchData()
            console.log('result from posting tweet:',res)
        }catch(err){
            console.log("error:",err);
        }
    }

    // TODO make a state called dataLoading 
    const fetchData = async () => {
        try{
            console.log('trying')
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/data`, {
                headers: {
                    "Authorization": `Bearer ${API_TOKEN}`
                }
            })
            console.log('tried')
            const curr_user = res.data.result.user[0]
            console.log("res data:",curr_user)
            localStorage.setItem("userID", curr_user._id)
            setUser(curr_user)
            setTweets(res.data.result.tweets)
            setLoading(false)
        }catch(err){
            console.log("error in fetching data",err);
            if(err.response.status === 403){
                localStorage.removeItem("API_KEY")
                console.log('redirecting to login page');
                navigate(PathConstants.LOGIN)
            }
        }
    }

    return (
        <div id="home-container">
            <Navbar/>
            <div id="middle-pane">
                <div id="twitter-title">
                    <Typography variant="h1" gutterBottom fontWeight={500}>Twitter</Typography>
                </div>
                <div id="compose-box">  
                    <div id="input" onFocus={(e)=>{if(e.target.innerHTML==="Tweet...") e.target.innerHTML = ""}} onBlur={(e) => {if(e.target.innerHTML ==="") e.target.innerHTML="Tweet..."}}>Tweet...</div>
                    <div className="flex justify-end"><button className="px-6" onClick={tweetHandler}>Post</button></div>
                </div>
                <div id="feed">
                    {loading? <Loading/>: tweets.map((t, id) => (
                        <Tweet tweet={t} key={id}/>
                    ))}
                </div>
            </div>
            <div id="right-side-pane">
                right side bar
                <div>Welcome, {user?.name.split(" ")[0]}</div>
                <div><button className="px-5 mt-2" onClick={logoutHandler}>Logout</button></div>
                {/* <div><button className="p-2 rounded-md w-32" onClick={testFunc}>Test</button></div> */}
            </div>
        </div>
    )
}

export default Home