// import './nome.module.css';
import styles from './SkeletonDashboard.module.css';
import {motion as MOTION} from 'motion/react';
export default function SkeletonDashboard() {
    return (
        <MOTION.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles.overlay} />
            <div className={styles.container}>
                <div className={styles.load} />
            </div>
        </MOTION.div>
    );
}