import React, { useState } from "react";
import MarkEntry from "./MarkEntry";

const ParentComponent = () => {
  const [reportData, setReportData] = useState([]);

  const handleReportData = (mark) => {
    setReportData(mark);
  };

  return (
    <div>
      <h1>hai</h1>
      
    </div>
  );
};

export default ParentComponent;
