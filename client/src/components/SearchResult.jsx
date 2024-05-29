/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import PathConstants from "../routes/PathConstants"
import { useState } from "react"

const SearchResult = ({user, follow}) => {
    const navigate = useNavigate()
    // console.log({user})
    const [followed, setFollowed] = useState(false)

    const clickHandler = () => {
        navigate(PathConstants.PROFILE, {state: {user}})
    }

    const handleFollow = () => {
        if(!followed ){
            follow(user._id)
        }
        setFollowed(e => !e)
    }

    return (
        <div className="text-white flex bg-zinc-900 rounded-md m-2 p-4 cursor-pointer justify-between min-w-48">
            <div onClick={clickHandler}>
                <h2><strong className="text-lg">{user.name}</strong> <span className="text-gray-300 font-light">@{user.username}</span></h2>
                <h3 className="">{user.email}</h3>
            </div>
            <div>
                <button className="m-2 text-center p-2 rounded-md font-bold shadow-md" onClick={handleFollow}>{followed?"Unfollow":"Follow"}</button>
            </div>
        </div>
    )
}

export default SearchResult