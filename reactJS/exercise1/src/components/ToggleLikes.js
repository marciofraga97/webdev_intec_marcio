import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function ToggleLikes() {

    const [like, setLike] = useState(25)
    const [fav, setFav] = useState(3)

    const [icon, setIcon] = useState(false)

    let incrementLike = () => setLike(like + 1)

    let incrementFav = () => setFav(fav + 1)

    if (like > 25) {
        incrementLike = () => setLike(25)
    }

    if (fav > 3) {
        incrementFav = () => setFav(3)
    }

    return (
        <div onClick={() => setIcon((prevState) => !prevState)}>
            <div onClick={incrementLike}>
                {icon ? <AiFillHeart style={{ "color" : "crimson" }}/> : <AiOutlineHeart/>} {like}
            </div>
        </div>

    )

}

export default ToggleLikes;