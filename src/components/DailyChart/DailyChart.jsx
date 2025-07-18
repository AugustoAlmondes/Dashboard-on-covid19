import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './DailyChart.module.css';
import { motion as MOTION } from 'motion/react';
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext/ApiContext';
import SkeletonDashboard from '../SkeletonDashboard/SkeletonDashboard';

export default function DailyChart({ dataKey, title, delayTrainsition }) {
    const { data } = useContext(ApiContext);
    
    // Função para transformar os dados históricos
    const transformData = () => {
        if (!data.historicalData) return [];
        
        const { cases, deaths, recovered } = data.historicalData;
        
        return Object.keys(cases).map(date => ({
            date,
            cases: cases[date],
            deaths: deaths[date],
            recovered: recovered[date]
        }));
    };

    const chartData = transformData();
    
    // Determina qual chave de dados usar
    const getDataKey = () => {
        switch(dataKey) {
            case 'uv': return 'cases';
            case 'pv': return 'deaths';
            case 'amt': return 'recovered';
            default: return 'cases';
        }
    };
    
    const currentDataKey = getDataKey();
    
    // Formata a data para exibição (DD/MM/AA)
    const formatDate = (dateString) => {
        const [month, day, year] = dateString.split('/');
        return `${day}/${month}/${year}`;
    };

    // Encontrar datas de início e fim
    const getDateRange = () => {
        if (chartData.length === 0) return { start: 'N/A', end: 'N/A' };
        
        const startDate = formatDate(chartData[0].date);
        const endDate = formatDate(chartData[chartData.length - 1].date);
        return { start: startDate, end: endDate };
    };
    
    const { start, end } = getDateRange();

    return (
        <MOTION.div className={`hover ${styles.container_daily_chart}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delayTrainsition }}
            viewport={{ once: true }}
        >
            <h3>{title}</h3>
            <div className={styles.data_daily_chart}>
                <ul>
                    <li>
                        intervalo de dias
                        <br /><span>{chartData.length} dias</span>
                    </li>
                    <li>Inicio
                        <br /><span>{start}</span>
                    </li>
                    <li>
                        Termino
                        <br /><span>{end}</span>
                    </li>
                </ul>
            </div>
            <div className={styles.daily_chart}>
                {chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 15 }}>
                            <Line 
                                type="monotone" 
                                dataKey={currentDataKey} 
                                stroke="#E2294F" 
                                animationDuration={2000} 
                            />
                            <CartesianGrid stroke="gray" />
                            <XAxis dataKey="date" tickFormatter={formatDate} />
                            <Tooltip 
                                labelFormatter={(value) => `Data: ${formatDate(value)}`}
                                formatter={(value, name) => {
                                    const nameMap = {
                                        cases: 'Casos',
                                        deaths: 'Mortes',
                                        recovered: 'Recuperados'
                                    };
                                    return [value.toLocaleString(), nameMap[name]];
                                }}
                            />
                            <YAxis />
                            <Area 
                                type="monotone" 
                                dataKey={currentDataKey} 
                                stroke="#E2294F" 
                                fill="#871435" 
                                animationDuration={5000} 
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                ) : (
                    <div className={styles.no_data}>Nenhum dado disponível</div>
                )}
            </div>
        </MOTION.div>
    );
}