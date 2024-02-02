import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import TextButton from "./TextButton";
import CustomInput from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <CustomInput
          label="Email"
          type="email"
          inValid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />

        <CustomInput
          label="Password"
          type="password"
          inValid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlContainer>
      <div className="actions">
        <TextButton>Create a new account</TextButton>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
