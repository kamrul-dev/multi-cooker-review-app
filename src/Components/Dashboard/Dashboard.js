import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const Dashboard = () => {
    const [chartDatas, setChartDatas] = useChart([]);

    return (
        <>
            <div className='row container mx-auto'>
                <div className='col-md-6'>
                    <h2>MONTH WISE SELL</h2>
                    <LineChart width={800} height={500} data={chartDatas}>
                        <Line dataKey={'price'}></Line>
                        <Line dataKey={'sell'}></Line>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
            </div>
        </>
    );
};

export default Dashboard;