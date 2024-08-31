import React, { useState } from 'react'



export default function TextForm(props) {

    const [text, setText] = useState("");
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

    const handleCopy = () =>{
       var text = document.getElementById("myBox");
        text.select();
        if (!text) {
            alert("No text to copy!");
            return;
          }
        navigator.clipboard.writeText(text.value).then(() => {
            console.log("Text copied to clipboard!");
          }).catch((err) => {
            console.error("Error copying text:", err);
          });
    }

    function handleExtraSpaces(){
        let newTxt = text.split(/[ ]+/)
        setText(newTxt.join(' '))
    }

    return (
        <>
            <div class="container" style={{ color: props.mode === 'dark'? 'white': 'black'}}>
                <h1>{props.heading}</h1>
                <div class="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'dark'? 'white': 'black'}}></textarea>
                </div>
                <div className="my-3 gap-2 d-inline-flex flex-row align-items-center justify-content-center">
                    <button className="btn btn-primary" onClick={handleCapitalize}>CapWord</button>
                    <button className="btn btn-primary" onClick={handleLoClick}>LowerCase</button>
                    <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
                    <button className="btn btn-primary" onClick={handleReverseClick}>Reverse</button>
                    <button className="btn btn-primary" onClick={handleCopy}>CopytoClip</button>
                    <button className="btn btn-primary" onClick={handleExtraSpaces}>RemoveExtraSpace</button>
                    <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>

                 
                </div>
            </div>
                <div className="contianer  d-flex flex-column m-2 p-2" style={{ color: props.mode === 'dark'? 'white': 'black'}}>
                    <h2>Your text summary </h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} minutes of reading</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0?text: "Enter somenting"}</p>
                </div>
        </>
    )
}
