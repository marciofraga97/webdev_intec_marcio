// Import modules
import React, { useState, useEffect } from 'react'
import Player from "./RadioPlayer"
import "react-h5-audio-player/lib/styles.css"
import logo from "./cmykradio-logo.png"
import Waves from "./Waves"
import "./styles/styles.css"
import { Col } from 'react-bootstrap'
import Soundwaves from "./img/sound.gif"
import Audio from "./Audio"


// Main structure
function RadioApp() {
    const [radios, setRadios] = useState([])
    const [currentRadio, setCurrentRadio] = useState({})
    useEffect(() => {
        console.log('hello radio')
        //  console.log(radios)
        fetch('http://localhost:4000/radios') // Needs to activate with a fake json-server.
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setRadios(data)
            })
    }, [])

    const radioHandler = (radio) => {
        console.log(radio) // single object received here
        setCurrentRadio(radio)
    }

    return (

        <div>
            <div className="container-fluid">
                <Col sm={2} className="sidebar">
                    <div className="logo-details">
                        <span className="logo_name">
                            <img src={logo} alt="logo" />
                        </span>
                    </div>
                    <ul className="nav-links">
                        {radios.map(radio => (
                            // html 
                            <li key={radio.id} className="plSel"
                                style={radio.name === currentRadio.name ? { 'color': 'white', "backgroundColor": "magenta", "fontWeight": "bold" } : null}
                                onClick={() => radioHandler(radio)}>
                                <div className="plItem d-flex">
                                    <div className="plTitle"><img src={radio.img} alt="radioLogos" style={{ "borderRadius" : "5px" }}></img>
                                    {radio.name}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Col>
            </div>
            <div className="playbar">
                <div className="row">
                    <Col sm={2} className="player p-0">
                        <div id="audiowrap">
                            <div id="audio0">
                                <Player currentradio={currentRadio} />
                            </div>
                        </div>
                    </Col>
                    <Col sm={1} className="logoThumb p-0">
                        <div style={radios.img === currentRadio ? {} : null}></div>
                        <img src={currentRadio.img} alt="" style={{ "width" : "100%", "height" : "53px", "objectFit" : "cover" }}></img>
                    </Col>
                    <Col className="details-1">
                        <p>Currently playing:</p>
                        <div className="details-2 d-flex">
                            <div className="soundwaves">
                                <img src={Soundwaves} alt="soundwaves" style={{ "width": "20px", "marginRight": "7px" }}></img>
                            </div>
                            <div style={radios.name === currentRadio ? { 'color': 'white', "backgroundColor": "magenta", "fontWeight": "bold" } : null}>
                                {currentRadio.name}
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
            <div className="displayBg">
                <Audio currentradio={currentRadio}/>
            </div>
        </div>
    )
}

export default RadioApp