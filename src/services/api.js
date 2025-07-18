import axios from 'axios';


const API_BASE_URL = 'https://disease.sh/v3/covid-19/';
export async function fetchDataAPI(endpoint = 'all') {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
}

export const fetchHistoricalData = async (country) => {
    try {
        const response = await fetch(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=1200`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Se for um país específico, retorna o timeline
        if (data.timeline) {
            return data.timeline;
        }
        // Se for global ('all'), retorna os dados diretamente
        return data;
    } catch (error) {
        console.error('Error fetching historical data:', error);
        throw error;
    }
};