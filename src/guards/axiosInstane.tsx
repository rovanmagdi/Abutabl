import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: 'https://test.poultrystore.net/api/student/',
});

axiosInstance.interceptors.request.use(async (config) => {
    return config;
});

axiosInstance.interceptors.response.use(
    function (response) {
        if (response.data.message && response.config.method !== 'get') {
            toast.success(response.data.message);
        }
        return response;
    },
    function (error) {
        if (error.response?.status === 400 || error.response?.status === 500) {
            toast.error(error.response?.data?.msg);
            // localStorage.clear();
        }

        if (error.response?.status === 401) {
            toast.error('Your token has expired, please login again');
            localStorage.clear();
        } else {
            toast.error(error?.response.data?.message);
        }
        return Promise.reject(error.response);
    }
);

export default axiosInstance;
