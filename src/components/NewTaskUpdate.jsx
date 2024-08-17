import { useRef, useState } from 'react';
import { FormHook } from '../hooks/formHook';

export const NewTaskUpdate = ({ todo, handleUpdateTodo }) => {
	const { updateDescription, onInputChange } = FormHook({
		updateDescription: todo.description,
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = todo.id;
		const description = updateDescription;

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
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				placeholder='New task...'
				readOnly={disabled}
				ref={focusInputRef}
			/>
		</form>
	);
};
