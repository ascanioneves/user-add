import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [modalAtributes, setModalAtributes] = useState({
    title: "",
    message: "",
  });

  const onClickHandler = () => {
    setIsValid(true);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0) {
      setIsValid(false);
      setModalAtributes({
        title: "Empty name detected!",
        message: "Please, fill the name field correctly",
      });
      return;
    } else if (enteredAge.trim().length === 0) {
      setIsValid(false);
      setModalAtributes({
        title: "Empty age detected!",
        message: "Please, fill the age field correctly",
      });
      return;
    }
    if (+enteredAge < 1) {
      setIsValid(false);
      setModalAtributes({
        title: "Age Problem!",
        message: "Please, enter a valid age",
      });
      return;
    }

    props.onAddUser({
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    setIsValid(true);
  };
  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button onClick={addUserHandler} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
