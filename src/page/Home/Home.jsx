import { FaArrowDownLong } from 'react-icons/fa6';
import styles from './Home.module.css';
import { motion as MOTION } from 'motion/react';
import { scrollToComponent } from '../../utils/scrollToComponent';

export default function Home() {
    return (
        <div className={styles.home_container}
            id="Home">
            <div className={styles.overlay} />
            <MOTION.video
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4, delay: 1 }}
                src="https://static.vecteezy.com/system/resources/previews/007/525/680/animation-of-beautiful-red-light-radial-background-free-video.webm"
                autoPlay loop muted
            />

            <div className={styles.content}>
                <MOTION.div className={styles.ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 6.5 }}
                >
                    <span>dados de:</span> disease.sh
                </MOTION.div>

                <MOTION.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 4.0 }}
                >
                    DASHBOARD ON <br />
                    <MOTION.span
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3, delay: 5.5 }}
                        className={styles.title_gradient}
                    >
                        COVID-19
                    </MOTION.span>
                </MOTION.h1>

                <MOTION.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 6 }}
                    className={styles.description}
                >
                    Veja dados atualizados sobre COVID-19, vacinação, mortalidade, hospitais e muito mais de seu pais, ou de todo o globo.
                </MOTION.p>

                <MOTION.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 6.5 }}
                    className={styles.cta_button}
                    onClick={() => scrollToComponent('Dashboard')}
                >
                    Ver Dashboard <FaArrowDownLong className={styles.button_icon} />
                </MOTION.button>
            </div>
        </div>
    );
}