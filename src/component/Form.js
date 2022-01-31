import React, { useState } from 'react';

const Form = ({ addTodo }) => {

    const [input, setInput] = useState("");

    const handleChange = (e) => {
        let value = e.target.value;
        setInput(value)
    }

    const handleClick = e => {
        e.preventDefault();
        addTodo(input);
        setInput("");
    }
    return (
        <div className="form">
            <h1>Ajout de tache </h1>
            <form className="container col-md-6 ">
                <input type="text" className="form-control col-md-7" placeholder="Todo" value={input} onChange={handleChange} />
                <button className="btn btn-success" type="button" value="submit" onClick={handleClick}>Ajoutez</button>
            </form>
        </div>
    );
}

export default Form;