import React from "react"
import airBnbIcon from "../images/air-bnb-icon.png"
import "./style.css"
export default function Navbar()
{
    return (
        <nav>
            <img src={airBnbIcon} alt="Air_bnb_icon" width="130" />
        </nav>
    )
}