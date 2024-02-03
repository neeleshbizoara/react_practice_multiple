import { useState } from "react";

export default function Binding() {
    const [inputValue, setInputValue] = useState('');
    const [displayedValue, setDisplayedValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleButtonClick = () => {
      // Set the displayed value to the current input value
      setDisplayedValue(inputValue);
    };
  
    return (
      <div id="app">
        <p>Please enter a value:</p>
        <p>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleButtonClick}>Show Value</button>
        </p>
        {displayedValue && (
          <p>Displayed Value: {displayedValue}</p>
        )}
      </div>
    );
}