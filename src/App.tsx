import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './app/store'
import { add, complete, remove } from './features/todo/todoSlice'

const App = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state: RootState) => state.todos)
    const [todo, setTodo] = useState('')

    return (
        <div>
            <input type="text" name="todo" value={todo} onChange={e => setTodo(e.target.value)} placeholder="type something" />
            <br />
            <button onClick={() => {
                if (todo !== '')
                {
                    dispatch(add(todo))
                    setTodo('')
                }
            }} >Add</button>
            <ul>
                {todos && todos.map(({ text, done, id }, idx) => (
                    <li className={done ? 'is-completed' : ''} key={idx}>{text} <button onClick={() => { remove(id) }}> ➖ </button> <button onClick={() => dispatch(complete(id))}>Complete</button></li>
                ))}
            </ul>
        </div>
    )
}

export default App
