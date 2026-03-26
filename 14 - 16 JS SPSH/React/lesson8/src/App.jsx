import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const saveName = () => {
    localStorage.setItem("name", name);
  };

  const savedName = localStorage.getItem("name");

  return (
    <>
      <input
        placeholder="ismini kirit"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>ismi: {savedName}</h1>
      <button onClick={saveName}>Saqlash</button>
    </>
  );
}

export default App;
