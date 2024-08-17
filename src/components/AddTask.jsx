import React from 'react';
import { FormHook } from '../hooks/formHook';

export const AddTask = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = FormHook({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit} className='form-row'>
			<input
				type='text'
				className='task-add-field'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='New task...'
			/>

			<button className='task-button' type='submit'>
				Add task
			</button>
		</form>
	);
};
