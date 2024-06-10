import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"
import PathConstants from "../routes/PathConstants"
import "../assets/styles/Home.css"
import Tweet from "../components/Tweet"
import Loading from "../components/Loading"
import Navbar from "../components/Navbar"

const Home = () => {

    const [user, setUser] = useState(null)
    const [tweets, setTweets] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const API_TOKEN = localStorage.getItem("API_KEY")

    useEffect(() => {
        console.log("rendered");
        if(!API_TOKEN){
            console.log('User not logged in.');
            navigate(PathConstants.LOGIN)
        }
        setLoading(true)
        // TODO implement caching to prevent loading tweets again and again unnecessarily
        fetchData()
    }, [])

    
    const logoutHandler = () => {
        localStorage.removeItem("API_KEY")
        localStorage.removeItem("user")
        navigate(PathConstants.LOGIN);
    }

    // TODO make a state called feedLoading and render the feed or the skeleton for the feed based on its value
    const tweetHandler = async() => {
        try{
            const content = document.getElementById("input").innerHTML
            document.getElementById('input').innerHTML = "Tweet..."
            console.log("content extracted from input box:",content);
            const res = await axios.post("http://localhost:3000/api/tweet",{content}, {
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
            await axios.get("http://localhost:3000/api/data", {
                headers: {
                    "Authorization": `Bearer ${API_TOKEN}`
                }
            }).then((res) => {
                // console.log(res.data);
                setUser(res.data.result.user)
                localStorage.setItem("userID", res.data.result.user._id)
                console.log("user:",user);
                setTweets(res.data.result.tweets)
            })
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
                <div>{user?.name}</div>
                <div><button className="px-5 mt-2" onClick={logoutHandler}>Logout</button></div>
                {/* <div><button className="p-2 rounded-md w-32" onClick={testFunc}>Test</button></div> */}
            </div>
        </div>
    )
}

export default Home