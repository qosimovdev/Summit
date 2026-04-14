import React from "react";

function App() {
  return (
    <section className="">
      {/* <h1 className="text-red-600 text-3xl m-10">Welcome to My React App</h1>
      <p className="text-green-600 text-2xl mx-10">
        This is a simple React application.
      </p> */}
      <ul className="w-full grid grid-cols-3 gap-4 p-5">
        <li className="bg-green-500 h-50"></li>
        <li className="bg-green-500 h-50"></li>
        <li className="bg-green-500 h-50"></li>
        <li className="bg-green-500 h-50 col-span-4"></li>
      </ul>
    </section>
  );
}

export default App;
