// import './Home.module.css';
import { FaArrowDownLong } from 'react-icons/fa6';
import styles from './Home.module.css';

export default function Home() {
    return (
        <>
            <div className={styles.home_container}>
                <div className={styles.overlay} />
                <video src="https://static.vecteezy.com/system/resources/previews/007/525/680/animation-of-beautiful-red-light-radial-background-free-video.webm"
                    autoPlay loop muted></video>
                <header className={styles.header}>
                    <h2>Dash</h2>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Sobre
                        </li>
                        <li>
                            API
                        </li>
                        <li>
                            Developer
                        </li>
                    </ul>
                    <button>Ver Dados</button>
                </header>

                <div className={styles.content}>
                    <div className={styles.ref}>
                        <span>dados de:</span> disease.sh
                    </div>
                    <h1>
                        DASHBOARD ON <br />
                        <span>COVID-19</span>
                    </h1>
                    <p>Veja dados atualizados sobre COVID-19, vacinação, mortalidade, hospitais e muito mais de seu pais, ou de todo o globo.</p>
                    <button>Ver Dashboard <FaArrowDownLong size={13}/></button>
                </div>
            </div>
        </>
    );
}