import { useState } from "react";
import Header from "./components/Header";
import { FormInitialData } from "./components/Interfaces";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const formInitialData: FormInitialData = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(formInitialData);

  const inputIsValid = userInput.duration >= 1;

  function handelChange(
    inputIdentifier: keyof FormInitialData,
    newValue: number
  ) {
    setUserInput((pervUserInput) => {
      return {
        ...pervUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput onChangeInput={handelChange} userInputState={userInput}></UserInput>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput}></Results>}
    </>
  );
}

export default App;
