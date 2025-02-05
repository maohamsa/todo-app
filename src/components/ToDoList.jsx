import { ToDoCard } from "./ToDoCard";

export function ToDoList (props) {
    const {todos, selectedTab} = props
    
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
                        key={todoIndex}
                        todoIndex={todos.findIndex(val => val.input == todo.input)}
                        {...props}                        
                        todo={todo} />
                )
            })}

        </>
    )
}