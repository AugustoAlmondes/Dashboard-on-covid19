// import './DataFont.module.css';
import styles from './DataFont.module.css';
import { motion as MOTION } from 'motion/react';

export default function DataFont() {

    return (
        <>
            <div className={styles.container_datafont}
                id="API">

                {/* <div className={styles.background_image} /> */}

                <div className={styles.flex_container}>

                    <MOTION.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Fonte dos
                        <MOTION.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Dados
                        </MOTION.span>
                    </MOTION.h1>

                    <MOTION.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        A API <span>
                            disease.sh</span> é uma API pública gratuita muito útil para acessar dados atualizados sobre doenças infecciosas, especialmente a COVID-19. Ela é ideal para projetos como dashboards, aplicativos de monitoramento e visualizações interativas. Aqui estão detalhes importantes.
                    </MOTION.p>

                    <MOTION.div
                        className={styles.link_api}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p>Todos os dados são fornecidos pela API pública:</p>
                        <span>[disease.sh](https://disease.sh/)</span>

                        <a href="https://disease.sh/" target='_blank'>
                            {/* MOTION.button is good, but let's animate the <a> tag or a wrapper if the button itself is complex */}
                            <MOTION.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.0 }}
                                viewport={{ once: true }}
                            >
                                Ver Site
                            </MOTION.button>
                        </a>
                    </MOTION.div>

                </div>
            </div>
        </>
    );
}