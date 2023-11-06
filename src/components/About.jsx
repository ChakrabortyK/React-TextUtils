import React from 'react'

export default function About(props) {

    return (
        <>
            <div className="row py-lg-5"  >
                <div className="col-lg-6 col-md-8 mx-auto" style={{
                    backgroundColor: props.mode === 'light' ? '#fff' : '#565656',
                    color: props.mode === 'dark' ? '#fff' : '#565656'
                }} >
                    <h1 className="fw-light" tyle={{
                        backgroundColor: props.mode === 'light' ? '#fff' : '#565656',
                        color: props.mode === 'dark' ? '#fff' : '#565656'
                    }}>About Us</h1>
                    <p className="lead " tyle={{
                        backgroundColor: props.mode === 'light' ? '#fff' : '#565656',
                        color: props.mode === 'dark' ? '#fff' : '#00000'
                    }}>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>

                </div>
            </div>
        </>
    )
}
