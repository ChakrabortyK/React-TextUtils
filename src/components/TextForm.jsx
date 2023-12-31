import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {

        setText(text.toUpperCase());
        props.showAlert("Text Changed to UpperCase", "UPPER", "success");
    }

    const handleLoClick = () => {

        setText(text.toLowerCase());
        props.showAlert("Text Changed to LowerCase", "lower", "success");
    }

    const handleDelClick = () => {
        let delText = text.replace(/\s/g, '');
        setText(delText);
        props.showAlert("Text deleted", "DELETED", "danger");
    }

    const handleOnchange = (event) => {
        // console.log("onChange");
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("mytextbox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "COPIED", "success");
    }

    // avg 300 words per min so 5 words per second
    //300=>1min  1=> 0.0033mins
    return (
        <>
            <div className="container"
                style={{
                    backgroundColor: props.mode === 'light' ? '#fff' : '#565656',
                    color: props.mode === 'dark' ? '#fff' : '#565656'
                }}>

                <h2>{props.heading}</h2>

                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="mytextbox"
                        rows="10"
                        value={text}
                        onChange={handleOnchange}
                        style={{
                            backgroundColor: props.mode === 'light' ? '#fff' : '#565656',
                            color: props.mode === 'dark' ? '#fff' : '#565656'
                        }}>

                    </textarea>
                </div>
                <button className="btn btn-outline-danger mx-3 my-2" disabled={text.length === 0} onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-outline-danger mx-3 my-2" disabled={text.length === 0} onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-outline-danger mx-3 my-2" disabled={text.length === 0} onClick={handleDelClick}>Delete Spaces</button>
                <button className="btn btn-outline-danger mx-3 my-2" disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3"
                style={{
                    backgroundColor: props.mode === 'light' ? '#fff' : '#565656',
                    color: props.mode === 'dark' ? '#fff' : '#565656'
                }}>
                <h2>The Data About your Text</h2>
                <p className='my-0'>Words: {text.split(/\s/).filter(element => { return element.length !== 0 }).length}</p>
                <p>Characters: {text.length}</p>
                <p>minutes to read given text: {text.split(/\s/).filter(element => { return element.length !== 0 }).length * 0.0042} Mins</p>
            </div>
        </>
    )
}
