import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const Dashboard = () => {
    const [chartDatas, setChartDatas] = useChart([]);

    return (
        <>
            <div className='row container mx-auto'>
                <div className='col-md-6 p-2'>
                    <h4 className='text-center mt-5 mb-4' style={{ color: '#1DACBF' }}>MONTH WISE SELL</h4>
                    <LineChart width={500} height={300} data={chartDatas}>
                        <Line dataKey={'price'}></Line>
                        <Line dataKey={'sell'}></Line>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div className='col-md-6 p-2'>
                    <h4 className='text-center mt-5 mb-4' style={{ color: '#1DACBF' }}>INVESTMENT VS REVENUE</h4>
                    <AreaChart width={600} height={300} data={chartDatas}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1DACBF" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#1DACBF" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            </div>
            <div className='row container mx-auto'>
                <div className='col-md-6 p-2'>
                    <h4 className='text-center mt-5 mb-4' style={{ color: '#1DACBF' }}>INVESTMENT VS REVENUE</h4>
                    <BarChart width={500} height={300} data={chartDatas}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#1DACBF" />
                        <Bar dataKey="sell" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className='col-md-6 p-2'>

                </div>
            </div>
        </>
    );
};

export default Dashboard;