import { useState } from "react";
// you are given a Functional Component Devsnest
// with all the UI required for a Counter

// You have to:
// 1. Create a state variable for counter
// 2. Remove the comment 'Display Count' in JSX
//    and display count state there inside the span tag
// 3. add an onClick on the button with text 'Increment'
// 4. that increments the state count 

// Note: useState is already imported

export default function Devsnest() {
  // Code here
  const[count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count+1);
  }

  return (
    <div className="cnt">
      <button onClick = {handleClick}>Increment</button>
      <div className="box">
        Count:
        <span className="count">{count}</span>
      </div>
    </div>
  )
}
