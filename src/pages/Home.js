import React, { useState } from 'react';
import Form from '../component/Form';
import ToDoList from '../component/TodoList';

const Home = () => {

    const [todoLists, setTodoLists] = useState([])

    const handleSubmit = (inputValue) => {
        const item = { text: inputValue, isDone: false }
        setTodoLists(itemLists => [...itemLists, item]);
    };
    const handleCrossOut = index => {
        const newTodoLists = [...todoLists];
        const currentTodo = newTodoLists[index];
        currentTodo.isDone = !currentTodo.isDone;
        newTodoLists[index] = currentTodo;
        setTodoLists(newTodoLists);
    };

    const handleDeleteTodo = index => {
        const newTodoListDelete = [...todoLists];
        newTodoListDelete.splice(index, 1);
        setTodoLists(newTodoListDelete);
    };

    return (
        <div>
            <Form addTodo={handleSubmit} />
            <ToDoList listTodos={todoLists} onListCrossOut={handleCrossOut} onDeleteItem={handleDeleteTodo} />
        </div>
    );
};

export default Home;