import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface todoInterface {
	id: string;
	text: string;
	isDisabled: boolean;
}

const initialState = {
	todos: [] as todoInterface[],
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo: todoInterface = {
				id: nanoid(),
				text: action.payload,
				isDisabled: true,
			};
			state.todos.push(todo);
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		updateTodo: (state, action) => {
			let { todos } = state;
			state.todos = todos.map((item) =>
				item.id === action.payload.id ? action.payload : item
			);
		},
		editMode: (state, action) => {
			const todoItem = state.todos.find(
				(todo) => todo.id === action.payload
			);

			if (todoItem != null) {
				todoItem.isDisabled == true
					? (todoItem.isDisabled = false)
					: (todoItem.isDisabled = true);
			}
		},
	},
});

export const { addTodo, deleteTodo, updateTodo, editMode } = todoSlice.actions;

export default todoSlice.reducer;
