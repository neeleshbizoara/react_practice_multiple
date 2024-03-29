// import { useEffect, useState } from "react";

import Post from "./Post";
// import NewPost from "../routes/NewPost";
// import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  const posts =  useLoaderData();

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
      
  //     if(!response.ok) {
  //       throw new Error('Some thing wrong');
  //       //Need to implement 
  //     }
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  /* function addPostHandler(postData) {
    const response = fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPost) => {
      return [postData, ...existingPost];
    });
  } */
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((item) => (
            <Post author={item.author} id={item.id} body={item.body} key={item.id} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
{/* 
      {isFetching && <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>} */}
    </>
  );
}

export default PostsList;
