import React from 'react'
import './App.css'
import HeaderNav from './components/HeaderNav'
import Footer from './components/Footer'
import { TodoListSection } from './components/TodoListSection'
import { AddTask } from './components/AddTask'
import { TodoHook } from './hooks/todoHook'


function App() {

  const {
		todos,
    allTaks,
		doneTaks,
		unDoneTask,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = TodoHook();

  return (
    <>
      <HeaderNav />

      <h2 className='tittle'>My Todo List</h2>

      <section className='col1'>
        <AddTask handleNewTodo={handleNewTodo} />
        <TodoListSection
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo} />

      </section>

      <section className='col2'>
        <h2 className='filter-heading'>Filter ↴</h2>

        <div className='filter-text'>All Task: <span className='filter-no'>{allTaks}</span></div>
        <div className='filter-text'>Completed: <span className='filter-no'>{doneTaks}</span></div>
        <div className='filter-text'>Not Completed: <span className='filter-no'>{unDoneTask}</span></div>

      </section>

      <Footer />
    </>
  );
}

export default App;
