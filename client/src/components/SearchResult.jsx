/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import PathConstants from "../routes/PathConstants"
import ReactLoading from 'react-loading'
// import { useState } from "react"

const SearchResult = ({user, follow, unfollow}) => {
    
    const navigate = useNavigate()
    // const [followed, setFollowed] = useState(user.followed)

    const clickHandler = () => {
        navigate(PathConstants.PROFILE, {state: {user}})
    }

    const handleFollow = async (e) => {
        e.stopPropagation() // stops event bubbling to the parent's event handler
        if(!user.followed){
            await follow(user._id)
        }else{
            await unfollow(user._id)
        }
        // setFollowed(e => !e)
    }

    return (
        <div className="text-white flex bg-zinc-900 rounded-md m-2 p-4 cursor-pointer justify-between min-w-48 hover:bg-opacity-85" onClick={clickHandler}>
            <div >
                <h2><strong className="text-lg">{user.name}</strong> <span className="text-gray-300 font-light">@{user.username}</span></h2>
                <h3 className="">{user.email}</h3>
            </div>
            { user._id != localStorage.getItem('userID') && 
            <div>
                <button className="follow-btn" onClick={handleFollow}><ReactLoading type="spin" color="black" height={25} width={25}/></button>
            </div>
            }
        </div>
    )
}

export default SearchResult