import DataFont from '../DataFont/DataFont';
import styles from './About.module.css';
import Model from '/model.jpg';
import { motion as MOTION } from 'motion/react';

export default function About() {
    // Configurações comuns para as animações

    return (
        <>
            <MOTION.div
                className={styles.container}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className={styles.about_dashboard}>
                    <MOTION.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Sobre o COVID-19
                        <br />
                        <MOTION.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}

                        >
                            Dashboard
                        </MOTION.span>
                    </MOTION.h1>

                    <MOTION.div
                        className={styles.paragraph_content}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            Este dashboard foi criado com o objetivo de fornecer informações atualizadas e confiáveis sobre a pandemia de COVID-19, tanto em escala global quanto por país.
                            <br />
                            <br />
                            Através de gráficos, indicadores e comparativos, você pode acompanhar:
                        </p>
                        <MOTION.ul>
                            <MOTION.li
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                            >
                                A evolução dos casos e mortes
                            </MOTION.li>
                            <MOTION.li
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                                viewport={{ once: true }}
                            >
                                A situação atual em diferentes países
                            </MOTION.li>
                            <MOTION.li
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                viewport={{ once: true }}
                            >
                                O progresso da vacinação
                            </MOTION.li>
                            <MOTION.li
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 1.4 }}
                                viewport={{ once: true }}
                            >
                                Distribuição de casos ativos, recuperados e óbitos
                            </MOTION.li>
                        </MOTION.ul>
                    </MOTION.div>

                    <MOTION.button
                        className={styles.button}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        viewport={{ once: true }}
                    >
                        Ver Dashboard
                    </MOTION.button>
                </div>

                <MOTION.div
                    className={styles.container_image}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={Model}
                        className={styles.model}
                    // alt="model"
                    // whileInView={{ opacity: 1 }}
                    />
                </MOTION.div>
            </MOTION.div>
            {/* <div className='footer_overlay' /> */}
            <DataFont />
        </>
    );
}