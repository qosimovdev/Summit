import Home from "./pages/Home";
import Hero from "./pages/Hero";
function App() {
  return (
    <>
      <h1>App page</h1>
      <div style={{ display: "flex", margin: "20px", gap: "10px" }}>
        <Hero />
        <Home />
      </div>
    </>
  );
}

export default App;
