import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(openModal ? false : true)
          // console.log('le diste click')
          // console.log(event)
          // console.log(event.target)
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };
