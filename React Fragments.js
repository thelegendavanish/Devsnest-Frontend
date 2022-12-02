import { One, Two } from "./Components";

// You're given two React Functional Components
// named One and Two
//
// You have to:
// 1. Create a React Functional Component Devsnest
// 2. Group the two compoenents together using React Fragment
// 3. return them from Functional Component Devsnest

// Code here:
function Post() {
  return (
    <>
      <One />
      <Two />
    </>
  );
}
export default Post
