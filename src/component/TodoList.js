import React from 'react';
import Datetimes from './Datetimes';

const ToDoList = ({ listTodos, onListCrossOut, onDeleteItem }) => {

    const handleCrossOut = index => (e) => {
        onListCrossOut(index);
    }

    const handleDelete = index => (e) => {
        onDeleteItem(index);
    }
    return (
        <div>
            <table className="container col-md-6">
                <thead>
                    <tr>
                        <th scope="col">Todos</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listTodos.map((list, index) =>
                        <tr key={index}>
                            <td><span style={{ textDecoration: list.isDone ? "line-through" : "none" }}>{list.text}</span>
                                <Datetimes></Datetimes>
                            </td>
                            <td>
                                <button className="btn btn-info" onClick={handleCrossOut(index)}>-</button>{'    '}
                                <button className="btn btn-danger" onClick={handleDelete(index)}>x</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    );
};

export default ToDoList;