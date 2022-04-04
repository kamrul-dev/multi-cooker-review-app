import useChart from "../../hooks/useChart";
import DataChart from "../DataChart/DataChart";



const Dashboard = () => {
    const [dataCharts, setDataCharts] = useChart();

    return (
        <div>
            {
                dataCharts.map(dataChart => <DataChart
                    key={dataChart.id}
                    dataChart={dataChart}    
                ></DataChart>)
            }
        </div>
    );
};

export default Dashboard;