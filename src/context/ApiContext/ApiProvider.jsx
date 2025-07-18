import { useEffect, useState } from "react";
import { fetchDataAPI, fetchHistoricalData } from "../../services/api";
import { ApiContext } from "./ApiContext";

export function ApiProvider({ children }) {
    const [data, setData] = useState({
        globalData: null,
        countryData: null,
        historicalData: null, // Adicionamos este campo
        options: []
    });
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                setLoading(true);
                const [countries, globalData, historicalGlobal] = await Promise.all([
                    fetchDataAPI('countries'),
                    fetchDataAPI('all'),
                    fetchHistoricalData('all')
                ]);

                setData(prev => ({
                    ...prev,
                    globalData,
                    countryData: globalData,
                    historicalData: historicalGlobal,
                    options: countries.map(country => country.country)
                }));
            } catch (err) {
                setError(err.message);
                console.error('Erro ao buscar dados iniciais:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchInitialData();
    }, []);

    const handleSelectCountry = async (country) => {
        if (!country) return;
        
        try {
            setLoading(true);
            const [countryData, historicalData] = await Promise.all([
                fetchDataAPI(`countries/${country.toLowerCase()}`),
                fetchHistoricalData(country.toLowerCase())
            ]);
            
            setData(prev => ({
                ...prev,
                countryData,
                historicalData
            }));
            setSelectedCountry(country);
        } catch (err) {
            setError(err.message);
            console.error(`Erro ao buscar dados de ${country}:`, err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ApiContext.Provider value={{ 
            data, 
            loading, 
            error, 
            selectedCountry, 
            handleSelectCountry 
        }}>
            {children}
        </ApiContext.Provider>
    );
}