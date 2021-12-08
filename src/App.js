import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/main/Main";
import Blog from "./Components/Blog";
import store from "./store/store";



function App() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

//on s'abonne au stiore
  useEffect(() => {
		store.subscribe(() => {
      //store.getState().todos recupere le state global 
			setTodos(store.getState().todos);
		});
	}, []);

	const changeHandler = (event) => {
		setTodo(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		if (todo.trim().length === 0) return;

    // dispatch creer l'action transmise au reducer
		store.dispatch({
			type: "ADD_TODO",
			payload: todo.trim(),
		});
		setTodo("");
	};

	return (
		<>
			<Navbar />
			<Main />
			<Blog />
			<div style={{ padding: 20 }}>
				<form onSubmit={submitHandler}>
					<input type="text" value={todo} onChange={changeHandler} />
					<button>Add</button>
				</form>
				<ol>
					{todos.map((todo) => {
						return <li>{todo}</li>;
					})}
				</ol>
			</div>
		</>
	);
}

export default App;
