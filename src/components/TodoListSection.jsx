import React from 'react'
import './App.css'
import NewTask from './NewTask'

export const TodoListSection = ({
  todos,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo
}) => {
  return (
    <ul className='new-task'>
	{todos.map(todo => (
		<NewTask
			key={todo.id}
			todo={todo}
			handleUpdateTodo={handleUpdateTodo}
			handleDeleteTodo={handleDeleteTodo}
			handleCompleteTodo={handleCompleteTodo}
		/>
		))}
	</ul>
  );
};
