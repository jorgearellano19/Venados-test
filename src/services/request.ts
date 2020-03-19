import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_VENADOS_URL,
    headers: {
        Accept: 'application/json'
    }
});