import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, Tooltip, OverlayTrigger, Button } from "react-bootstrap"
import cmykLogo from "../images/CMYKDeflogo_white_cmyk.svg"

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Go back to portfolio
    </Tooltip>
);

function NavLinks() {
    return (
        <Navbar className="m-0 border-bottom">
            <Container fluid className="m-0">
                <Navbar.Brand>
                    <Link to="/">
                        <img alt="" src="https://img.icons8.com/ios-glyphs/64/FFFFFF/sandbox2.png" width="25" height="25" className="d-inline-block mr-1" id="logo" />
                        <span style={{ "color": "cyan" }}>c</span>
                        <span style={{ "color": "magenta" }} id="magenta">m</span>
                        <span style={{ "color": "yellow" }} id="magenta">y</span>
                        <span style={{ "color": "white" }} id="magenta">k</span>
                        <b>SandBox</b>
                    </Link>
                </Navbar.Brand>
                <Nav.Link id="cyan" href="/">Home</Nav.Link>
                <Nav.Link id="magenta" href="/weather">Weather</Nav.Link>
                <Nav.Link id="yellow" href="/trivia">Trivia</Nav.Link>
                <Nav.Link id="black" href="/about">About</Nav.Link>
                <Nav.Link id="white" href="/contact">Contact</Nav.Link>
                {/* <Nav.Link id="cmyk" to=""></Nav.Link> */}
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 200, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <Button variant="none"><img alt="" src={cmykLogo} width="70"></img></Button>
                </OverlayTrigger>
            </Container>
        </Navbar>
    )
}

export default NavLinks



//What if you want to place images inside of a json file? ---> "style"=({"cssStyleHere":`url(${jsonDataName.objectName})`})



/*
Example: https://newsapi.org/v2/top-headlines?country=us&apiKey=5d60ed93aa9c4c11a0606bca1c61de45

/v2/top-headlines
--> ? : https://stackoverflow.com/questions/33041449/what-is-the-meaning-of-question-mark-in-a-url-string#:~:text=The%20question%20mark%20(%22%3F%22,applied%20to%20the%20original%20object.
--> country=ISO: The country you want to get (for instance, we use "be")
--> &apikey=API : You need to insert your API key in this url.

API:5d60ed93aa9c4c11a0606bca1c61de45

API from Open Trivia Database: https://opentdb.com/api.php?amount=10&encode=url3986

OpenWeather:
Example: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
--> city name needs to be "brussels"
API:478ffb28c66056439168627578c5d45c
*/