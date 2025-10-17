import React from "react";
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div style={{ padding: "80px", width: "100%" }}>
      <div style={{ justifyContent: "center", alignItems: "center" }}>
       <h1 style={{color:''}} > No Found</h1>
       
      </div>
      <Link to='/ISRA/Dashboard' > Go to Home Page </Link>
    </div>
  );
};

export default Error;
