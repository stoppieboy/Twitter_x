import { useLocation } from "react-router-dom"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";

const Profile = () => {

    const location = useLocation()
    const user = location.state.user;
    console.log(user);

    return (
        // <div className="flex flex-shrink-0 basis-[100vw] h-[100vh] max-w-[1300px]">
        <div id="home-container">
            <Navbar/>
            <div className="flex-grow">
                <FontAwesomeIcon icon={faUser} className="text-7xl"/>
                <div>
                    {user.username}
                </div>
                <div>
                    {user.email}
                </div>
            </div>
        </div>
    )
}

export default Profile