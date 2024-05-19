import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import { Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faMagnifyingGlass, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import PathConstants from "../routes/PathConstants"
import "../assets/styles/Home.css"
import Tweet from "../components/Tweet"
import Loading from "../components/Loading"

const Home = () => {

    const [username, setUsername] = useState(null)
    const [tweets, setTweets] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const user = localStorage.getItem("API_KEY")

    useEffect(() => {
        console.log("rendered");
        if(!user){
            console.log('User not logged in.');
            navigate(PathConstants.LOGIN)
        }
        fetchData()
    }, [])

    
    const logoutHandler = () => {
        localStorage.removeItem("API_KEY")
        navigate(PathConstants.LOGIN);
    }

    const tweetHandler = async() => {
        try{
            const content = document.getElementById("input").innerHTML
            document.getElementById('input').innerHTML = "Tweet..."
            console.log("content extracted from input box:",content);
            const res = await axios.post("http://localhost:3000/api/tweet",{content}, {
                headers: {
                    "Authorization": `Bearer ${user}`
                }
            })
            // tweets.push({username: "Shivam", content})
            fetchData()
            // setTweets(tweets => [{username: "shivam", content: content}, ...tweets]) 
            console.log('result from posting tweet:',res)
        }catch(err){
            console.log("error:",err);
        }
    }

    const fetchData = async () => {
        try{
            await axios.get("http://localhost:3000/api/data", {
                headers: {
                    "Authorization": `Bearer ${user}`
                }
            }).then((res) => {
                console.log(res.data);
                setUsername(res.data.result.username)
                // MARK: fetching the tweets
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

    const testFunc = () => {
        console.log("test click detected");
        setUsername("testing")
    }

    return (
        <div id="home-container">
            {/* <h1>Welcome {username}</h1>
            HOME
            <div><button className="p-2 rounded-md w-32" onClick={fetchData}>Fetch Data</button></div>
            <div><button className="p-2 rounded-md w-32" onClick={logoutHandler}>Logout</button></div> */}
            <div id="left-side-pane">
                <img src="/images/big_icon_outline_light.svg" alt="" width="30px"/>
                <NavLink to={PathConstants.HOME} className="nav-item" style={({isActive})=>({color: isActive?"rgb(26, 140, 216)": "white"})}><FontAwesomeIcon icon={faHouse} /></NavLink>
                <NavLink to={PathConstants.SEARCH} className="nav-item" style={({isActive})=>({color: isActive?"rgb(26, 140, 216)": "white"})}><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink>
                <NavLink to={PathConstants.TEST} className="nav-item" style={({isActive})=>({color: isActive?"rgb(26, 140, 216)": "white"})}><FontAwesomeIcon icon={faEnvelope} /></NavLink>
                <NavLink to={PathConstants.TEST} className="nav-item" style={({isActive})=>({color: isActive?"rgb(26, 140, 216)": "white"})}><FontAwesomeIcon icon={faTwitter} /></NavLink>
            </div>
            <div id="middle-pane">
                <div id="twitter-title">
                    <Typography variant="h1" gutterBottom fontWeight={500}>Twitter</Typography>
                </div>
                <div id="compose-box">  
                    <div id="input" onFocus={(e)=>{if(e.target.innerHTML==="Tweet...") e.target.innerHTML = ""}} onBlur={(e) => {if(e.target.innerHTML ==="") e.target.innerHTML="Tweet..."}}>Tweet...</div>
                    <div className="flex justify-end"><button className="p-2 rounded-md w-32" onClick={tweetHandler}>Tweet</button></div>
                </div>
                <div id="feed">
                    {loading? <Loading/>: tweets.map((t, id) => (
                        <Tweet tweet={t} key={id}/>
                    ))}
                </div>
            </div>
            <div id="right-side-pane">
                right side bar
                <div><button className="p-2 rounded-md w-32" onClick={logoutHandler}>Logout</button></div>
                <div><button className="p-2 rounded-md w-32" onClick={testFunc}>Test</button></div>
            </div>
        </div>
    )
}

export default Home