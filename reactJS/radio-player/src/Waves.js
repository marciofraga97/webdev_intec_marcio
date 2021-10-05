import React, { Component } from "react";
import "./styles/waves.css";

class Waves extends Component {
    render() {
        return (
            <section>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </section>
        )
    }
}

export default Waves