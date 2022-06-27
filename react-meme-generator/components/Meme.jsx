import React from "react"
import memesData from "../memesData.json"
export default function Meme()
{
        /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
   function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }
    return (
        <form className="form">
            <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Top text" 
                className="form--input" 
            />
            <input 
                type="text" 
                name="" id="" 
                placeholder="Bottom text" 
                className="form--input"  
            />
              <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            
        </form>
    )
}