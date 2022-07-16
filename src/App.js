import { Component } from "react";
import Comment from "./components/Comment";
import { comment } from "./data/Data";
function App() {
   const comment = [
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      id:1,
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/62/62',
      },
    },
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      id:2,
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',

      },
    },
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      id:3,
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',

      },
    },
  ];
  return (

<div>
  {comment.map((item)=>
<Comment author={item.author} text={item.text} date={item.date} key={item.id}/>

  
  )}

</div> 
 );
}

export default App;
