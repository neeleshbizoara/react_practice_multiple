import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPostes] = useState([]);

  function addPostHandler(postData) {
    // debugger;
    setPostes((existingPost) => {
      return [postData, ...existingPost];
    });
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && 
      <ul className={classes.posts}>
        {posts.map((item) => (
          <Post author={item.author} body={item.body} key={Math.random()} />
        ))}
      </ul>
      }
      {posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}>
        <h2>There are no posts yet.</h2>
        <p>Start adding some!</p></div>}
    </>
  );
}

export default PostsList;
