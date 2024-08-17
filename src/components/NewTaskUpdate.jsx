import { useRef, useState } from 'react';

export const NewTaskUpdate = ({ todo, handleUpdateTodo }) => {

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = todo.id;
		const description = '';

		handleUpdateTodo(id, description);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
			<input
				type='text'
				className={`task-update ${
					todo.done ? 'text-decoration-dashed' : ''
				}`}
				name=''
				value=''
				onChange=''
				placeholder='New task...'
				readOnly={disabled}
				ref={focusInputRef}
			/>
		</form>
	);
};
