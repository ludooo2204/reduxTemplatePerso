import React, { useState, useEffect } from "react";

//Voir pour utilisation CONNECT de react-
import { useSelector, useDispatch } from "react-redux";

import { addCount, resetCount, addTodo } from "../../redux/actionCompteur";
const Compteur = () => {
	const count = useSelector((state) => state.count);
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch(addCount, resetCount, addTodo);

	return (
		<div>
			<br />
			Count = {count}
			<br />
			todos = {todos}
			<br />
			<button onClick={() => dispatch(addCount())}>add count</button>
			<button onClick={() => dispatch(resetCount())}>Reset Compteur</button>
			<button onClick={() => dispatch(addTodo(Math.random()))}>Add todo</button>
		</div>
	);
};

export default Compteur;
