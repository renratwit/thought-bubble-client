import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavBarElements/NavbarElements.js"
import "../style/navbar.css"

export default function NavBar() {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Thought Bubble</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/login" activeStyle>
                    Log Out
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}
