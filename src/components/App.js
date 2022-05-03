import React, {useState} from "react";
import video from "../data/video.js";
import Youtube from "./Youtube.js";
import Info from "./Info.js";
import Buttons from "./Buttons.js";
import CommentsList from "./CommentsList.js";

function App() {

  const [isHideComments, setIsHideComments] = useState(true)

  function handleHideComments() {
    setIsHideComments((isHideComments) => !isHideComments)
  }

  return (
    <div className="App">
      <Youtube embedUrl={video.embedUrl}/>
      <Info title={video.title} views={video.views} createdAt={video.createdAt}/>
      <Buttons upvotes={video.upvotes} downvotes={video.downvotes} isHideComments={isHideComments} handleHideComments={handleHideComments}/>
      <CommentsList comments={video.comments} isHideComments={isHideComments} handleHideComments={handleHideComments}  />
    </div>
  )
}

export default App;
