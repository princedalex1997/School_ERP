import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SideBar from "./Pages/SideBar";
import Login from "./Auth/Login";
import Register1 from "./Auth/Register1";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import AddmissionFrom from "./Pages/Admission/AddmissionFrom";
import StudentDetails from "./Pages/StudentDetails.jsx/StudentDetails";
// import StudentReport from "./Pages/StudentDetails.jsx/StudentReport";
import Error from "./Pages/Error";
import Test12 from "./Pages/Test12";
import Subject from "./Pages/Academic/Subject";
import MarkEntry from "./Pages/Academic/MarkEntry";
import Exam from "./Pages/Academic/Exam";
import Report from "./Pages/Academic/Report";
import AddList from "./Pages/Admission/AddList";
import ClassList from "./Pages/Admission/ClassList";
import Header from "./Pages/Header";
import ATNentry from "./Pages/Attendace/ATNentry";
import ATNreport from "./Pages/Attendace/ATNreport";
import AddStaff from "./Pages/HRmenu/AddStaff"
import StaffList from "./Pages/HRmenu/StaffList"
import StaffAtn from "./Pages/HRmenu/StaffAtn"
import Leave from "./Pages/HRmenu/Leave"
import TimeSheet from "./Pages/HRmenu/TimeSheet"
import Payroll from "./Pages/HRmenu/Payroll"
import { FormProvider } from "./Pages/HRmenu/Hooks/FormProvider";


const Navigation = () => {
  const [formdata, setFormData] = useState([]);

  const addForm = (data) => {
    setFormData([...formdata, data]);
  };

  const location = useLocation();
  const showHeader =
    location.path === "/" ||
    location.pathname === "/register" ||
    location.pathname === "/*";

  return (
    <div>
      {!showHeader && <Header />}
      <FormProvider>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register1 />} />
        <Route path="/ISRA" element={<SideBar />}>
          <Route path="/ISRA/list" element={<AddList />} />
          <Route path="/ISRA/class" element={<ClassList />} />
          <Route path="/ISRA/Dashboard" element={<Dashboard />} />
          <Route path="/ISRA/Contact" element={<Contact />} />
          <Route path="/ISRA/Profile" element={<Profile />} />
          <Route path="/ISRA/Test12" element={<Test12 />} />
          <Route
            path="/ISRA/AddmissionForm"
            element={<AddmissionFrom addform={addForm} />}
          />
          <Route
            path="/ISRA/AddmissionList"
            element={<AddList formdata={formdata} />}
          />
          <Route path="/ISRA/ClassList" element={<ClassList formdata={formdata} />} />
          <Route
            path="/ISRA/StudentDetails"
            element={<StudentDetails formdata={formdata} />}
          />
          <Route path="/ISRA/AcademicSubjects" element={<Subject />} />
          <Route path="/ISRA/AcademicExam" element={<Exam />} />
          <Route
            path="/ISRA/AcademicMarkEntry"
            element={<MarkEntry formdata={formdata} />}
          />
          <Route path="/ISRA/AcademicReport" element={<Report />} />
          <Route path="/ISRA/AttendanceEntry" element={<ATNentry />} />
          <Route path="/ISRA/AttendanceReport" element={<ATNreport />} />
          <Route path="/ISRA/AddStaff" element={<AddStaff />} />
          <Route path="/ISRA/StaffList" element={<StaffList />} />
          <Route path="/ISRA/Staff-Attendance" element={<StaffAtn />} />
          <Route path="/ISRA/Leave" element={<Leave />} />
          <Route path="/ISRA/TimeSheet" element={<TimeSheet />} />
          <Route path="/ISRA/Payroll" element={<Payroll />} />
        </Route>
      </Routes>
      </FormProvider>
    </div>
  );
};

export default Navigation;
