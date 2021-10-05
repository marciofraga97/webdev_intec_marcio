import React, { useEffect } from 'react';
import { useParams } from "react-router"

function Detail() {
    let {id} = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch()
        .then(res => res.json())
        .then(data)
    })
}