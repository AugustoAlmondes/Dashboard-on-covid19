// import './nome.module.css';
import styles from './ErrorFrame.module.css';

export default function ErrorFrame() {
    return (
        <>
            <div className={styles.container}>
                <h1>404</h1>
                <h2>Algo deu Errado</h2>

                <button onClick={() => window.location.reload()}>Fazer uma nova busca</button>
            </div>
        </>
    );
}