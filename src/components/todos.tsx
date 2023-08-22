"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import React, { useState } from "react";
import DeleteIcon from "./deleteIcon";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { deleteTodo, editMode, updateTodo } from "@/store/todoSlice";
import EditIcon from "./editIcon";

let Todos = () => {
	const todos = useAppSelector((state) => state.todos);

	let [input, setInput] = useState("");
	let [id, setId] = useState("");

	const dispatch = useAppDispatch();

	const updateTodoHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(updateTodo({ id, input }));
		dispatch(editMode(id));
	};

	return (
		<>
			<h1 className="text-3xl text-blue-400">Your todos</h1>
			<ul className="flex flex-col items-start gap-3">
				{todos.length == 0 ? (
					<p className="text-2xl py-4 italic">Empty!</p>
				) : (
					todos.map((todo, todoId) => (
						<li
							key={todo.id}
							className="bg-blue-500 flex justify-between items-center px-4 rounded-md text-xl py-3"
						>
							<form onSubmit={updateTodoHandler}>
								<input
									type="text"
									className={`${
										todo.isDisabled
											? "bg-blue-500 text-white"
											: "bg-blue-200 text-black rounded-md px-2"
									} text-2xl w-40 sm:w-72`}
									name="todo"
									id="todo"
									value={todo.isDisabled ? todo.text : input}
									disabled={todo.isDisabled}
									onChange={(e) => setInput(e.target.value)}
								/>
							</form>
							<span className="flex gap-2">
								<button
									onClick={() => {
										if (todo.isDisabled == true) {
											setId(todo.id);
											setInput(todo.text);
										}
										dispatch(editMode(todo.id));
									}}
									className="p-3 transition-all active:text-gray-300 hover:text-gray-300"
								>
									<EditIcon />
								</button>
								<button
									onClick={() => dispatch(deleteTodo(todo.id))}
									className="p-3 bg-red-500 transition-all active:bg-red-600 hover:bg-red-600 rounded-lg"
								>
									<DeleteIcon />
								</button>
							</span>
						</li>
					))
				)}
			</ul>
		</>
	);
};

export default Todos;
