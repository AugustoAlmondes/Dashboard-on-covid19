// import './GlobalStats.module.css';
import styles from './GlobalStats.module.css';
import { motion as MOTION } from 'motion/react';
import {maskNumber} from '../../utils/maskNumber';

export default function GlobalStats({ icon, title, value, delayTransition }) {

    console.log("valor vindo:",value);
    

    return (
        <>
            <MOTION.div
                className={`hover ${styles.container}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: delayTransition }}
                viewport={{ once: true }}
            >
                <div>
                    <div className={styles.icon}>{icon}</div>
                </div>
                <div className={styles.content}>
                    <p>{title}</p>
                    <h3>{value? maskNumber(value): "0"}</h3>
                </div>
            </MOTION.div>
        </>
    );
}