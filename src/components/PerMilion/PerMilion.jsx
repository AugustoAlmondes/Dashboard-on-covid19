import { FaUsers, FaGlobeAmericas, FaSkull, FaVirus } from 'react-icons/fa';
import styles from './PerMilion.module.css';
import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from "recharts";
import { motion as MOTION } from 'motion/react';
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext/ApiContext';
import { maskNumber } from '../../utils/maskNumber';

export default function PerMilion() {
    const { data } = useContext(ApiContext);
    const countryData = data.countryData || data.globalData;
    const globalData = data.globalData;

    // Dados por milhão
    const casesPerMillion = countryData?.casesPerOneMillion || 0;
    const deathsPerMillion = countryData?.deathsPerOneMillion || 0;

    // Comparação com a média global
    const globalCasesAvg = globalData?.casesPerOneMillion || 1;
    const globalDeathsAvg = globalData?.deathsPerOneMillion || 1;

    const casesComparison = ((casesPerMillion - globalCasesAvg) / globalCasesAvg * 100).toFixed(1);
    const deathsComparison = ((deathsPerMillion - globalDeathsAvg) / globalDeathsAvg * 100).toFixed(1);

    // Dados para o gráfico semi-circular
    const chartData = [
        { name: 'Casos por milhão', value: casesPerMillion, color: '#E2294F' },
        { name: 'Mortes por milhão', value: deathsPerMillion, color: '#FECDD2' },
    ];

    return (
        <MOTION.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className={`hover ${styles.container_per_milion}`}>

            <div className={styles.header_per_milion}>
                <FaUsers size={40} color='#FA7284' />
                <p>Indicador de Gravidade</p>
            </div>

            <div className={styles.pie_chart}>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="90%"
                            innerRadius={60}
                            outerRadius={100}
                            startAngle={180}
                            endAngle={0}
                            dataKey="value"
                            label={({ value }) => `${maskNumber(value)}`}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>

                <div className={styles.comparison_container}>
                    <div className={styles.comparison_item}>
                        <FaVirus color="#E2294F" />
                        <span>Casos:</span>
                        <span className={casesComparison > 0 ? styles.higher : styles.lower}>
                            {casesComparison > 0 ? `↑${casesComparison}%` : `↓${Math.abs(casesComparison)}%`}
                        </span>
                    </div>

                    <div className={styles.comparison_item}>
                        <FaSkull color="#FECDD2" />
                        <span>Mortes:</span>
                        <span className={deathsComparison > 0 ? styles.higher : styles.lower}>
                            {deathsComparison > 0 ? `↑${deathsComparison}%` : `↓${Math.abs(deathsComparison)}%`}
                        </span>
                    </div>
                </div>
            </div>
        </MOTION.div>
    );
}