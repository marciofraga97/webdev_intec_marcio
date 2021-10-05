import { useState } from 'react';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function ToggleLikes() {

    const [fav, setFav] = useState(3)
    const [icon, setIcon] = useState(false)

    let incrementFav = () => setFav(fav + 1)

    if (fav > 3) {
        incrementFav = () => setFav(3)
    }

    return (
        <div onClick={() => setIcon((prevState) => !prevState)}>
            <div onClick={incrementFav}>
                {icon ? <AiFillStar style={{ "color" : "gold" }}/> : b} {fav}
            </div>
        </div>

    )

}

export default ToggleLikes;