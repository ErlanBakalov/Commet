import { Component } from "react";
import Comment from "./components/Comment";
import { comment } from "./data/Data";
function App() {
  return (
    <Comment author={comment.author} text={comment.text} date={comment.date}/>
  );
}

export default App;
