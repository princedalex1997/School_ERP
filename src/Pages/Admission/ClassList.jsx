import React from "react";
import StudentDetailsList from "../../_data/STD names";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import "./adm.css";
import { Link } from "react-router-dom";

const ClassList = ({ formdata }) => {
  const mainClassList = [formdata, ...StudentDetailsList].reduce((ab, bc) => {
    ab[bc.classes] = (ab[bc.classes] || 0) + 1;

    return ab;
  }, {});

  const classList = Object.entries(mainClassList).sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return +1;
    return 0;
  });
  // console.log(classList);
  return (
    <div>
      <div
        style={{
          marginLeft: "10%",
          marginTop: "10%",
          backgroundColor: "blue",
          width: 1000,
          borderWidth: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, borderRadius: 1 }}
            aria-label="simple table"
          >
            <TableHead style={{ backgroundColor: "blueviolet" }}>
              <TableRow>
                <TableCell
                  style={{ fontWeight: 900, fontSize: 20, color: "white" }}
                >
                  Class List
                </TableCell>
                <TableCell
                  style={{ fontWeight: 900, fontSize: 20, color: "white" }}
                >
                  Total Studetns
                </TableCell>
                <TableCell
                  style={{ fontWeight: 900, fontSize: 20, color: "white" }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classList.map(([className, count, id]) => (
                <TableRow key={className}>
                  <TableCell>{className}</TableCell>
                  <TableCell sx={{ paddingLeft: 10 }}>{count}</TableCell>
                  <TableCell sx={{ paddingLeft: 2 }}>
                    <Button className="btn">view more</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Link
        to="/ISRA/StudentDetails"
        style={{
          color: "black",
          textDecoration: "none",
          backgroundColor: "yellow",
          marginLeft: "45%",
          width: "20%",
        }}
      >
        Show All Detalis
      </Link>
    </div>
  );
};

export default ClassList;
