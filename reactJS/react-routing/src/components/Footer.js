import React from "react";
import { Navbar, NavLink } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap"
import Jumbotron from "react-bootstrap/Jumbotron"
import cmykLogo from "../images/CMYKDeflogo_white_cmyk.svg"

function Footer() {
    return (
        <div>
            <Jumbotron p-2 className="border-top">
                <Container>
                    <Row>
                        <Col>
                            <img alt="" src={cmykLogo} width="100" className="mb-4"></img>
                            <Navbar>
                                <ul>
                                    <li><a href="#"><img src="https://img.icons8.com/ios-glyphs/20/ffffff/portfolio.png"/>{'\u00A0'}Portfolio</a></li>
                                    <li><a href="#"><img src="https://img.icons8.com/ios-glyphs/20/ffffff/radio.png"/>{'\u00A0'}cmykRadio</a></li>
                                </ul>
                            </Navbar>
                        </Col>
                        <Col>
                            <h4>Follow me on:</h4>
                            <Navbar>
                                <ul>
                                    <li><Button id="twitter"><img src="https://img.icons8.com/ios-glyphs/18/ffffff/twitter--v1.png"/>   Twitter</Button></li>
                                    <li><Button id="instagram" style={{ "fontSize": "11px" }}><img src="https://img.icons8.com/material-rounded/18/ffffff/instagram-new.png"/>   Instagram</Button></li>
                                </ul>
                            </Navbar>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <div id="author" className="text-center">2020 Marcio Fraga</div>
                        </Col>
                    </Row>
                </Container>

            </Jumbotron>
        </div>
    )
}

export default Footer