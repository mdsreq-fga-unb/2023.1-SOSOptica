import React from "react";
import NavbarItem from "./NavbarItem";

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style={{height : "50px"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Optica Opção</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <NavbarItem href="/#" label = "Home"></NavbarItem>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar