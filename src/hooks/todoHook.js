import { useEffect, useReducer } from 'react';
import { TodoReducer } from '../todoReducer';

export const TodoHook = () => {
	const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

	const [todos, dispatch] = useReducer(
		TodoReducer,
		initialState,
		init
	);

	const allTaks    = todos.length
	const doneTaks   = todos.filter(todo => todo.done).length
	const unDoneTask = todos.filter(todo => !todo.done).length

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


	const handleNewTodo = todo => {
		const action = {
			type: 'Add Todo',
			payload: todo,
		};

		dispatch(action);
	};

	const handleDeleteTodo = id => {
		const action = {
			type: 'Delete Todo',
			payload: id,
		};

		dispatch(action);
	};

	const handleCompleteTodo = id => {
		const action = {
			type: 'Complete Todo',
			payload: id,
		};

		dispatch(action);
	};

	const handleUpdateTodo = (id, description) => {
		const action = {
			type: 'Update Todo',
			payload: {
				id,
				description,
			},
		};

		dispatch(action);
	};

    return{
        todos,
		allTaks,
		doneTaks,
		unDoneTask,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    }
};
