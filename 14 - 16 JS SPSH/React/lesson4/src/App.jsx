import User from "./components/Users/Users";
function App() {
  const users = [
    {
      name: "Jamol",
      age: "15",
      address: "chorsu",
      phone: "+998995554444",
      weight: 60,
      height: 160,
    },
  ];
  return <User users={users} />;
}

export default App;
