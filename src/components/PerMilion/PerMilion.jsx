// import './PerMilion.module.css';
import { FaUsers } from 'react-icons/fa6';
import styles from './PerMilion.module.css';
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { motion as MOTION } from 'motion/react';


const data = [
    { name: 'Mortes', value: 22123398, color: '#9E1337' },
    { name: 'Casos', value: 75619811, color: '#E2294F' },
];

const COLORS = ['#E2294F', '#FFE4E6'];

export default function PerMilion() {
    return (
        <>
            <MOTION.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className={`hover ${styles.container_per_milion}`}>
                <div className={styles.header_per_milion}>
                    <FaUsers size={40} color='#FA7284' /> <p>Casos por milhão / Mortes por milhão</p>
                </div>

                <div className={styles.pie_chart}>
                    <ResponsiveContainer width={"100%"} height={300}>
                        <PieChart margin={{ top: 150, right: 0, left: 0, bottom: 0 }}>
                            <Pie
                                dataKey="value"
                                data={data}
                                labelLine={true}
                                innerRadius={140}
                                outerRadius={180}
                                startAngle={180}
                                endAngle={0}
                                label={({ name }) => `${name}`}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div className={styles.value_pie_chart}>
                        <p>Valor Atual</p>
                        <h1>100,52</h1>
                    </div>
                </div>
            </MOTION.div>
        </>
    );
}