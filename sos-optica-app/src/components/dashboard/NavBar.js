import React from "react";
import logo from "./images/logoSemFundo.png"
import './style.css'
function NavBar(){
    return(
        <nav className="navbar">
            <div className="logo_item">
                <img src={logo} alt="Optica Opção"></img>
                <i className="bx bx-menu" id="sidebarOpen"></i>
            </div>

            <div className="navbar_content">
                <i className="bx bx-log-out" ></i>
            </div>
        </nav>
    )
}

export default NavBar