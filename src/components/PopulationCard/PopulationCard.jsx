// import './PopulationCard.module.css';
import styles from './PopulationCard.module.css';
import { motion as MOTION } from 'motion/react';

export default function PopulationCard() {
    return (
        <>
            <MOTION.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className={`hover ${styles.container_population}`}>
                <div className={styles.content_population}>
                    <p>Em: 02/03/2023</p>
                    <div className={styles.center}>
                        <h3>População total</h3>
                        <h1>7.944.935.131</h1>
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
                            <li><p>Casos:</p><span>90.410</span></li>
                            <li><p>Mortes:</p><span>899,40</span></li>
                            <li><p>Testes:</p><span>88.4400,59</span></li>
                        </ul>
                        <ul>
                            <li><p>Ativos</p><span>2.784.591</span></li>
                            <li><p>Curasdos</p><span>85.037,81</span></li>
                            <li><p>Criticos</p><span>4,38</span></li>
                        </ul>
                    </div>
                </div>
            </MOTION.div>
        </>
    );
}