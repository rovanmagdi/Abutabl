import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from 'lib/requests';

export const SubjectDetails: any = createAsyncThunk('SubjectDetails', async (id: string) => {
    const result = await getRequest(`viewSubject/${id}`);
    return result;
});

const initialState: any = {
    loading: true,
    subjectDetailsData: []
};

const SubjectDetailsSlice: any = createSlice({
    name: 'SubjectDetailsSlice',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(SubjectDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.subjectDetailsData = action.payload
        });
    },
});

export const { } = SubjectDetailsSlice.actions;
export default SubjectDetailsSlice.reducer;
