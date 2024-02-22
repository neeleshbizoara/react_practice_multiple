import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    // const helloWorldELement = screen.getByText('Hello World', {exact: false})
    const helloWorldELement = screen.getByText("Hello World!");
    expect(helloWorldELement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);
    const outputElement = screen.getByText("It's good to see you!");
    expect(outputElement).toBeInTheDocument();

    //Act
    //...nothing

    //Assert
    // const helloWorldELement = screen.getByText('Hello World', {exact: false})
    // const helloWorldELement = screen.getByText("Hello World!");
    // expect(helloWorldELement).toBeInTheDocument();
  });

  test("render 'Changed!' if the button was Clicked", () => {
    render(<Greeting/>);
    
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does NOT render good to see you if the button was clicked", () => {
    render(<Greeting/>);
    
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("It's good to see you!");
    expect(outputElement).toBeNull();
  });

});
