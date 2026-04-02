import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  function addUser() {
    setUsers([...users, { id: Date.now(), name }]);
    setName("");
  }

  function deleteUser(id) {
    setUsers(users.filter((u) => u.id !== id));
  }

  function updateUser(id) {
    const newName = prompt("Yangi ism");

    setUsers(users.map((u) => (u.id === id ? { ...u, name: newName } : u)));
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addUser}>Add</button>

      {users.map((user) => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
          <button onClick={() => updateUser(user.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default App;
