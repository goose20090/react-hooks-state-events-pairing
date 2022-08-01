import React from "react";

function Comments({video}){
    let comments = video.comments

    return(
        <div>
            <h2>{comments.length} Comments</h2>
            {comments.map((comment)=> 
            <div>
                <h4>{comment.user}</h4>
                <p>{comment.comment}</p>
            </div>)}
        </div>
    )
}

export default Comments