import {  NavLink } from "react-router-dom"
import style from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
            <NavLink to="/product">product</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
