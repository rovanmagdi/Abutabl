import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from 'lib/requests';

export const todoList: any = createAsyncThunk('todoList', async (body: any) => {
    const result = await getRequest(`todaoList`, body);
    return result;
});


const initialState: any = {
    loading: true,
    todoListData: [],

};

const TodoistSlice: any = createSlice({
    name: 'TodoistSlice',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(todoList.fulfilled, (state, action) => {
            state.loading = false;
            state.todoListData = action.payload
        });

    },
});

export const { } = TodoistSlice.actions;
export default TodoistSlice.reducer;
