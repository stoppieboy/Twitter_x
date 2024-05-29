import { NavLink } from "react-router-dom"
import PathConstants from "../routes/PathConstants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHouse, faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {
  return (
    <div id="left-side-pane">
        <img src="/images/big_icon_outline_light.svg" alt="" width="30px"/>
        <NavLink to={PathConstants.HOME} className="nav-item" style={({isActive})=>({color: isActive?"rgb(26, 140, 216)": "white"})}><FontAwesomeIcon icon={faHouse} /></NavLink>
        <NavLink to={PathConstants.SEARCH} className="nav-item" style={({isActive})=>({color: isActive?"rgb(26, 140, 216)": "white"})}><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink>
        <NavLink to={PathConstants.TEST} className="nav-item" style={({isActive})=>({color: isActive?"rgb(26, 140, 216)": "white"})}><FontAwesomeIcon icon={faBell} /></NavLink>
        <NavLink to={PathConstants.TEST} className="nav-item" style={({isActive})=>({color: isActive?"rgb(26, 140, 216)": "white"})}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
        </NavLink>
        <NavLink to={PathConstants.TEST} className="nav-item" style={({isActive})=>({color: isActive?"rgb(26, 140, 216)": "white"})}><FontAwesomeIcon icon={faEnvelope} /></NavLink>
        <NavLink to={PathConstants.TEST} className="nav-item" style={({isActive})=>({color: isActive?"rgb(26, 140, 216)": "white"})}><FontAwesomeIcon icon={faTwitter} /></NavLink>
    </div>
  )
}

export default Navbar