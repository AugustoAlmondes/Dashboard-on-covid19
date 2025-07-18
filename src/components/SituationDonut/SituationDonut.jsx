import styles from './SituationDonut.module.css';
import { BsPieChartFill } from 'react-icons/bs';
import PieChartComponent from '../PieChart/PieChart';
import { FaCircle } from 'react-icons/fa6';
import { maskNumber } from '../../utils/maskNumber';
import { motion as MOTION } from 'motion/react';
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext/ApiContext';

export default function SituationDonut() {
    const { data } = useContext(ApiContext);
    const countryData = data.countryData || data.globalData;

    // Dados dinâmicos calculados
    const chartData = [
        { 
            name: 'Ativos', 
            value: countryData?.active || 0, 
            color: '#9E1337' 
        },
        { 
            name: 'Recuperados', 
            value: countryData?.recovered || 0, 
            color: '#E2294F' 
        },
        { 
            name: 'Mortes', 
            value: countryData?.deaths || 0, 
            color: '#FECDD2' 
        }
    ];

    // Calcula o total para porcentagens (opcional)
    const totalCases = chartData.reduce((sum, item) => sum + item.value, 0);

    return (
        <MOTION.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className={`hover ${styles.container_situation_donut}`}>

            <div className={styles.header_donut}>
                <BsPieChartFill size={40} color='#FA7284' />
                <h2>Proporção de Situação dos Casos</h2>
            </div>

            <div className={styles.pieChart}>
                <PieChartComponent data={chartData} />

                <div className={styles.pie_legend}>
                    <ul>
                        {chartData.map((item, index) => (
                            <li key={index}>
                                <FaCircle color={item.color} size={8} />
                                {item.name} - <span>
                                    {maskNumber(item.value)}
                                    {totalCases > 0 && (
                                        ` (${Math.round((item.value / totalCases) * 100)}%)`
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </MOTION.div>
    );
}