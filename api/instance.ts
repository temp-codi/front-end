import axios from 'axios';

// alternative to axios is ky-universal package

export const instance = axios.create({
    baseURL: 'https://tempcodi-backend.onrender.com/api',
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        accept: 'application/json,',
        'Access-Control-Allow-Origin': '*',
    },
});
