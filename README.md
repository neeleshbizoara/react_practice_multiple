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