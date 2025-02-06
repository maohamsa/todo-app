import { useState } from "react"

export function ToDoCard (props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleEditTodo } = props

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.input);


    return (
        <div className="card todo-item">
            {isEditing ? (
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        placeholder="Edit your text..."
      />
    ) : (
      <p>{todo.input}</p>
    )}
            <div className="todo-buttons">
                <button onClick={() => {
                    handleCompleteTodo(todoIndex)
                }} disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    if (isEditing) {
                        handleEditTodo(todoIndex, newText);
                    }
                    setIsEditing(!isEditing);
                }}
            >
                <h6>{isEditing ? "Save" : "Edit"}</h6>        
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}