import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { ToDoInput } from "./components/ToDoInput"
import { ToDoList } from "./components/ToDoList"

import { useState, useEffect } from 'react'

function App() {
/*   const todos = [
    { input: 'Hello! Add your first to do!', complete: true },
    { input: 'Get the groceries!', complete: false },
    { input: 'Learn how to web design', complete: false },
    { input: 'Say hi to gran gran', complete: true },
  ] */
  
  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first to do!', complete: true }    
  ])
  const [selectedTab, setSelectedTab] = useState('All')

  const [isEditing, setIsEditing] = useState(false);

  function handleAddTodo(newTodo) {
      const newTodoList = [...todos, {input: newTodo, complete: false}]
      setTodos(newTodoList)
      handleSaveData(newTodoList)

  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({todos : currTodos}))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {return}
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  function handleCompleteTodo(index) {
    // update/edit/modify
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  

  function handleEditTodo(todoIndex, updatedText) {
    let newTodoList = [...todos]
    newTodoList[todoIndex] = {
      ...newTodoList[todoIndex],
      input: updatedText 
    };
      setTodos(newTodoList);
      handleSaveData(newTodoList);
    }
  

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val,valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  return (    
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <ToDoList  handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} selectedTab={selectedTab} todos={todos} setIsEditing={setIsEditing} />
      <ToDoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
