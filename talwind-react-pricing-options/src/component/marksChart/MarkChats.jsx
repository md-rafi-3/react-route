import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarkChats = ({ markPromise }) => {
    
  const marksDataRes = use(markPromise);
  

  const markData = marksDataRes.data;
  


  //   data processing for the chart
  const marksChartData = markData.map(studentData => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };

    const avg = (student.physics+student.chemistry+student.math)/3;
    student.avg=avg;
    return student;
  });

  console.log(marksChartData)
  return <div>
    <BarChart width={500} height={300} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="yellow"></Bar>
        <Bar dataKey="chemistry" fill="red"></Bar>
    </BarChart>
  </div>;
};

export default MarkChats;
