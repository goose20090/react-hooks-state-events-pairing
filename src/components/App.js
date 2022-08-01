import video from "../data/video.js";
import Title from "./Title.js";
import Comments from "./Comments.js";
function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title= "Thinking in React"
      />
      <Title video = {video} />
      <Comments video = {video}/>
    </div>
  );
}

export default App;
