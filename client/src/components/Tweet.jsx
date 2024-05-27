/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography } from "@mui/material"
import { faUser, faEllipsisV } from "@fortawesome/free-solid-svg-icons"
// import moment from 'moment'
// import axios from "axios"

const Tweet = (props) => {

    // const clickHandler = () => {
    //     axios.delete("http://localhost:3000/api/tweet",)
    // }

    const { tweet } = props
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const date = new Date(tweet.createdAt)
    var time = [Math.round((new Date().getTime() - date.getTime())/(1000)), 's']

    if(time[0] >= 60){
        time[0] = time[0]/60
        time[1] = 'm'
        console.log(time[0]);
        if(time[0] >= 60){
            time[0] = time[0]/60
            time[1] = 'h'
            if(time[0] >= 60){
                time[0] = time[0]/24
                time[1] = 'd'
                if(time[0] >= 3){
                    time[0] = month[date.getMonth()]+" "+date.getDate()
                    time[1] = ""
                }
            }
        }
    }
    // if(time[0] >= 7){
        //     time[0] = Math.round(time[0]/7)
    //     time[1] = 'w'
    // }

    const timeString = time[1] === "" ? time[0]+time[1] : Math.round(time[0])+time[1]

    return (
        <div className="tweet-container">
            <div className="flex bg-teal pt-3">
                <div className="p-2 mr-2"><FontAwesomeIcon icon={faUser}/></div>
                <div className="flex-grow pb-3">
                    <div className="flex justify-between items-center">
                        <p className="w-fit font-poppins"> <span className="font-bold">{tweet.name}</span> <span className="text-gray-400 font-light">@{tweet.username} • {timeString}</span></p>
                        <span className="px-2"><FontAwesomeIcon icon={faEllipsisV} style={{cursor: "pointer"}}/></span>
                    </div>
                    <Typography variant="body2" className="tweet-content">{tweet.content}</Typography>
                    {/* <Typography variant="body2"> {date.getHours()+":"+date.getMinutes()+" "+date.getDate()+" "+date.toLocaleString('default', { month: 'long' })+" "+date.getFullYear()}</Typography> */}
                </div>
            </div>
        </div>
    )
}

export default Tweet