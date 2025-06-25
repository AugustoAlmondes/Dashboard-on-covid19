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
import { useEffect, useState } from 'react';
import { fetchDataAPI } from '../../services/api';
// import { useEffect } from 'react';

export default function Dashboard() {

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [countryData, setCountryData] = useState(null);


    useEffect(() => {
    const fetchInitialData = async () => {
        try {
            const [countries, globalData] = await Promise.all([
                fetchDataAPI('countries'),
                fetchDataAPI('all')
            ]);

            setOptions(countries.map((country) => country.country));
            setCountryData(globalData);
        } catch (error) {
            console.error('Erro ao buscar dados iniciais:', error);
        }
    };

    fetchInitialData();
}, []);


    async function handleSelectCountry() {
        console.log(`Selected country: ${selectedOption.toLowerCase()}`);
        const endpoint = `countries/${selectedOption.toLowerCase()}`;
        const res = await fetchDataAPI(endpoint);
        if (res) {
            setCountryData(res);
            console.log(`Data for ${selectedOption}:`, res);
            console.log(countryData.cases);
        } else {
            console.error(`No data found for ${selectedOption}`);
        }

    }

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
                        <Dropdown
                            options={options}
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption} />

                        <button
                            className={styles.button_select}
                            onClick={handleSelectCountry}
                        >Selecionar
                        </button>

                    </div>

                </div>

                <div className={styles.header_dashboard}>
                    <GlobalStats icon={<FaVirusCovid />} title="Total de casos" value={countryData?.cases} delayTransition={0.1} />
                    <GlobalStats icon={<FaSkull />} title="Total de Mortos" value={countryData?.deaths} delayTransition={0.2} />
                    <GlobalStats icon={<FaHeartCircleCheck />} title="Total de curados" value={countryData?.recovered} delayTransition={0.3} />
                    <GlobalStats icon={<BsClipboard2PulseFill />} title="Casos ativos" value={countryData?.active} delayTransition={0.4} />
                    <GlobalStats icon={<BiTestTube />} title="Testes feitos" value={countryData?.tests} delayTransition={0.5} />
                </div>

                <div className={styles.container_mid_data}>
                    <div className={styles.left_mid_data}>
                        <DailyChart dataKey={'uv'} title={'Casos por dia'} delayTrainsition={0.2} />
                        <DailyChart dataKey={'pv'} title={'Mortes por dia'} delayTrainsition={0.4} />
                        <DailyChart dataKey={'amt'} title={'Recuperações por dia'} delayTrainsition={0.6} />
                    </div>

                    <div className={styles.center_mid_data}>
                        <SituationDonut />
                        <TodayData countryData={countryData} />
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