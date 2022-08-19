import React, { useState } from "react";

import FormTodo from "./FormTodo.jsx";
import TaskList from "./TaskList.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	const handleAddItem = addItem => {
		setList([...list, addItem]);
	};
	return (
		<div>
			Container!
			<FormTodo handleAddItem={handleAddItem} />
			<TaskList list={list} setList={setList} />
		</div>
	);
};

export default Home;
