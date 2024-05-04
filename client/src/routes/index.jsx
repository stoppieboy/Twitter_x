import React from "react"
import PathConstants from "./PathConstants"

const Test = React.lazy(() => import("../pages/testing/test"))
const Login = React.lazy(() => delayForDemo(import("../pages/authentication/Login")))
const Signup = React.lazy(() => import("../pages/authentication/Signup"))

const routes = [
    {path: PathConstants.HOME, element: <Login/>},
    {path: PathConstants.SIGNUP, element: <Signup/>},
    {path: PathConstants.TEST, element: <Test/>}
]

const delayForDemo = (promise) => {
    return new Promise(resolve => {
        setTimeout(resolve, 4000)
    }).then(() => promise)
}

export default routes;