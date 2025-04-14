import React, { use } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDatares=use(marksPromise);
    const marksData=marksDatares.data
    // console.log(marksData)

    // data prosesing

    const marksChartData=marksData.map(students=>{
        const student={
            id:students.id,
            name:students.name,
            chemistry:students.marks.chemistry,
            math:students.marks.math,
            physics:students.marks.physics
        }
        const avg=(student.chemistry+student.math+student.physics)/3;
        student.avg=avg;
        return student
    })
    console.log(marksChartData)
    return (
        <div>
           <BarChart width={900} height={400} data={marksChartData}>
           <XAxis dataKey={'name'}></XAxis>
               <YAxis></YAxis>
               <Tooltip ></Tooltip>
               <CartesianGrid fill='' stroke='red' strokeDasharray={'5 5'}></CartesianGrid>
               <Bar dataKey={"avg"} fill='red'></Bar>
               <Bar dataKey={"math"} fill='blue'></Bar>
               <Bar dataKey={"chemistry"} fill='green'></Bar>
               <Bar dataKey={"physics"} fill='yellow'></Bar>
           </BarChart>
               
        </div>
    );
};

export default MarksChart;