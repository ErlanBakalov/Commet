import CommentWrapper from "./CommentWrapper";
import UserInfo from "./UserInfo";
import "../components/Comment.css";

const Comment = (props) => {
  return (
    <div className="commentContent">
      <div className="Comment">
        <UserInfo author={props.author} />
        <CommentWrapper text={props.text} date={props.date} />
      </div>
    </div>
  );
};
export default Comment;
