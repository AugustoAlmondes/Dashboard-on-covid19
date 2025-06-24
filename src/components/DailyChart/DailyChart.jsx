// import './DailyCharts.module.css';
import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './DailyChart.module.css';
import { motion as MOTION } from 'motion/react';

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
{ name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
{ name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
{ name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
{ name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
{ name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
{ name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

// DOCUMENTAÇÃO: https://recharts.org/en-US/examples/SimpleAreaChart

export default function DailyChart({ dataKey, title, delayTrainsition }) {
    return (
        <>
            <MOTION.div className={`hover ${styles.container_daily_chart}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: delayTrainsition }}
                viewport={{ once: true }}
            >
                <h3>{title}</h3>
                <div className={styles.data_daily_chart}>
                    <ul>
                        <li>
                            intervalo de dias
                            <br /><span>30 dias</span>
                        </li>
                        <li>Inicio
                            <br /><span>08/02/2023</span>
                        </li>
                        <li>
                            Termino
                            <br /><span>09/03/2023</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.daily_chart}>

                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 15 }}>
                            <Line type="monotone" dataKey={dataKey} stroke="#E2294F" animationDuration={5000} />
                            <CartesianGrid stroke="gray" />
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <YAxis />
                            <Area type="monotone" dataKey={dataKey} stroke="#E2294F" fill="#871435" animationDuration={5000} />
                        </AreaChart>
                    </ResponsiveContainer>

                </div>
            </MOTION.div>
        </>
    );
}