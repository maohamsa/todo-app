import { ToDoCard } from "./ToDoCard";

export function ToDoList (props) {
    const {todos, selectedTab, handleEditTodo, setIsEditing} = props
    
    const filterTodosList = selectedTab === 'All' ? 
        todos :
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <>
            {filterTodosList.map((todo,todoIndex)=>{
                return (
                    <ToDoCard 
                        handleEditTodo={handleEditTodo} 
                        key={todoIndex}
                        todoIndex={todos.findIndex(val => val.input == todo.input)}
                        {...props}                        
                        todo={todo}
                        setIsEditing={setIsEditing}
                         />
                )
            })}

        </>
    )
}