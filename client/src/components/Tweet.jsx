/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography } from "@mui/material"
import { faTrash, faUser, faEllipsisV } from "@fortawesome/free-solid-svg-icons"
// import axios from "axios"

const Tweet = (props) => {

    // const clickHandler = () => {
    //     axios.delete("http://localhost:3000/api/tweet",)
    // }

    const { tweet } = props
    return (
        <div className="tweet-container">
            <div className="flex bg-teal pt-3">
                <div className="p-2 mr-2"><FontAwesomeIcon icon={faUser}/></div>
                <div className="flex-grow pb-3">
                    <div className="flex justify-between items-center">
                        <Typography className="tweet-username" variant="body1" sx={{fontWeight: "900"}} >{tweet.username}</Typography>
                        <span className="px-2"><FontAwesomeIcon icon={faEllipsisV} style={{cursor: "pointer"}}/></span>
                    </div>
                    <Typography variant="body2" className="tweet-content">{tweet.content}</Typography>
                </div>
            </div>
        </div>
    )
}

export default Tweet