// import './Home.module.css';
import { FaArrowDownLong } from 'react-icons/fa6';
import styles from './Home.module.css';
import { motion as MOTION } from 'motion/react';

export default function Home() {
    return (
        <>
            <div className={styles.home_container}>
                <div className={styles.overlay} />
                <MOTION.video
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4, delay: 1 }}

                    src="https://static.vecteezy.com/system/resources/previews/007/525/680/animation-of-beautiful-red-light-radial-background-free-video.webm"

                    // src="https://static.vecteezy.com/system/resources/previews/024/499/199/red-particles-background-free-video.webm"

                    autoPlay loop muted

                />
                <header className={styles.header}>
                    <MOTION.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3, delay: 2.4 }}
                        className={styles.logo}
                    >Dash</MOTION.h2>
                    <ul>
                        <MOTION.li
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3, delay: 2.5 }}
                        >
                            Home
                        </MOTION.li>
                        <MOTION.li
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3, delay: 2.6 }}
                        >
                            Sobre
                        </MOTION.li>
                        <MOTION.li
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3, delay: 2.7 }}
                        >
                            API
                        </MOTION.li>
                        <MOTION.li
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3, delay: 2.8 }}
                        >
                            Developer
                        </MOTION.li>
                    </ul>
                    <MOTION.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 2.9 }}
                    >Ver Dados</MOTION.button>
                </header>

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
                        >COVID-19</MOTION.span>
                    </MOTION.h1>

                    <MOTION.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 6 }}
                    >Veja dados atualizados sobre COVID-19, vacinação, mortalidade, hospitais e muito mais de seu pais, ou de todo o globo.</MOTION.p>

                    <MOTION.button
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 6.5 }}
                        className={styles.button}
                    >Ver Dashboard <FaArrowDownLong size={13} /></MOTION.button>
                </div>
            </div>
            <div className={styles.footer_overlay} />
        </>
    );
}