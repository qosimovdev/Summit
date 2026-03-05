import Home from "./pages/Home";
import Hero from "./pages/Hero";
import User from "./components/Users";
function App() {
  return (
    <>
      {/* <h1>App page</h1>
      <div style={{ display: "flex", margin: "20px", gap: "10px" }}>
        <Hero />
        <Home />
      </div> */}
      <User name="Dumbul" age={15} address="Chorsu" />
    </>
  );
}

export default App;
