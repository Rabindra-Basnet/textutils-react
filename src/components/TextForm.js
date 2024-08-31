import React, { useState } from 'react'



export default function TextForm(props) {

    
    const handleUpClick = () => {
        // console.log("UpperCase was clicked" + text)
        setText(text.toUpperCase())
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
    }
    const handleClearClick = () => {
        setText('')
    }
    const handleReverseClick = () => {

        let newText = '';
        for (let index = text.length - 1; index >= 0; index--) {
            newText += text[index];
        }
        setText(newText)
    }
    const handleCapitalize = () => {
        let newText = text.split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ");
        setText(newText);
    }
  
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");

    return (
        <>
            <div class="container">
                <h1>{props.heading}</h1>
                <div class="mb-3">
                    {/* <label htmlFor="myBox" class="form-label">{props.heading}</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="my-3 gap-2 d-inline-flex flex-row align-items-center justify-content-center">
                    <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
                    <button className="btn btn-primary" onClick={handleLoClick}>LowerCase</button>
                    <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary" onClick={handleReverseClick}>Reverse</button>
                    <button className="btn btn-primary" onClick={handleCapitalize}>CapWord</button>
                 
                </div>
            </div>
                <div className="contianer  d-flex flex-column m-2 p-2">
                    <h2>Your text summary </h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} minutes of reading</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
        </>
    )
}
