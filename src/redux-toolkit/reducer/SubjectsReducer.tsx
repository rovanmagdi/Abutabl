import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from 'lib/requests';

export const SubjectsList: any = createAsyncThunk('SubjectsList', async (body: any) => {
    const result = await getRequest(`getSubjects`, body);
    return result;
});

const initialState: any = {
    loading: true,
    subjectsListData: []
};

const SubjectsListSlice: any = createSlice({
    name: 'SubjectsListSlice',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(SubjectsList.fulfilled, (state, action) => {
            state.loading = false;
            state.subjectsListData = action.payload
        });
    },
});

export const { } = SubjectsListSlice.actions;
export default SubjectsListSlice.reducer;
