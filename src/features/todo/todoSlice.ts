import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoInterface {
    id: number;
    done: boolean;
    text: string;
}

interface TodoSliceState {
    todos: TodoInterface[]
}

const initialState: TodoSliceState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: ({ todos }, { payload }: PayloadAction<string>) => {
            todos = [
                ...todos,
                {
                    id: todos.length,
                    text: payload,
                    done: false,
                }
            ]
        },
        remove: ({ todos }, action: PayloadAction<number>) => {
            todos = todos.filter(({ id }) => id !== action.payload.id)
        }
    }
})