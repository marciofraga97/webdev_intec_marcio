import React from 'react'
import { AiOutlineHeart, AiOutlineStar, AiFillHeart, AiFillStar } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs"
import { BiShare, BiCommentDetail } from "react-icons/bi";

function CommentButtons() {

    return (
        <div className="options d-flex">
            <div className="icon"><BiCommentDetail /></div>
            <div className="icon"><AiOutlineHeart/></div>
            <div className="icon"><AiOutlineStar/></div>
            <div className="icon"><BsBookmarkPlus /></div>
            <div className="icon"><BiShare /></div>
            <div className="last-icon"><AiOutlineNotification /></div>
        </div>
    )
}

{/* <div className="options d-flex">
                                    <div className="icon"><BiCommentDetail /> 1</div>
                                    <div className="icon"><AiOutlineHeart /> {10}</div>
                                    <div className="icon"><AiOutlineStar /> {3}</div>
                                    <div className="icon"><BsBookmarkPlus /></div>
                                    <div className="icon"><BiShare /></div>
                                    <div className="last-icon"><AiOutlineNotification /></div>
                                </div> */}

{/* <div className="options d-flex">
                                            <div className="icon"><BiCommentDetail /> 1</div>
                                            <div className="icon"><AiOutlineHeart /> {3}</div>
                                            <div className="icon"><AiOutlineStar /> {1}</div>
                                            <div className="icon"><BsBookmarkPlus /></div>
                                            <div className="icon"><BiShare /></div>
                                            <div className="last-icon"><AiOutlineNotification /></div>
                                        </div> */}

{/* <div className="options d-flex">
                                                    <div className="icon"><BiCommentDetail /></div>
                                                    <div className="icon"><AiOutlineHeart /> {2}</div>
                                                    <div className="icon"><AiOutlineStar /></div>
                                                    <div className="icon"><BsBookmarkPlus /></div>
                                                    <div className="icon"><BiShare /></div>
                                                    <div className="last-icon"><AiOutlineNotification /></div>
                                                </div> */}

{/* <div className="options d-flex">
                                    <div className="icon"><BiCommentDetail /></div>
                                    <div className="icon"><AiOutlineHeart /> {1}</div>
                                    <div className="icon"><AiOutlineStar /></div>
                                    <div className="icon"><BsBookmarkPlus /></div>
                                    <div className="icon"><BiShare /></div>
                                    <div className="last-icon"><AiOutlineNotification /></div>
                                </div> */}

export default CommentButtons