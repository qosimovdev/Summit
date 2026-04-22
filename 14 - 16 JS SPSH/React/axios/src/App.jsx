import { useState, useEffect } from "react";
import api from "./utils/axios";
function App() {
  const [allPosts, setAllPosts] = useState([]);
  const fetchUser = async () => {
    try {
      const res = await api.get("/books");
      setAllPosts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      {allPosts.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
}

export default App;
