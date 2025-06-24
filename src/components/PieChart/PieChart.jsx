// import './nome.module.css';
// import styles from './nome.module.css';

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const COLORS = ['#9E1337', '#E2294F', '#FECDD2'];

export default function PieChartComponent({ data }) {
    return (
        <>
            <ResponsiveContainer width={"100%"} height={400}>
                <PieChart>
                    <Pie
                        dataKey="value"
                        data={data}
                        labelLine={true}
                        outerRadius={150}
                        innerRadius={120}
                        label={({ name}) => `${name}`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}