import axios from 'axios';
import axiosInstance from '../guards/axiosInstane';

export const getRequest = async (
    url: string,
    params?: {
        [key: string]: any;
    },
    contentType?: string
) => {
    const response = await axiosInstance({
        method: 'get',
        url: url,
        headers: {
            'Content-Type': contentType || 'application/json',
            apiSecret: 'OASzRok654E0AJ20KH',
            Authorization: 'Bearer' + JSON.parse(localStorage.getItem('api_token')!),
        },
        params,
    });
    return response.data;
};

export const loginRequest = async (url: string, body?: any) => {
    const response = await axios.post(`https://test.poultrystore.net/api/student/${url}`, body, {
        headers: {
            'Content-Type': 'application/json',
            apiSecret: 'OASzRok654E0AJ20KH',
        },
    });
    return response.data;
};

export const postRequest = async (
    url: string,
    body?: {
        [key: string]: any;
    },
    contentType?: string
) => {
    const response = await axiosInstance({
        method: 'post',
        url: url,
        data: body,
        headers: {
            'Content-Type': contentType || 'application/json',
            apiSecret: 'OASzRok654E0AJ20KH',
            Authorization: 'Bearer' + JSON.parse(localStorage.getItem('api_token')!),

        },
    });
    return response.data;
};

export const putRequest = async (
    url: string,
    body?: {
        [key: string]: any;
    },
    contentType?: string
) => {
    const response = await axiosInstance({
        method: 'put',
        url: url,
        data: body,
        headers: {
            'Content-Type': contentType || 'application/json',
            apiSecret: 'OASzRok654E0AJ20KH',
            Authorization: 'Bearer' + JSON.parse(localStorage.getItem('api_token')!),

        },
    });
    return response.data;
};

export const deleteRequest = async (
    url: string,
    body?: {
        [key: string]: any;
    },
    contentType?: string
) => {
    const response = await axiosInstance({
        method: 'delete',
        url: url,
        data: body,
        headers: {
            'Content-Type': contentType || 'application/json',
            apiSecret: 'OASzRok654E0AJ20KH',
            Authorization: 'Bearer' + JSON.parse(localStorage.getItem('api_token')!),

        },
    });
    return response.data;
};
