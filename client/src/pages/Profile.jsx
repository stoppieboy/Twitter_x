import { useLocation } from "react-router-dom"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {

    const location = useLocation()
    const user = location.state.user;
    console.log(user);

    return (
        <div className="home-container">
            <FontAwesomeIcon icon={faUser} className="text-7xl"/>
            <div>
                {user.username}
            </div>
            <div>
                {user.email}
            </div>
        </div>
    )
}

export default Profile