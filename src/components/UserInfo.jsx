import Avatar from "./Avatar"
import "../components/UserInfo.css"

const UserInfo = (props) => {
    return (
<div className="UserInfo">
        <Avatar author={props.author}/>
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
    )
}

export default UserInfo