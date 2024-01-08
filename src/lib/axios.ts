import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://virtual-budget.vercel.app/',
})