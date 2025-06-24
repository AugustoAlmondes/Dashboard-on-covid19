import axios from 'axios';


const API_BASE_URL = 'https://disease.sh/v3/covid-19/';
export async function fetchDataAPI(endpoint = 'all') {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
}

