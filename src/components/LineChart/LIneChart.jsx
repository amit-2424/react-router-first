
import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';


const LIneChart = () => {

    const subMarksData = [
        { id: 1, name: "Alice", math: 85, physics: 75, chemistry: 80 },
        { id: 2, name: "Bob", math: 78, physics: 82, chemistry: 70 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 85 },
        { id: 4, name: "David", math: 67, physics: 60, chemistry: 72 },
        { id: 5, name: "Emma", math: 74, physics: 68, chemistry: 78 },
        { id: 6, name: "Frank", math: 89, physics: 85, chemistry: 90 },
        { id: 7, name: "Grace", math: 80, physics: 76, chemistry: 82 },
        { id: 8, name: "Henry", math: 81, physics: 78, chemistry: 88 },
        { id: 9, name: "Ivy", math: 95, physics: 92, chemistry: 94 },
        { id: 10, name: "Jack", math: 72, physics: 68, chemistry: 75 }
    ];



    return (
        <div>
            <h2>Line Chart: </h2>
            <LChart width={800} height={400} data={subMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey="math" stroke='blue'></Line>
                <Line dataKey={"physics"} stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LIneChart;