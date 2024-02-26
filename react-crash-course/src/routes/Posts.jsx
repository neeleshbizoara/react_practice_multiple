// import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList';
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
      <Outlet/>
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
