import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const onAddUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
