import React from "react"
import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { cardData } from "./data"
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cardgrid">
                {cardData.map((item,index) => {
                    return <Card {...item} key={index} />
                })}
            </div>
        </div>
    )
}