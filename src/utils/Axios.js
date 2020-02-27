import Axios from 'axios';

const { API_URL } = process.env;
const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default axios;
