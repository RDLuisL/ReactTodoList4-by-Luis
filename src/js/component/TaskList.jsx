import React from "react";
import Checkbox from "./Checkbox.jsx";

const TaskList = props => {
    const { list, setList } = props;
    
    const onChangeStatus = evento => {
        const { name, checked } = evento.target;
        
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };
    const onClickRemoveItem = evento => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };
    
    
    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />

    ));
    
   
    return (
            <div className="todo-list">
                {list.length ? chk : "No task"}
                {list.length ? (
                    <p>
                        <button className="button blue" onClick={onClickRemoveItem}>
                            Delete Task
                        </button>
                    </p>
                ) : null}
            </div>
        );
};

export default TaskList;
