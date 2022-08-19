import React, { Fragment } from "react";

const Checkbox = props => {
    const { 
        onChange, 
        data: { id, todos, done }
    } = props;
    return (
        <Fragment>
            <label className="todo new-item">

                <input
                    className="todo_state"
                    name={id}
                    type="checkbox"
                    defaultChecked={done}
                    onChange={onChange}
            />
            <div className="todo_text">{todos}</div>
            </label>  
        </Fragment>         
    );
};

export default Checkbox;