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
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext/ApiContext';
import { useState } from 'react';
import SkeletonDashboard from '../../components/SkeletonDashboard/SkeletonDashboard';
import ErrorFrame from '../../components/ErrorFrame/ErrorFrame';

export default function Dashboard() {
    const {
        data,
        loading,
        error,
        selectedCountry,
        handleSelectCountry
    } = useContext(ApiContext);
    const [selectedOption, setSelectedOption] = useState(null);

    if (loading && !data.countryData) {
        return <div className={styles.loading}>Carregando dados...</div>;
    }

    if (error) {
        return <ErrorFrame />;
    }


    return (
        <>
            <MOTION.div className={styles.container} 
            id="Dashboard">
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h1>DASHBOARD</h1>
                        <h2>
                            {selectedCountry
                                ? `Dados de ${selectedCountry}`
                                : 'Dados Globais'}
                        </h2>
                    </div>

                    <div className={styles.country_select}>
                        <Dropdown
                            options={data.options}
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                        />

                        <button
                            className={styles.button_select}
                            onClick={() => handleSelectCountry(selectedOption)}
                            disabled={!selectedOption || loading}
                        >
                            {loading ? 'Carregando...' : 'Selecionar'}
                        </button>
                    </div>
                </div>
                {/* { loading && <SkeletonDashboard />} */}
                <div className={styles.header_dashboard}>
                    <GlobalStats
                        icon={<FaVirusCovid />}
                        title="Total de casos"
                        value={data.countryData?.cases}
                        delayTransition={0.1}
                    />
                    <GlobalStats
                        icon={<FaSkull />}
                        title="Total de Mortos"
                        value={data.countryData?.deaths}
                        delayTransition={0.2}
                    />
                    <GlobalStats
                        icon={<FaHeartCircleCheck />}
                        title="Total de curados"
                        value={data.countryData?.recovered}
                        delayTransition={0.3}
                    />
                    <GlobalStats
                        icon={<BsClipboard2PulseFill />}
                        title="Casos ativos"
                        value={data.countryData?.active}
                        delayTransition={0.4}
                    />
                    <GlobalStats
                        icon={<BiTestTube />}
                        title="Testes feitos"
                        value={data.countryData?.tests}
                        delayTransition={0.5}
                    />
                </div>

                <div className={styles.container_mid_data}>
                    <div className={styles.left_mid_data}>
                        <DailyChart dataKey={'uv'} title={'Progressão dos Casos'} delayTrainsition={0.2} />
                        <DailyChart dataKey={'pv'} title={'Progressão das Mortes'} delayTrainsition={0.4} />
                        <DailyChart dataKey={'amt'} title={'Recuperações por dia'} delayTrainsition={0.6} />
                    </div>

                    <div className={styles.center_mid_data}>
                        <SituationDonut />
                        <TodayData countryData={data.countryData} />
                    </div>

                    <div className={styles.right_mid_data}>
                        <PopulationCard />
                        <PerMilion />
                    </div>
                </div>
            </MOTION.div>
        </>
    );
}