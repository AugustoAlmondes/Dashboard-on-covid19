// import './TodayData.module.css';
import styles from './TodayData.module.css';
import { motion as MOTION } from 'motion/react';

export default function TodayData() {
    return (
        <>
            <MOTION.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: .4 }}
                viewport={{ once: true }}
                className={`hover ${styles.container_today}`}>
                <div className={styles.content}>
                    <h2>Hoje</h2>
                    <ul>
                        <li>
                            <p>Casos</p>
                            <h3>0</h3>
                        </li>
                        <li>
                            <div className={styles.line} />
                        </li>
                        <li>
                            <p>Curados</p>
                            <h3>790</h3>
                        </li>
                        <li>
                            <div className={styles.line} />
                        </li>
                        <li>
                            <p>Mortes</p>
                            <h3>0</h3>
                        </li>
                    </ul>
                </div>
            </MOTION.div>
        </>
    );
}