import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [modalAtributes, setModalAtributes] = useState({
    title: "",
    message: "",
  });

  const onClickHandler = () => {
    setIsValid(true);
  };

  const onChangeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const onChangeUserAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0) {
      setIsValid(false);
      setModalAtributes({
        title: "Empty name detected!",
        message: "Please, fill the name field correctly",
      });
      return;
    } else if (enteredUserAge.trim().length === 0) {
      setIsValid(false);
      setModalAtributes({
        title: "Empty age detected!",
        message: "Please, fill the age field correctly",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setIsValid(false);
      setModalAtributes({
        title: "Age Problem!",
        message: "Please, enter a valid age",
      });
      return;
    }

    props.onAddUser({
      name: enteredUsername,
      age: enteredUserAge,
      id: Math.random().toString(),
    });
    setEnteredUsername("");
    setEnteredUserAge("");
    setIsValid(true);
  };
  return (
    <div>
      {!isValid && (
        <ErrorModal
          title={modalAtributes.title}
          message={modalAtributes.message}
          onClick={onClickHandler}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername || ""}
            onChange={onChangeUsernameHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge || ""}
            onChange={onChangeUserAgeHandler}
          ></input>
          <Button onClick={addUserHandler} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
