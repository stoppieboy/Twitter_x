// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
// import Login from './pages/authentication/Login'
// import Signup from './pages/authentication/Signup'
import Layout from "./components/Layout"
import Page404 from "./pages/Page404"
import routes from "./routes/index"


function App() {

    const router = createBrowserRouter([
      {
        element: <Layout />,
        errorElement: <Page404/>,
        children: routes
      }
    ])

    return (<RouterProvider router={router}/>)
}

export default App