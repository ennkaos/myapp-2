import React from 'react'
import "./Post.css"
import {Avatar} from "@material-ui/core"
import InputOptions from "./InputOptions.js"
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({name,description,message,photoUrl,}) {
    return (
        <div className="post">
            <div  className="post__header">
                <Avatar/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOptions  Icon={ ThumbUpOutlinedIcon }  title="Like" color="grey"/>
                <InputOptions  Icon={ ChatBubbleOutlineOutlinedIcon }  title="Comment" color="grey"/>
                <InputOptions  Icon={ ShareOutlinedIcon }  title="Share" color="grey"/>
                <InputOptions  Icon={ SendOutlinedIcon }  title="Send" color="grey"/>
            </div>
        </div>
    )
}

export default Post 
