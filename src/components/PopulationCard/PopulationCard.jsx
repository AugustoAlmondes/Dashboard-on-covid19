import styles from './PopulationCard.module.css';
import { motion as MOTION } from 'motion/react';
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext/ApiContext';
import { maskNumber } from '../../utils/maskNumber';

export default function PopulationCard() {
    const { data } = useContext(ApiContext);
    const countryData = data.countryData || data.globalData;

    // Dados da população
    const population = countryData?.population || 0;
    
    // Dados por milhão (com fallback para 0 se não existirem)
    const casesPerMillion = countryData?.casesPerOneMillion || 0;
    const deathsPerMillion = countryData?.deathsPerOneMillion || 0;
    const testsPerMillion = countryData?.testsPerOneMillion || 0;
    const activePerMillion = countryData?.activePerOneMillion || 0;
    const recoveredPerMillion = countryData?.recoveredPerOneMillion || 0;
    const criticalPerMillion = countryData?.criticalPerOneMillion || 0;

    return (
        <>
            <MOTION.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className={`hover ${styles.container_population}`}>
                <div className={styles.content_population}>
                    <div className={styles.center}>
                        <h3>População total</h3>
                        <h1>{maskNumber(population)}</h1>
                    </div>
                </div>
            </MOTION.div>

            <MOTION.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className={`hover ${styles.container_for_milion}`}>
                <div className={styles.content_for_milion}>
                    <p>Por milhão:</p>

                    <div className={styles.data}>
                        <ul>
                            <li><p>Casos:</p><span>{maskNumber(casesPerMillion)}</span></li>
                            <li><p>Mortes:</p><span>{maskNumber(deathsPerMillion)}</span></li>
                            <li><p>Testes:</p><span>{maskNumber(testsPerMillion)}</span></li>
                        </ul>
                        <ul>
                            <li><p>Ativos:</p><span>{maskNumber(activePerMillion)}</span></li>
                            <li><p>Recuperados:</p><span>{maskNumber(recoveredPerMillion)}</span></li>
                            <li><p>Críticos:</p><span>{maskNumber(criticalPerMillion)}</span></li>
                        </ul>
                    </div>
                </div>
            </MOTION.div>
        </>
    );
}