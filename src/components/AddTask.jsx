import React from 'react';

export const AddTask = () => {

	return (
		<form onSubmit='' className='form-row'>
			<input
				type='text'
				className='task-add-field'
				name='description'
				value=''
				onChange=''
				placeholder='New task...'
			/>

			<button className='task-button' type='submit'>
				Add task
			</button>
		</form>
	);
};
