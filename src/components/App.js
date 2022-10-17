import { useState } from "react";
import video from "../data/video.js";
import TitleBar from "./TitleBar.js";
import Comments from "./Comments.js";
import DownVoteButton from "./DownVoteButton.js";

function App() {

  const [hideStatus, setHideStatus] = useState(false)
  const [upvotes, setUpVotes] = useState(video.upvotes)
  const [downvotes, setDownVotes] = useState(video.downvotes)

  function handleHideClick(){
    setHideStatus(!hideStatus)
  }

  function handleUpVote(){
    setUpVotes(upvotes + 1)
  }

  function handleDownVote(){
    setDownVotes(downvotes + 1)
  }
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src= {video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <TitleBar>
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <button onClick={handleUpVote}>{upvotes}👍</button>
        <button onClick={handleDownVote}>{downvotes}👎</button>
        <br/><br/>
        <button onClick={handleHideClick}>Hide Comments</button>
      </TitleBar>
      {hideStatus? null: <Comments>
        <h2>{video.comments.length} Comments</h2>
        {video.comments.map((comment)=> 
        <>
        <h2>{comment.user}</h2>
        <p>{comment.comment}</p>
        </>

        )}
      </Comments>}

    </div>
  );
}

export default App;
