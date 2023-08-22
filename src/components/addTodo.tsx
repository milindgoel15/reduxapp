"use client";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addTodo } from "@/store/todoSlice";
import React, { useState } from "react";

let AddTodo = () => {
	const dispatch = useAppDispatch();

	let [input, setInput] = useState("");

	const addTodoHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(addTodo(input));
		setInput("");
	};

	return (
		<>
			<form
				onSubmit={addTodoHandler}
				className="flex flex-col sm:flex-row gap-4"
			>
				<input
					className="bg-gray-800 text-white px-4 py-4 rounded-md"
					type="text"
					name="addTodo"
					value={input}
					id="AddTodo"
					placeholder="add a todo"
					onChange={(e) => setInput(e.target.value)}
				/>
				<button className="bg-green-400 rounded-md px-4 py-3 text-black">
					Add
				</button>
			</form>
		</>
	);
};

export default AddTodo;
