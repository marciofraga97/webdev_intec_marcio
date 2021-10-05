import React, { useEffect, useState } from 'react'
import SocialButtons from './components/SocialButtons';
import CommentButtons from './components/CommentButtons';
import { Card, Button, Badge, OverlayTrigger, Tooltip } from "react-bootstrap"
// import Cat from "./img/hang-niu-Tn8DLxwuDMA-unsplash.jpg"

// CatAPI for custom images: 1750abe2-c6dd-4c5a-ac46-f278704e4a8b


function Post() {

    //Cat images

    const [cat, catPosts] = useState([])

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                catPosts(data)
            })
    }, [])

    return (
        <div>
            <Card className="m-5">
                <Card.Header as="h5">
                    <div className="d-flex">
                        Post #77214
                        <div className="d-flex" style={{ "fontSize": "12px", "marginTop": "9px", "marginLeft": "5px" }}>
                            <a href="/denebbeet">denebbeet</a>
                            <div style={{ "marginLeft": "4px", "color": "grey" }}>on September 23, 2021 / 12:01 AM</div>
                        </div>
                        <SocialButtons />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        look at this image of my cat! 🐱
                    </Card.Title>
                    <hr></hr>
                    <Card.Text>
                        I found this image when I was seeing my gallery to clean up my phone and then I found this treasure
                        <br></br>
                        <br></br>
                        decided to share with you y'all to make your day or whatever
                        <br></br>
                        <br></br>
                        I mean seriously, what is my cat doing!? It's so funny lookin'
                        <br></br>
                        <br></br>
                        <>
                            {['top'].map((placement) => (
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}>
                                            Refresh the page. Trust me. :)
                                        </Tooltip>
                                    }
                                >
                                    <img src={
                                        cat.map((e) => e.url)
                                    } alt="cat" id="cat"></img>

                                </OverlayTrigger>
                            ))}
                        </>
                    </Card.Text>
                    <hr></hr>
                    <div className="tags">
                        <b>Tags</b>:{" "}
                        <Badge pill style={{ "backgroundColor": "pink" }}><a href="#">#cute</a></Badge>{' '}
                        <Badge pill style={{ "backgroundColor": "yellow" }}><a href="#">#funny</a></Badge>{' '}
                        <Badge pill variant="primary"><a href="/cute">#random</a></Badge>{' '}
                        <Badge pill style={{ "backgroundColor": "orange" }}><a href="#">#cats</a></Badge>{' '}
                        <Badge pill style={{ "backgroundColor": "lightgreen" }}><a href="#">#MadeMyDay</a></Badge>{' '}
                        <Badge pill style={{ "backgroundColor": "yellow" }}><a href="#">#LMAO</a></Badge>{' '}
                    </div>
                </Card.Body>
                <Card.Footer>
                    <h5 id="CommentSection">Post a comment</h5>
                    <textarea disabled className="form-control" aria-label="With textarea" placeholder="You need to login to comment this post."></textarea>
                    <Button disabled variant="outline-info" className="send mt-2">Post</Button>
                </Card.Footer>
                <Card.Body>
                    <h5 className="mb-4">4 Comments</h5>
                    <Card>
                        <Card.Header>
                            <div className="d-flex">
                                <div className="d-flex" style={{ "fontSize": "12px" }}>
                                    <a href="/denebbeet" style={{ "fontWeight": "bold", "marginRight": "4px" }}>Cloverlog</a> replied <div style={{ "marginLeft": "4px", "color": "grey" }}>on September 23, 2021 / 2:11 PM:</div>
                                </div>
                                <CommentButtons />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                lol this is cute! keep it comin' those images 😸😸😸
                            </Card.Text>
                            <Button disabled variant="outline-info">Reply</Button>
                        </Card.Body>
                        <Card.Footer>
                            <Card>
                                <Card.Header>
                                    <div className="d-flex">
                                        <div className="d-flex" style={{ "fontSize": "12px" }}>
                                            <a href="/denebbeet" style={{ "fontWeight": "bold", "marginRight": "4px" }}>denebbeet</a> replied to <a href="/denebbeet" style={{ "fontWeight": "bold", "marginLeft": "4px" }}>Cloverlog</a> <div style={{ "marginLeft": "4px", "color": "grey" }}>on September 23, 2021 / 2:27 PM</div>:
                                        </div>
                                        <CommentButtons />
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        lmao thanks! ✨
                                    </Card.Text>
                                    <Button disabled variant="outline-info">Reply</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <Card>
                                        <Card.Header>
                                            <div className="d-flex">
                                                <div className="d-flex" style={{ "fontSize": "12px" }}>
                                                    <a href="/denebbeet" style={{ "fontWeight": "bold", "marginRight": "4px" }}>Cloverlog</a> replied to <a href="/denebbeet" style={{ "fontWeight": "bold", "marginLeft": "4px" }}>denebeet</a> <div style={{ "marginLeft": "4px", "color": "grey" }}>on September 23, 2021 / 2:28 PM</div>:
                                                </div>
                                                <CommentButtons />
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                yr welcome! 👍
                                            </Card.Text>
                                            <Button disabled variant="outline-info">Reply</Button>
                                        </Card.Body>
                                    </Card>
                                </Card.Footer>
                            </Card>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Header>
                            <div className="d-flex">
                                <div className="d-flex" style={{ "fontSize": "12px" }}>
                                    <a href="/denebbeet" style={{ "fontWeight": "bold", "marginRight": "4px" }}>MemeMaster1234</a>replied <div style={{ "marginLeft": "4px", "color": "grey" }}>on September 23, 2021 / 4:19 PM</div>:
                                </div>
                                <CommentButtons />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                YO DIS MAD FUNNY HAHAHA LEZ GOOOO XXDD
                            </Card.Text>
                            <Button disabled variant="outline-info">Reply</Button>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </div >
    )
}

export default Post
