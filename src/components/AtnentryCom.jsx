import React from "react";

const MarkentryCom = ({ mainclass, sections }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ padding: 40 }}>
        {mainclass && sections ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{fontSize:"30px"}} >
              Class Name - {mainclass}: {sections}
            </p>
            <div style={{fontSize:"30px" , marginLeft:50,marginTop:27}}>
                Mark their Attendance
            </div>
          </div>
          
        ) : (
          <span style={{fontSize:"30px",fontWeight:900}} >Select Class & Section</span>
        )}
      </div>
    </div>
  );
};

export default MarkentryCom;
