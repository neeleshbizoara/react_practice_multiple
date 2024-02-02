import { UserInputProps } from "./Interfaces";

function UserInput({ onChangeInput, userInputState }: UserInputProps) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInputState.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", Number(event.target.value))
            }
            required
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInputState.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", Number(event.target.value))
            }
            required
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInputState.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", Number(event.target.value))
            }
            required
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInputState.duration}
            onChange={(event) =>
              onChangeInput("duration", Number(event.target.value))
            }
            required
          ></input>
        </p>
      </div>
    </section>
  );
}

export default UserInput;
