import React, {useState} from "react";

const FormTodo = props => {
    const { handleAddItem } = props;
    const [todos, setTodos] = useState("");
    const handleSummit = eventos => {

        eventos.preventDefault();

        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            todos
        });
        setTodos("");
    };
    return (
        <form onSubmit={ handleSummit}>    
            <div className="todo-list">
                <div className="file-input">
                    <input 
                        type="text"
                        className="text"
                        value={todos}
                        onChange={eventos => setTodos(eventos.target.value)}
                    />
                                       
                    <button
                        className="button pink" 
                        class="btn btn-success"
                        // este modulo es el condicional que si el valor del arreglo esta vacio se desabilita
                        disabled={todos ? "" : "disable"}
                    > ➕
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormTodo;
