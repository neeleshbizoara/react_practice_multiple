import { useRef } from "react";
import { useState } from "react";

export default function Login() {

  // const [emailIsInvalid, setEmailIsInvalid] = useState(false)

  function handelSubmit(event) {
    event.preventDefault();
    // First way
    // console.log(enteredEmail);
    // console.log(passwordEmail);

    // Second way
    // console.log(enteredValue);

    // Third way
    // const emailValue = emailRef.current.value;
    // const passwordValue = passwordRef.current.value;
    // console.log(emailValue);
    // console.log(passwordValue);
    // passwordRef.current.value = '' // Not Recommended

    // //Validation
    // const emailIsValid = emailValue.includes("@");
    // if(!emailIsValid){
    //   setEmailIsInvalid(true)
    //   return;
    // }
  }

  // First way
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [passwordEmail, setPasswordEmail] = useState("");

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setPasswordEmail(event.target.value);
  // }

  // Second way
  // const [enteredValue, setEnteredValue] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  // Validation on input change
  // const emailIsValid =
  //   enteredValue.email != "" && !enteredValue.email.includes("@");

  // Validation on input blur
//   const emailIsValid = didEdit.email != "" && !enteredValue.email.includes("@");

//   function handleInputBlur(identifier) {
//     setDidEdit((prevEdit) => ({
//       ...prevEdit,
//       [identifier]: true,
//     }));
//   }

//   function handleInputChange(identifier, event) {
//     setEnteredValue((prevValues) => ({
//       ...prevValues,
//       [identifier]: event.target.value,
//     }));
// // Valaidation 
//     setDidEdit((prevEdit) => ({
//       ...prevEdit,
//       [identifier]: false,
//     }));
//   }

  // Third way
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <form onSubmit={handelSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            // First way
            // onChange={handleEmailChange}
            // value={enteredEmail}
            // Second way
            // onChange={(event) => handleInputChange("email", event)}
            // value={enteredValue.email}
            // onBlur={() => handleInputBlur("email")}
            // Third way
            ref={emailRef}
          />
          <div className="control-error">
            {/* {emailIsValid && <p>Please enter valid email address</p>} */}
            {/* {emailIsInvalid && <p>Please enter valid email address</p>} */}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // First way
            // onChange={handlePasswordChange}
            // value={passwordEmail}
            // Second way
            onChange={(event) => handleInputChange("password", event)}
            // value={enteredValue.password}
            // Third way
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
        {/* <button type="button" className="button" onClick={handelSubmit}>Login</button> */}
      </p>
    </form>
  );
}
