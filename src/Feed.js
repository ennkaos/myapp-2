import React,{useState} from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOptions from "./InputOptions.js"
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from "./Post.js"

function Feed() {
    const[posts,setPosts]=useState([]);
    const sendPost=e=>{
        e.preventDefault()
    }
    return (
        <div className="feed">
            <div className="feed__InputContainer">
               <div className="feed__input">
                    <CreateIcon/>
                    <form>
                    <input type="text" /> 
                    <button onClick={sendPost} type="submit">Send</button>
                    </form>
                   
                </div> 
                 <div className="feed__inputOptions">
                     <InputOptions Icon={ImageIcon} title="Photo" color="lightblue" />
                     <InputOptions Icon={YouTubeIcon} title="Video" color="lightgreen" />
                     <InputOptions Icon={EventIcon} title="Event" color="orange" />
                     <InputOptions Icon={AssignmentIcon} title="Write article" color="darkorange" />
                </div>   
            </div>
            {posts.map((post)=>{
                <Post/>
            })}
            <Post name="Bucur Alexandru" description="This is a test" message="This worked"/>
        </div>
    )
}

export default Feed
