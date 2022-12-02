import { createElement } from "react"
// in this task,
// create a React Functional Component named Devsnest
// that returns an h1 element that contains text "Hello World!"
// use React.createElement (already imported as createElement)
// Note:
// Do not use JSX!, use React.createElement instead.

// Code Here:


function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello World!'
  );
}
export default Greeting
