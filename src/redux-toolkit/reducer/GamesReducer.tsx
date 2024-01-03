import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from 'lib/requests';

export const gamesList: any = createAsyncThunk('gamesList', async (body: { id: number }) => {
    const result = await getRequest(`subjectGames/${body?.id}`);
    return result;
});

export const gameDetails: any = createAsyncThunk('gameDetails', async (id: number) => {
    const result = await getRequest(`games/show/${id}`);
    return result;
});
const initialState: any = {
    loading: true,
    gamesListData: [],
    gamesDetailstData: {}

};

const gamesListSlice: any = createSlice({
    name: 'gamesListSlice',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(gamesList.fulfilled, (state, action) => {
            state.loading = false;
            state.gamesListData = action.payload
        });
        builder.addCase(gameDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.gamesDetailstData = action.payload
        });
    },
});

export const { } = gamesListSlice.actions;
export default gamesListSlice.reducer;
