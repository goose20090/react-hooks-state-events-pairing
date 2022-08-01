import React from "react";
import CommentButtons from "./CommentButtons";

function Title({video}){
    
    return (
        <div>
            <h1>{video.title}</h1>
            <span>{video.views} Views | Uploaded {video.createdAt} </span>
            <br></br>
            <CommentButtons video = {video}/>
        </div>
    )
}

export default Title