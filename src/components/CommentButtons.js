import React, {useState}from "react";

function CommentButtons({video}){
    const [likes, setLikes] = useState(video.upvotes)
    const [dislikes, setDislikes] = useState(video.downvotes)

    function handleLike(){
        setLikes((likes)=> likes+1)
    }
    function handleDislike(){
        setDislikes((dislikes)=> dislikes+1)
    }
    return (
    <>
        <button onClick = {handleLike}>Likes ({likes})</button>
        <button onClick = {handleDislike}>Dislikes({dislikes})</button>
    </>
)}


export default CommentButtons