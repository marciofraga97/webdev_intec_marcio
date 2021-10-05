import React from 'react'

function NewsCard() {
    return (
        <div>
            <div className="example-1 card">
                <div className="wrapper">
                    <div className="date">
                        <span className="day">12</span>
                        <span className="month">Aug</span>
                        <span className="year">2016</span>
                    </div>
                    <div className="data">
                        <div className="content">
                            <span className="author">Jane Doe</span>
                            <h1 className="title"><a href="#">Everything You Need to Know About Gold Medals</a></h1>
                            <p className="text">Olympic gold medals contain only about 1.34 percent gold, with the rest composed of sterling silver.</p>
                            <label for="show-menu" className="menu-button"><span></span></label>
                        </div>
                        <input type="checkbox" id="show-menu" />
                        <ul className="menu-content">
                            <li>
                                <a href="#" className="fa fa-bookmark-o"></a>
                            </li>
                            <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
                            <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
