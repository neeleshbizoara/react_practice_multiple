// import { useState } from 'react';

import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";
// import MainHeader from '../components/MainHeader';

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  // function showModalHandler() {
  //   setModalIsVisible(true);
  // }

  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }

  return (
    <>
      {/* <MainHeader onCreatePost={showModalHandler} /> */}
      <Outlet />
      <main>
        <PostsList
        // isPosting={modalIsVisible}
        // onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
