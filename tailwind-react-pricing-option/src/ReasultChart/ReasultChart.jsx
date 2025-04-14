
import React from 'react';
import { Bar, BarChart,CartesianGrid,LineChart, Tooltip, XAxis, YAxis } from 'recharts';
 const resultData=[
    { "id": 1, "name": "Alice", "physics": 85, "chemistry": 78, "math": 92 },
    { "id": 2, "name": "Ben", "physics": 75, "chemistry": 82, "math": 88 },
    { "id": 3, "name": "Clara", "physics": 91, "chemistry": 89, "math": 95 },
    { "id": 4, "name": "David", "physics": 67, "chemistry": 70, "math": 73 },
    { "id": 5, "name": "Ella", "physics": 74, "chemistry": 69, "math": 80 },
    { "id": 6, "name": "Frank", "physics": 88, "chemistry": 85, "math": 90 },
    { "id": 7, "name": "Grace", "physics": 95, "chemistry": 93, "math": 97 },
    { "id": 8, "name": "Harry", "physics": 80, "chemistry": 77, "math": 85 },
    { "id": 9, "name": "Isla", "physics": 90, "chemistry": 88, "math": 92 },
    { "id": 10, "name": "Jack", "physics": 69, "chemistry": 65, "math": 72 }
  ]
  
const  ReasultChart = () => {
    return (
        <div>
            <div>
            {/* <LineChart width={800} height={500} data={resultData}> 
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
            <Line dataKey='math' stroke='blue'></Line>
            <Line dataKey='chemistry' stroke='red'></Line>
            <Line dataKey='physics' stroke='green'></Line>
            </LineChart> */}
            </div>

             <div>
             <BarChart width={900} height={500} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <CartesianGrid stroke='red' strokeDasharray={'5 5'}></CartesianGrid>
                <Tooltip></Tooltip>
            <Bar dataKey={"math"} fill='pink'></Bar>
            <Bar dataKey={"chemistry"} fill='red'></Bar>
            <Bar dataKey={"physics"} fill='blue'></Bar>
            </BarChart>  
            </div> 
                
        </div>

    );
};

export default ReasultChart;