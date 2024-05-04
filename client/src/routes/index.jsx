import React from "react"
import PathConstants from "./PathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const Test = React.lazy(() => import("../pages/testing/test"))
const Login = React.lazy(() => import("../pages/authentication/Login"))
const Signup = React.lazy(() => import("../pages/authentication/Signup"))

const routes = [
    {path: PathConstants.HOME, element: <Home/>},
    {path: PathConstants.LOGIN, element: <Login/>},
    {path: PathConstants.SIGNUP, element: <Signup/>},
    {path: PathConstants.TEST, element: <Test/>}
]

// const delayForDemo = (promise) => {
//     return new Promise(resolve => {
//         setTimeout(resolve, 4000)
//     }).then(() => promise)
// }

export default routes;