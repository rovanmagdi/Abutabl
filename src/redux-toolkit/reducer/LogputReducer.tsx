import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postRequest } from 'lib/requests';
import { toast } from 'react-toastify';
import { Ilogin } from 'views/auth/types/login.type';

export const logout: any = createAsyncThunk('auth/logout', async (loginData: Ilogin) => {
    try {
        const response = await postRequest('logout', loginData);
        localStorage.clear()
        return response;
    } catch (error: any) {
        toast.error(error?.response?.data?.msg);
    }
});
const initialState = {
    user: null,
};
const LoginReducer: any = createSlice({
    name: 'logoutReducer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logout.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
});
export default LoginReducer.reducer;
