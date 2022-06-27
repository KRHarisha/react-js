import React from "react"
export default function App()
{
    function handleClick()
    {
        console.log("I was Clicked")
    }
    function handleOnMouseOver()
    {
        console.log("MouseOver")
    }
      /**
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
     */
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" onClick={handOnMouseOver}/>
            <button onClick={handleClick}>Click me</button>

        </div>

    )
}