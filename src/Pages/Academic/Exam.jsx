import React from "react";
import ExamList from "../../_data/Exam";

const Exam = () => {
  const exam = [...ExamList];
  console.log(exam);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ paddingRight: 50 }}>
          <h1>Exam Name</h1>
        </div>
        <div style={{ paddingRight: 50 }}>
          <h1>Pass Mark</h1>
        </div>
      </div>
      {exam.map((items, index) => (
        <div key={index} style={{ display: "flex" }}>
          <div style={{ width: "30%", paddingRight: 50 }}>{items.name}</div>
          <div style={{ paddingRight: 50, color: "blue" }}>{items.pass}</div>
        </div>
      ))}
    </div>
  );
};

export default Exam;
