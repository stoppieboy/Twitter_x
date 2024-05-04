import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const user = localStorage.getItem("API_KEY")

    useEffect(() => {
        if(!user){
            console.log('User not logged in.');
            navigate('/login')
        }
    })

    const logoutHandler = () => {
        localStorage.removeItem("API_KEY")
        navigate('/login');
    }

    const fetchData = () => {
        axios.get("http://localhost:3000/api/data", {
            headers: {
                "Authorization": `Bearer ${user}`
            }
        }).then((data) => console.log(data))
    }

    return (
        <div className="flex flex-col gap-8 text-center">
            HOME
            <button className="p-2 rounded-md" onClick={fetchData}>Fetch Data</button>
            <button className="p-2 rounded-md" onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Home