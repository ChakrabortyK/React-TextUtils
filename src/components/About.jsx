import React, { useState } from 'react'

export default function About() {


    const [myStyle, setMyStyle] = useState({
        backgroundColor: 'black',
        color: 'white',
    })

    const [btnText, setBtnText] = useState("Light")

    const toggleStyle = () => {
        if (myStyle.backgroundColor === 'black') {
            setMyStyle({

                backgroundColor: 'white',
                color: 'black',

            })
            setBtnText('Dark')
        } else {
            setMyStyle({

                backgroundColor: 'black',
                color: 'white',

            })
            setBtnText('Light')
        }
    }

    return (
        <>
            <div className="row py-lg-5" style={myStyle}>
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">About Us</h1>
                    <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>

                </div>
                <button className="btn btn-outline-light" onClick={toggleStyle}>{btnText} Mode</button>
            </div>
        </>
    )
}
