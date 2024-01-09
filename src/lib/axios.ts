import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://backend-virtual-budget.vercel.app/',
})