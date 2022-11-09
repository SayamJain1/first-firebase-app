import "./App.css";
import { useEffect, useState } from "react";
import { db } from "./fire-Config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const usersCollectionRef = collection(db, "users");

  const updateAge = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newAgeFeild = { age: age + 1 };
    await updateDoc(userDoc, newAgeFeild);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const clickHandler = async () => {
    await addDoc(usersCollectionRef, { name, age: Number(age) });
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [users]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        className="inputStyles"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        className="inputStyles"
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={clickHandler}>Create user</button>
      <div className="cards-list">
      {users.map((user) => {
        return (
            <div className="card" key={user.id}>
              <h3>Name: {user.name}</h3>
              <h3>Age: {user.age}</h3>
              <button className="btn-left" onClick={() => updateAge(user.id, user.age)}>
                update age
              </button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
        );
      })}
      </div>
    </div>
  );
}

export default App;
