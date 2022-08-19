import React from "react";

import FormTodo from "./FormTodo.jsx";
import TaskList from "./TaskList.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			Container!
			<FormTodo/>
			<TaskList/>
		</div>
	);
};

export default Home;
