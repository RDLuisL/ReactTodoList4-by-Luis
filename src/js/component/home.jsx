import React, { useEffect, useState } from "react";

import FormTodo from "./FormTodo.jsx";
import TaskList from "./TaskList.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	const handleAddItem = addItem => {
		setList([...list, addItem]);
	};
//=================== Fetch=============================

	const getTask = ()=>{
		fetch('https://assets.breatheco.de/apis/fake/todos/user/bairon00')
		.then(data=>data.json())
		.then(response=>setList(response))
	}
		const putTask = ()=>{

			let header = new Headers();
			header.append("Content-Type", "application/json")

			let cuerpo =JSON.stringify([
				{"label": obj.label,
				"done": false
				}
			])
			let requestOptions={
				method: 'PUT',
				headers: header,

				body: cuerpo,
				redirect:'follow'
			}
		fetch('https://assets.breatheco.de/apis/fake/todos/user/bairon00', requestOptions) 
			.then(data=>data.json())
			.then(response=>setList(response))
			
		}
		useEffect(()=>{
			getTask();
		},[])
	return (
		<div>
			<h1>Todos</h1>
			<FormTodo handleAddItem={handleAddItem} />
			<TaskList list={list} setList={setList} />
		</div>
	);
};

export default Home;
