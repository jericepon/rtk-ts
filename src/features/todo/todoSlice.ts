import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface TodoItemInterface {
    id: number
    text: string
    done: boolean
}

type TodoList = TodoItemInterface[]

const initialState: TodoList = []

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: (state, { payload }: PayloadAction<string>) => state = [...state, { id: state.length, text: payload, done: false, }],
        complete: (state, { payload }: PayloadAction<number>) => {
            state.map(todo => {
                if (todo.id === payload)
                {
                    return {
                        ...todo,
                        done: todo.done = !todo.done
                    }
                }

                return todo
            })
            // state = state.filter(({ id }) => id !== action.payload)
        }
    }
})

export const { add, complete } = todoSlice.actions
export default todoSlice.reducer