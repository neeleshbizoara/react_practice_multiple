import { styled } from "styled-components";

const Label = styled.label<{ $inValid?: boolean }>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => (props.$inValid ? "#f87171" : "#6b7280")};
`;

// In react Typescript
const Input = styled.input<{ $inValid?: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${(props) => (props.$inValid ? "#fed2d2" : "#d1d5db")};
  color: ${($inValid) => ($inValid ? "#ef4444" : "#374151")};
  border: 1px solid ${({ $inValid }) => ($inValid ? "#f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export default function CustomInput({ label, inValid, ...props }) {
  return (
    <p>
      <Label $inValid={inValid}>{label}</Label>
      <Input $inValid={inValid} {...props}></Input>
    </p>
  );
}
