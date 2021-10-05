import React, { useState } from 'react'
import { AiFillHeart, AiOutlineNotification } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs"
import { BiShare, BiCommentDetail } from "react-icons/bi";

import ToggleLikes from "./ToggleLikes"
import ToggleFavs from "./ToggleFavs"

function SocialButtons() {

    return (
        <div className="options d-flex">
            <div className="icon"><a href="#CommentSection"><BiCommentDetail /> 4</a></div>
            <div className="icon"><ToggleLikes/></div>
            <div className="icon"><ToggleFavs/></div>
            <div className="icon"><BsBookmarkPlus /></div>
            <div className="icon"><BiShare /></div>
            <div className="last-icon"><AiOutlineNotification /></div>
        </div>
    )
}

// {
//     
// }

export default SocialButtons