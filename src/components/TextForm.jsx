import React, { useState } from 'react'

export default function TextForm(props) {
    const [first, setFirst] = useState("Enter Text Here");

    const handleUpClick = () => {
        // console.log(first);
        setFirst(first.toUpperCase());
    }

    const handleOnchange = (event) => {
        // console.log("onChange");
        setFirst(event.target.value);
    }
    return (
        <>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="mytextbox" rows="5" value={first} onChange={handleOnchange}></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-3">Convert To Lowercase</button>
        </>
    )
}
