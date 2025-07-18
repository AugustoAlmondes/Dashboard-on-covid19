import DataFont from '../DataFont/DataFont';
import styles from './About.module.css';
import Model from '/dashboard.png';
import { motion as MOTION } from 'motion/react';

export default function About() {
    const listItems = [
        "A evolução dos casos e mortes",
        "A situação atual em diferentes países",
        "O progresso da vacinação",
        "Distribuição de casos ativos, recuperados e óbitos"
    ];

    return (
        <MOTION.div
            className={styles.container}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className={styles.content_wrapper}>
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
                            className={styles.title_highlight}
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
                        
                        <ul className={styles.features_list}>
                            {listItems.map((item, index) => (
                                <MOTION.li
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {item}
                                </MOTION.li>
                            ))}
                        </ul>
                    </MOTION.div>

                    <MOTION.button
                        className={styles.cta_button}
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
                    className={styles.image_container}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={Model}
                        alt="Modelo de dashboard COVID-19"
                        className={styles.model_image}
                    />
                </MOTION.div>
            </div>
            <DataFont />
        </MOTION.div>
    );
}