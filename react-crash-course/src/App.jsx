import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function showModalHandler() {
    setModelIsVisible(true);
  }

  function hideModalHandler() {
    setModelIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modelIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
