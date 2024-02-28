"# react_practice_multiple" 

### Context API Summary (and why NOT to use it instead of Redux)

The Context API in React provides a way to pass data through the component tree without having to pass props manually at every level. It consists of two main parts: the <b>'Provider'</b> component and the <b>'Consumer'</b> component (or the <b>'useContext'</b> hook for functional components). Here's a summary of the Context API:
<ol><li>
<b>Provider:</b> The <b>`Provider`</b> component accepts a `value`</b> prop that can be consumed by child components within its subtree.
</li>
<li>
<b>Consumer:</b> The <b>`Consumer`</b> component allows components to subscribe to the context changes and access the provided value.
</li>
<li>
<b>useContext:</b> The <b>`useContext`</b> hook is a React hook that allows functional components to consume context.
</li>
<li>
<b>Creating Context:</b> Context is created using the <b>`createContext`</b> function. This function returns an object with <b>`Provider`</b> and <b>`Consumer`</b> properties.
</li></ol>

```
import React, { createContext } from 'react';

const MyContext = createContext();

export default MyContext;
```

<ol><li><b>Using Context:</b>

<b>Provider:</b> Wrap the parent component(s) with the <b>`Provider`</b> and pass the value as a prop.
```
<MyContext.Provider value={/* value */}>
  {/* Children components */}
</MyContext.Provider>
```
<b>Consumer:</b> Use the Consumer component or the useContext hook to access the context value within child components.


```
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

```
const value = useContext(MyContext);
```

Now, regarding why not to use Context API instead of Redux:
</li>
</ol>

<ol>
<li>
<b>Global State Management Complexity:</b> While the Context API provides a way to manage global state, it may not be suitable for complex state management needs. Redux offers a more structured and scalable approach, including features like middleware, reducers, and dev tools.
</li>
<li>
<b>Performance Considerations:</b> Redux utilizes efficient algorithms like memoization and immutable updates to optimize performance. The Context API, on the other hand, may lead to unnecessary re-renders in certain scenarios.
</li>
<li>
<b>Developer Experience:</b> Redux has a well-defined set of best practices and a large ecosystem of tools and libraries. It offers features like time-travel debugging with Redux DevTools, middleware for side effects, and selector libraries for efficient data retrieval.
</li>
<li>
<b>Tooling and DevTools:</b> Redux comes with powerful developer tools that provide insights into the application's state changes, actions, and performance optimizations. While similar tools can be built for the Context API, they may not offer the same level of sophistication and integration.
</li>
</ol>
In summary, while the Context API can be sufficient for simple state management needs, Redux is often preferred for larger applications with complex state requirements, performance considerations, and developer experience.


### React Testing 
Ref: 
<ol>
<li><a href="https://www.w3.org/TR/html-aria/#docconformance">https://www.w3.org/TR/html-aria/#docconformance</a></li>
  <li><a href="https://jestjs.io/docs/getting-started">https://jestjs.io/docs/getting-started</a></li>
  <li><a href="https://testing-library.com/docs/react-testing-library/intro">https://testing-library.com/docs/react-testing-library/intro</a></li>
  <li><a href="https://github.com/testing-library/react-hooks-testing-library">https://github.com/testing-library/react-hooks-testing-library</a></li>
  <li> <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25890082#learning-tools">https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25890082#learning-tools</a></li>
</ol>


## A Closer Look At Generics
Generic Types ("Generics") can be tricky to wrap your head around.

But indeed, we are working with them all the time - one of the most prominent examples is an array.

Consider this example array:

```
let numbers = [1, 2, 3];
```

Here, the type is inferred, but if we would assign it explicitly, we could do it like this:

```
let numbers: number[] = [1, 2, 3];
```

number[] is the TypeScript notation for saying "this is an array of numbers".

But actually, number[] is just syntactic sugar!

The actual type is Array. ALL arrays are of the Array type.

BUT: Since an array type really only makes sense if we also describe the type of items in the array, Array actually is a generic type.

You could also write the above example liks this:

```
let numbers: Array<number> = [1, 2, 3];
```

Here we have the angle brackets (<>) again! But this time NOT to create our own type (as we did it in the previous lecture) but instead to tell TypeScript which actual type should be used for the "generic type placeholder" (T in the previous lecture).

Just as shown in the last lecture, TypeScript would be able to infer this as well - we rely on that when we just write:

```
let numbers = [1, 2, 3];
```

But if we want to explicitly set a type, we could do it like this:

```
let numbers: Array<number> = [1, 2, 3];
```

Of course it can be a bit annoying to write this rather long and clunky type, that's why we have this alternative (syntactic sugar) for arrays:

```
let numbers: number[] = [1, 2, 3];
```

If we take the example from the previous lecture, we could've also set the concrete type for our placeholder T explicitly:

```
const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd');
```

So we can not just use the angle brackets to define a generic type but also to USE a generic type and explicitly set the placeholder type that should be used - sometimes this is required if TypeScript is not able to infer the (correct) type. We'll see this later in this course section!


### Handle multiple environments in ReactJs [dev, stag, prod]
Ref: <a href="https://dev.to/rajeshroyal/handle-multiple-environments-in-reactjs-dev-stag-prod-1b9e"> handle-multiple-environments-in-reactjs-dev-stag-prod</a>

# Old Course Code Ref
<a herf="https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25764404#overview">https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25764404#overview</a>



##Controlled vs Uncontrolled Components:
**Controlled Components**: In React, a controlled component is one where React controls the state of the component. This means that the component's state is managed by React itself through props. Any changes to the component's state are handled by React, typically through event handlers. Controlled components ensure that React has complete control over the component's behavior and state.   

Example: Input fields in forms where the value is controlled by React through the `value` prop.

 **Uncontrolled Components**: Conversely, an uncontrolled component is one where the component manages its own state internally, without relying on React to control it. The state of an uncontrolled component is typically managed using traditional DOM methods like `document.getElementById` or `element.value`. Uncontrolled components are useful when you need to integrate with non-React code or when you want to keep the component's state separate from the React application state.
 
Example: Traditional HTML form elements where the value is managed directly by the DOM.
    
##Stateless vs Stateful Components
**Stateless Components**: Also known as functional components, stateless components are defined as plain JavaScript functions that accept props as an argument and return React elements. These components don't have their own state and are primarily used for UI rendering based on the provided props. They are simple, lightweight, and easy to test.
Example:
```
const MyComponent = (props) => {
    return <div>Hello, {props.name}!</div>;
  };
```

**Stateful Components**: Stateful components, on the other hand, are defined as ES6 classes that extend React.Component. These components have their own state, which can be updated using `setState`. Stateful components manage their own data and are responsible for handling user interactions and business logic. They are more complex than stateless components but offer greater flexibility and functionality.

Example:
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
   ```
In summary, controlled components rely on React to manage their state, while uncontrolled components manage their own state. Similarly, stateless components don't have their own state, whereas stateful components do. The choice between controlled/uncontrolled and stateless/stateful components depends on the specific requirements and complexity of the application.



 **let's go through examples of controlled vs uncontrolled components and stateless vs stateful components**
 ### Controlled vs Uncontrolled Components:
  Controlled Component Example:
  In a controlled component, React controls the state of the component through props. Here's an example of a controlled input field where the value is controlled by React:
  
  ```
import React, { useState } from 'react';

const ControlledInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};

export default ControlledInput;
```
In this example, the `value` of the input field is controlled by the `value` prop, which is derived from the `useState` hook. The `handleChange` function updates the state (`value`) whenever the input value changes.

#### Uncontrolled Component Example:
In an uncontrolled component, the component manages its own state internally without relying on React to control it. Here's an example of an uncontrolled input field where the value is managed by the DOM:

```
import React from 'react';

const UncontrolledInput = () => {
  const inputRef = React.useRef();

  const handleClick = () => {
    alert('Input value: ' + inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </>
  );
};

export default UncontrolledInput;
```

In this example, the input field's value is managed by the DOM directly, using a ref (`inputRef`). When the button is clicked, the input value is retrieved from the DOM using `inputRef.current.value`.

### Stateless vs Stateful Components:
#### Stateless (Functional) Component Example:
Stateless components are simple functions that accept props as arguments and return JSX. They don't have their own state. Here's an example:

```
import React from 'react';

const StatelessComponent = (props) => {
  return (
    <div>
      <p>Hello, {props.name}!</p>
    </div>
  );
};

export default StatelessComponent;
```

In this example, `StatelessComponent` is a functional component that accepts a `name` prop and renders a greeting message.

#### Stateful (Class) Component Example:
Stateful components are ES6 classes that extend `React.Component`. They have their own state, which can be updated using `setState`. Here's an example:

```
import React, { Component } from 'react';

class StatefulComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default StatefulComponent;
```

In this example, `StatefulComponent` is a class component with its own state (`count`). The `incrementCount` method updates the state whenever the button is clicked, causing a re-render with the updated count.

In summary, controlled components have their state controlled by React, while uncontrolled components manage their state independently. Stateless components are simple functions without state, while stateful components are ES6 classes with their own state."
