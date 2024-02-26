import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from './Modal';
import classes from "./PostList.module.css";

function PostList({isPosting, onStopPosting}) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  
  return (
    <>
      {isPosting && <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Bizoara" body="Java is awesome!" />
      </ul>
    </>
  );
}

export default PostList;
