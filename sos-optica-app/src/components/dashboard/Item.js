import React from "react";

function SideBarItem(props){
    return(

        <li className="item">
            <a href={props.href} className="nav_link">
              <span className="navlink_icon">
                <i className={props.icon}></i>
              </span>
                <span className="navlink">{props.label}</span>
            </a>
        </li>

    )
}
export default SideBarItem