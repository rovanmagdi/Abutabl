import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginRequest } from 'lib/requests';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Ilogin } from 'views/auth/types/login.type';


export const loginUser: any = createAsyncThunk('auth/login', async (loginData: Ilogin) => {

    try {
        const response = await loginRequest('login', loginData);

        if (response?.user?.verify == 0) {
            toast.error("Your account isn't activated, please active account");

        }

        if (response?.user?.verify == 1) {
            localStorage.setItem('api_token', JSON.stringify(response?.user?.api_token));
            localStorage.setItem('user_info', JSON.stringify(response?.user));

            toast.success('Login Successfully');

            return response.data;
        }
    } catch (error: any) {


        toast.error(error?.response?.data?.msg);
    }
});
const initialState = {
    user: null,
};
const LoginReducer: any = createSlice({
    name: 'LoginReducer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
});
export default LoginReducer.reducer;
