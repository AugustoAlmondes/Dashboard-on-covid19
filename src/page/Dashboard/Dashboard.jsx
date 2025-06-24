// import './Dashboard.module.css';
import styles from './Dashboard.module.css';
import Dropdown from '../../components/Dropdown/Dropdown';
import GlobalStats from '../../components/GlobalStats/GlobalStats';
import { FaHeartCircleCheck, FaSkull, FaVirusCovid } from 'react-icons/fa6';
import { BsClipboard2PulseFill } from 'react-icons/bs';
import { BiTestTube } from 'react-icons/bi';
import DailyChart from '../../components/DailyChart/DailyChart';
import SituationDonut from '../../components/SituationDonut/SituationDonut';
import { motion as MOTION } from 'motion/react';
import TodayData from '../../components/TodayData/TodayData';
import PopulationCard from '../../components/PopulationCard/PopulationCard';
import PerMilion from '../../components/PerMilion/PerMilion';

export default function Dashboard() {

    return (
        <>
            <MOTION.div
                className={styles.container}>

                <div
                    className={styles.header}>

                    <div 
                    
                    className={styles.title}>
                        <h1 >DASHBOARD</h1>
                        <h2 >Dados Globais</h2>
                    </div>

                    <div className={styles.country_select}>
                        <Dropdown />
                        <button>Selecionar</button>
                    </div>

                </div>

                <div className={styles.header_dashboard}>
                    <GlobalStats icon={<FaVirusCovid />} title="Total de casos" value={704753890} delayTransition={0.1} />
                    <GlobalStats icon={<FaSkull />} title="Total de Mortos" value={7010681} delayTransition={0.2} />
                    <GlobalStats icon={<FaHeartCircleCheck />} title="Total de curados" value={675619811} delayTransition={0.3} />
                    <GlobalStats icon={<BsClipboard2PulseFill />} title="Casos ativos" value={22123398} delayTransition={0.4} />
                    <GlobalStats icon={<BiTestTube />} title="Testes feitos" value={7026505313} delayTransition={0.5} />
                </div>

                <div className={styles.container_mid_data}>
                    <div className={styles.left_mid_data}>
                        <DailyChart dataKey={'uv'} title={'Casos por dia'} delayTrainsition={0.2} />
                        <DailyChart dataKey={'pv'} title={'Mortes por dia'} delayTrainsition={0.4} />
                        <DailyChart dataKey={'amt'} title={'Recuperações por dia'} delayTrainsition={0.6} />
                    </div>

                    <div className={styles.center_mid_data}>
                        <SituationDonut />
                        <TodayData />
                    </div>

                    <div className={styles.right_mid_data}>
                        <PopulationCard/>
                        <PerMilion/>
                    </div>

                </div>
            </MOTION.div>

        </>
    );
}