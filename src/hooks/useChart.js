import { useEffect, useState } from "react";

const useChart = () => {
    const [dataCharts, setDataCharts] = useState([]);
    useEffect(() => {
        fetch('chartdata.json')
            .then(res => res.json())
            .then(data => setDataCharts(data));

    }, []);

    return [dataCharts, setDataCharts];
}
export default useChart;