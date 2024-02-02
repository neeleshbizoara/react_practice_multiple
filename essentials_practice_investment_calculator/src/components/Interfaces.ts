export interface FormInitialData {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface UserInputProps {
  onChangeInput: (inputIdentifier: keyof FormInitialData, newValue: number) => void;
  userInputState: FormInitialData;
}

export interface ResultsProps {
  input: FormInitialData;
}

