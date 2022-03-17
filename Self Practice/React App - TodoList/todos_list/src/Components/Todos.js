import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    
    return (
        <div className="container">
            <h3>Todos List</h3>
            {props.todos.map((todo)=>{
                return <TodoItem todo={todo} onDelete={props.onDelete}/> 

            })}
            
            {/* on using props no error but not getting the result */}
            {/* error todos is not defined */}

             
        </div>
            
    )
}
