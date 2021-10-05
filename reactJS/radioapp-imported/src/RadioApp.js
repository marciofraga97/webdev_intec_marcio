import React, { useEffect, useState } from 'react'
import './style/style.css'
import Player from './Radioplayer'


function RadioApp() {
    const [radios, setRadios] = useState([])
    const [currentRadio,setCurrentRadio] = useState({})
    useEffect(() => {
        console.log('hello radio')
        //  console.log(radios)
        fetch('http://localhost:4000/radios')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setRadios(data)
            })
    }, [])

    const radioHandler= (radio)=>{
        console.log(radio) // single object received here
        console.log('testing')
        setCurrentRadio(radio)
    }

    return (
        <div>
            <div className="container p-1">
                <div className="column center text-light radiohead">
                    <img src="logo.gif" alt="logo" width="100%" />
                </div>
                <div className="column add-bottom ">
                    <div id="mainwrap" classsName="p-2">

                        <div id="audiowrap" className="p-3">
                            <div id="audio0">
                                <Player currentradio={currentRadio}/>
                            </div>

                        </div>
                        <div id="plwrap" className="text-light">
                            <ul id="plList">
                                {console.log(radios)}

                                {
                                    radios.map(radio => (
                                        // html 
                                        <li key={radio.id} className="plSel bg-secondary mb-1"
                                        style={radio.radio_name === currentRadio.radio_name ? {'color':'yellow'}:null}
                                        onClick={()=>radioHandler(radio)}>
                                            <div className="plItem p-2">
                                                <div className="plTitle">{radio.id}. {radio.radio_name}</div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RadioApp
