/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import PathConstants from "../routes/PathConstants"

const SearchResult = ({user, follow}) => {
    const navigate = useNavigate()
    // console.log({user})

    const clickHandler = () => {
        navigate(PathConstants.PROFILE, {state: {user}})
    }

    return (
        <div className="text-white flex bg-gray-600 rounded-md m-2 p-4 cursor-pointer hover:shadow-lg shadow-red-500 justify-between min-w-48">
            <div onClick={clickHandler}>
                <h2>{user.username}</h2>
                <h3>{user.email}</h3>
            </div>
            <div>
                <button className="m-2 text-center p-1" onClick={follow}>Follow</button>
            </div>
        </div>
    )
}

export default SearchResult