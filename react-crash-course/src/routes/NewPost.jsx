// import { useState } from "react";

import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

function NewPost() {
  // const [enteredBody, setEnteredBody] = useState("");
  // const [enteredAuthor, setEnteredAuthor] = useState("");

  // function bodyChangeHandler(event) {
  //   setEnteredBody(event.target.value);
  // }

  // function authorChangeHandler(event) {
  //   setEnteredAuthor(event.target.value);
  // }

  // function submitHandler(event) {
  //   event.preventDefault();
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor,
  //   };
    
  // }

  return (
    <Modal>
      {/* <form className={classes.form} onSubmit={submitHandler}> */}
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
          {/* <textarea id="body" required rows={3} onChange={bodyChangeHandler} /> */}
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="author"
            required
          />
          {/* <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          /> */}
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;


export async function action(data) {
  const formData = await data.request.formData();
  // formData.get()
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // if(!response.ok) { handel error}

    return redirect('/')
}