import React from "react";


function NavBar(){
    return(
        <nav className="navbar">
            <div className="logo_item">
                <i className="bx bx-menu" id="sidebarOpen"></i>
                <h1 className="navbar-brand" href="#">Optica Opção</h1>
            </div>

            <div className="navbar_content">
                <i className="bx bx-log-out"></i>
            </div>
        </nav>
    )
}

export default NavBar