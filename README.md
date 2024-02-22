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