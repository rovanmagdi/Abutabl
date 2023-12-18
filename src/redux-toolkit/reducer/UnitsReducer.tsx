import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from 'lib/requests';

export const UnitsList: any = createAsyncThunk('UnitsList', async (body: any) => {
    const result = await getRequest(`subjectUnits`, body);
    return result;
});

const initialState: any = {
    loading: true,
    UnitsListData: []
};

const UnitsListSlice: any = createSlice({
    name: 'UnitsListSlice',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(UnitsList.fulfilled, (state, action) => {
            state.loading = false;
            state.UnitsListData = action.payload
        });
    },
});

export const { } = UnitsListSlice.actions;
export default UnitsListSlice.reducer;
