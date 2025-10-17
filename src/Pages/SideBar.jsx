import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Pages/styles/home.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SchoolIcon from "@mui/icons-material/School";

const Home = () => {
  return (
    <div className="main_class">
      <div
        className="sidebar"
        style={{
          display: "flex",
        }}
      >
        <Sidebar className="app">
          <div style={{display:"flex" , flexDirection:"column" , flex:1 , justifyContent:"space-between" , height:"100%", position:"relative" , position:"sticky" , top:10 }} >
          <Menu>
            <MenuItem className="menu1">
              <h2>Prince D Alex</h2>
            </MenuItem>
            <MenuItem
              icon={<GridViewRoundedIcon style={{ color: "blueviolet" }} />}
            >
              <Link to="/ISRA/Dashboard" style={{ textDecoration: "none" ,color:"black"}}>
                Dashboard
              </Link>
            </MenuItem>
            <SubMenu label="Addmission" icon={<ConfirmationNumberIcon />}>
              <MenuItem icon={<InsertDriveFileOutlinedIcon />}>
                <Link to="/ISRA/AddmissionForm" className="link">
                  Admission Form
                </Link>
              </MenuItem>
              <MenuItem icon={<FormatListBulletedIcon />}>
                <Link to="/ISRA/AddmissionList" className="link">
                  Addmission List
                </Link>
              </MenuItem>
              <MenuItem icon={<SchoolIcon />}>
                <Link to="/ISRA/ClassList" className="link">
                  Class List
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu label="Student Management">
              <MenuItem>
                <Link to="/ISRA/StudentDetails" className="link">
                  Student Details
                </Link>
              </MenuItem>
            </SubMenu>
            {/****************   SUB MENU    ***********/}
            <SubMenu label="Academic">
              <MenuItem>
                <Link to="/ISRA/AcademicSubjects" className="link">
                  Subjects
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/ISRA/AcademicExam" className="link">
                  Exam
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/ISRA/AcademicMarkEntry" className="link">
                  Mark Entry
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/ISRA/AcademicReport" className="link">
                  Report
                </Link>
              </MenuItem>
            </SubMenu>
            {/****************   SUB MENU    ***********/}

            <SubMenu label="Attendance">
              <MenuItem>
                <Link
                  to="/ISRA/AttendanceEntry"
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  Attendance Entry
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/ISRA/AttendanceReport"
                  style={{ textDecoration: "none" }}
                  className="link"
                >
                  Attendance Report
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu label="HR Menu">
              <MenuItem>
                <Link to="/ISRA/AddStaff"
                className="link"
                  style={{ textDecoration: "none" }}>Add Staff</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/ISRA/StaffList"
                className="link"
                  style={{ textDecoration: "none" }}>Staff List</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/ISRA/Staff-Attendance"
                className="link"
                  style={{ textDecoration: "none" }}>Staff Attendance</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/ISRA/Leave"
                className="link"
                  style={{ textDecoration: "none" }}>Leave Management</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/ISRA/TimeSheet"
                className="link"
                  style={{ textDecoration: "none" }}>Time Sheet</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/ISRA/Payroll"
                className="link"
                  style={{ textDecoration: "none" }}> Payroll</Link>
              </MenuItem>
            </SubMenu>
            <MenuItem> Logout </MenuItem>
          </Menu>
          <div style={{flex:1}} >
            <button>Logout</button>
          </div>
          </div>
        </Sidebar>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Home;
