import React from "react";
import "../components/CommentWrapper.css"

function CommentWrapper(props) {
  return (
    <div className="CommentWrapper">
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date.toLocaleDateString()}</div>
    </div>
  );
}

export default CommentWrapper;
