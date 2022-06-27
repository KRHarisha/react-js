import React from "react"
export default function Header()
{
    return (
         <header className="header-cont">
            <img 
                src="https://img.icons8.com/officel/2x/scared-face-meme.png" 
                className="header--image" 
                alt="meme-img"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}