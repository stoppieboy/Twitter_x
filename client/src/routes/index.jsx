import React from "react"
import PathConstants from "./PathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const Test = React.lazy(() => import("../pages/testing/test"))
const Login = React.lazy(() => import("../pages/authentication/Login"))
const Signup = React.lazy(() => import("../pages/authentication/Signup"))
const Search = React.lazy(() => import("../pages/SearchPage"))
const Profile = React.lazy(() => import("../pages/Profile"))

const routes = [
    {path: PathConstants.HOME, element: <Home/>},
    {path: PathConstants.LOGIN, element: <Login/>},
    {path: PathConstants.SIGNUP, element: <Signup/>},
    {path: PathConstants.TEST, element: <Test/>},
    {path: PathConstants.SEARCH, element: <Search/>},
    {path: PathConstants.PROFILE, element: <Profile/>}
]

// const delayForDemo = (promise) => {
//     return new Promise(resolve => {
//         setTimeout(resolve, 4000)
//     }).then(() => promise)
// }

export default routes;