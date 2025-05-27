// import './About.module.css';
import styles from './About.module.css';
import Model from '/model.jpg';
export default function About() {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.about_dashboard}>
                    <h1>Sobre o COVID-19
                        <br />
                        <span>
                            Dashboard
                        </span>
                    </h1>
                </div>
                <img src={Model} className={styles.model} alt="model" />
            </div>
        </>
    );
}