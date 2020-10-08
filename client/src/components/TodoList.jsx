import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {

  return (
    <ul>
      {
        todos &&
          todos.length > 0 ?
            (
              todos.map(todo => {
                return (
                  <li key={todo._id}>
                  <span>{todo.action}</span>
                  <button className="delete" onClick={() => deleteTodo(todo._id)}>X</button>
                  </li>
                  
                )
              })
            )
            :null
      }
    </ul>
  )
}

export default TodoList;