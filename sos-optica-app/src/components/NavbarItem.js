import React from "react";

function NavbarItem(props){
    return(

        <li className="nav-item">
            <a className="nav-link active" href={props.href}>{props.label}
            </a>
        </li>
    )
}
export default NavbarItem