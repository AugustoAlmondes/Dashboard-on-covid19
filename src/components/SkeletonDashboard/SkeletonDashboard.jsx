// import './nome.module.css';
import styles from './SkeletonDashboard.module.css';

export default function SkeletonDashboard() {
    return (
        <>
            <div className={styles.overlay} />
            <div className={styles.container}>
                <div className={styles.load} />
            </div>
        </>
    );
}