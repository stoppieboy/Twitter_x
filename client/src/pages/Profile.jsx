import { useLocation } from "react-router-dom"

const Profile = () => {

    const location = useLocation()
    const user = location.state.user;
    console.log(user);

    return (
        <div className="home-container">
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