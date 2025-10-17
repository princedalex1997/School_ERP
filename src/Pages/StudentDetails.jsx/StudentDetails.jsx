import React from "react";
import { Link } from "react-router-dom";
// import MUIDataTable from "mui-datatables";
// import { format } from "date-fns";
import StudentDetailsList from "../../_data/STD names";

const StudentDetails = ({ formdata }) => {
  
  const mergeData = [formdata, ...StudentDetailsList];



 

  return (
  
    <div className="main_div">
      {mergeData.map((items, index)=>(
        <div key={index} >
          {items.name} - 
          {items.classes}:
          {items.sections}
        </div>
        
      ))}
      <div>

<Link>Clear</Link>
</div>
    </div>
  );
};

export default StudentDetails;
