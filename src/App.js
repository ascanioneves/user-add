import React, { useState, Fragment } from "react";
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
    <Fragment>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UsersList users={users}></UsersList>
    </Fragment>
  );
}

export default App;
