import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import "../styles/news.css"
import { Row } from "react-bootstrap"

function Homepage() {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=be&apiKey=5d60ed93aa9c4c11a0606bca1c61de45")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setNews(data)
        })
    }, [])


    return (
        <div id="homepage">
            <h1 className="text-center">Be aware of what's happening today</h1>
            <Row>
                
            </Row>
            <NewsCard/>
        </div>
    )
}

export default Homepage