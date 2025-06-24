// import './SituationDonut.module.css';
import styles from './SituationDonut.module.css';
import { BsPieChartFill } from 'react-icons/bs';
import PieChartComponent from '../PieChart/PieChart';
import { FaCircle } from 'react-icons/fa6';
import { maskNumber } from '../../utils/maskNumber';
import { motion as MOTION } from 'motion/react';
// import { PiEarDuotone } from 'react-icons/pi';

const data = [
    { name: 'Ativos', value: 22123398, color: '#9E1337' },
    { name: 'Curados', value: 75619811, color: '#E2294F' },
    { name: 'Mortes', value: 7010681, color: '#FECDD2' },
];

export default function SituationDonut() {
    return (
        <>
            <MOTION.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className={`hover ${styles.container_situation_donut}`}>

                <div className={styles.header_donut}>
                    <BsPieChartFill size={40} color='#FA7284' />
                    <h2>Proporção de Situação dos Casos</h2>
                </div>

                <div className={styles.pieChart}>
                    <PieChartComponent data={data} />

                    <div className={styles.pie_legend}>
                        <ul>
                            <li>
                                <FaCircle color={data[0].color} size={8} />
                                Ativos - <span>{maskNumber(data[0].value)}</span>
                            </li>
                            <li>
                                <FaCircle color={data[1].color} size={8} />
                                Curados - <span>{maskNumber(data[1].value)}</span>
                            </li>
                            <li>
                                <FaCircle color={data[2].color} size={8} />
                                Mortes - <span>{maskNumber(data[2].value)}</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </MOTION.div>
        </>
    );
}