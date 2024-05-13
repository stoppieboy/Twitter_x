/* eslint-disable react/prop-types */
import { Typography } from "@mui/material"

const Tweet = (props) => {

    const { tweet } = props
    return (
        <div className="tweet-container shadow-sm shadow-gray-800">
            <Typography className="tweet-username" variant="h6" gutterBottom>{tweet.username}</Typography>
            <p className="tweet-content">{tweet.content}</p>
        </div>
    )
}

export default Tweet