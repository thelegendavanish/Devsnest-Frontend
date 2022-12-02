import { useRef } from "react";

function Devsnest() {
const inputRef = useRef();
  const toggleEditing = () => {

      inputRef.current.focus();
  };

  return <div className="cnt">
    <input ref={inputRef} placeholder="Enter your name"/>
    <button onClick={toggleEditing}>Focus</button>
  </div>
}








export default Devsnest
