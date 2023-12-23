import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from 'lib/requests';

export const lessonContent: any = createAsyncThunk('lessonContent', async (id: number) => {
    const result = await getRequest(`/lessons/show/${id}`);
    return result;
});

const initialState: any = {
    loading: true,
    lessonContentData: [],
    lessonId: null
};

const lessonContentSlice: any = createSlice({
    name: 'lessonContentSlice',
    initialState,
    reducers: {
        setLessonIds: (state = initialState, action) => {
            state.lessonId = action.payload
        }
    },

    extraReducers(builder) {
        builder.addCase(lessonContent.fulfilled, (state, action) => {
            state.loading = false;
            state.lessonContentData = action.payload
        });
    },
});

export const { setLessonIds } = lessonContentSlice.actions;
export default lessonContentSlice.reducer;
