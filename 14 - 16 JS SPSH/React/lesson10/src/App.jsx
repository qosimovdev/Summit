import { useRef } from "react";
import "./App.css";
function App() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div className="con">
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default App;
