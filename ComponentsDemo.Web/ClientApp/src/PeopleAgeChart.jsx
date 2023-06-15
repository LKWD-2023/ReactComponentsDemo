import React, {useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const getChartData = (people, sliceCount) => {
    const count = Math.floor(100 / sliceCount);
    const breakdowns = [1];
    for (let i = count; i <= 100; i += count) {
        breakdowns.push(i);
    }

    if (breakdowns[breakdowns.length - 1] != 100) {
        breakdowns.push(100);
    }

    let labels = [];
    let counts = [];
    for (let i = 0; i < breakdowns.length - 1; i++) {
        let min = breakdowns[i];
        let max = breakdowns[i + 1];
        labels.push(`${min} - ${max}`);
        counts.push(people.filter(p => p.age >= min && p.age < max).length);
    }

    return {
        labels,
        datasets: [
            {
                label: 'By Age Breakdown',
                data: counts,
                backgroundColor: counts.map(c => getRandomColor())
            }
        ]
    }

}

const PeopleAgeChart = ({ people }) => {
    const [sliceCount, setSliceCount] = useState(5);
    const [chartData, setChartData] = useState();

    useEffect(() => {
        setChartData(getChartData(people, sliceCount));
    }, [sliceCount]);

    return (
        <>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div style={{ maxWidth: 500 }}>
                        {chartData && <Pie data={chartData} />}
                    </div>
                </div>
            </div>
            <div className="row p-5">
                <div className='col-md-6 offset-md-3'>
                    <h4>Slice Count: {sliceCount}</h4>
                    <Slider min={5} max={15} dots={true} value={sliceCount} onChange={val =>setSliceCount(val)}  />
                </div>
            </div>
        </>
    )

}

export default PeopleAgeChart;