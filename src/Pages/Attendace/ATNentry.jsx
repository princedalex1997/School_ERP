import React, { useState } from "react";
import StudentDetailsList from "../../_data/STD names";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MarkentryCom from "../../components/AtnentryCom";

const ATNentry = () => {
  const studentList = [...StudentDetailsList];
  const [filterStudent, setFilterStudent] = useState([]);
  const [mainclass, setMainClass] = useState("");
  const [sections, setSections] = useState("");
  const [atn, setAtn] = useState({});
  const [date, setDate] = useState(new Date());
  const [holiday, setHolidayMode] = useState(false);

  const handleClass = (e) => {
    setMainClass(e.target.value);
    setSections("");
    setFilterStudent([]);
  };

  const handleSections = (e) => {
    if (mainclass === "") {
      alert("Please select the class");
    } else {
      setSections(e.target.value);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Section changed. Please click the Enquire button",
      });
      setFilterStudent([]);
    }
  };

  const handleFilter = () => {
    if (mainclass === "") {
      alert("Select the Class & Section");
    } else {
      const students = studentList.filter(
        (student) =>
          student.classes === mainclass && student.sections === sections
      );
      setFilterStudent(students);
      setAtn({});
    }
  };

  const handleATN = (index, status) => {
    setAtn((prev) => ({
      ...prev,
      [index]: prev[index] === status ? null : status,
    }));
  };

  const markAtn = (status) => {
    const atnArray = {};
    filterStudent.forEach((_, index) => {
      atnArray[index] = status;
    });
    setAtn(atnArray);
    setHolidayMode(status === "Holiday");
  };

  const handleSaveAtn = () => {
    const present = Object.values(atn).filter(
      (sta) => sta === "Present"
    ).length;
    const absent = Object.values(atn).filter((sta) => sta === "Absent").length;
    // alert();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Attendace has been saved",
      html: `<strong>Present : ${present} \nAbsent : ${absent}</strong>`,
      showConfirmButton: false,
      timer: 3000,
    });

    const attendacneData = filterStudent.map((student, index)=> ({
      studenName:student.name,
      studentAtn:atn[index] || "Not Marked"
    }))

    // const attendanceSummary = {
    //   class: mainclass,
    //   section: sections,
    //   date: date,
    //   presentCount: present,
    //   absentCount: absent,
    //   studentAttendance: attendacneData,
    // };
    console.log(attendacneData);
    

  };

  return (
    <div style={{ paddingTop: 10 }}>
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "100px" }}>
            <Box>
              <FormControl fullWidth>
                <InputLabel id="class_Input">Class</InputLabel>
                <Select
                  labelId="class_Input"
                  id="classInput"
                  value={mainclass}
                  label="Class"
                  onChange={handleClass}
                >
                  {Array.from(
                    new Set(studentList.map((cls) => cls.classes))
                  ).map((cls) => (
                    <MenuItem key={cls} value={cls}>
                      {cls}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div style={{ width: "100px" }}>
            <Box>
              <FormControl fullWidth>
                <InputLabel id="section_input">Section</InputLabel>
                <Select
                  labelId="section_input"
                  id="sectionInput"
                  value={sections}
                  onChange={handleSections}
                  label="Section"
                >
                  {Array.from(
                    new Set(studentList.map((sec) => sec.sections))
                  ).map((sec) => (
                    <MenuItem key={sec} value={sec}>
                      {sec}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div>
            <DatePicker
              selected={date}
              onChange={(dat) => setDate(dat)}
              scrollableMonthYearDropdown
              maxDate={new Date()}
              dateFormat="dd/MM/yyyy"
              filterDate={(dat) => dat.getDay() !== 0}
            />
          </div>
        </div>
        <button onClick={handleFilter}>Enquire</button>
      </div>
      <MarkentryCom mainclass={mainclass} sections={sections} />
      {mainclass && sections ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>Student name</p>
          <p style={{ marginLeft: "80px" }}>Mark All Present</p>
          <button
            onClick={() => markAtn("Present")}
            style={{ marginLeft: "30px" }}
          >
            Present
          </button>
          <button
            onClick={() => markAtn("Holiday")}
            style={{ marginLeft: "30px" }}
          >
            Mark Holiday
          </button>
          <button style={{ marginLeft: "30px" }} onClick={handleSaveAtn}>
            {" "}
            Save{" "}
          </button>
        </div>
      ) : (
        ""
      )}
      {filterStudent.length > 0 ? (
        filterStudent.map((items, index) => (
          <div
            key={index}
            style={{ display: "flex", flexDirection: "row", height: "90px" }}
          >
            <div style={{ width: "500%", height: "auto", margin: 20 }}>
              {items.name}
            </div>
            <div
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                label="Present"
                control={
                  <Checkbox
                    checked={atn[index] === "Present"}
                    onChange={() => handleATN(index, "Present")}
                    disabled={holiday}
                  />
                }
              />
              <FormControlLabel
                label="Absent"
                control={
                  <Checkbox
                    checked={atn[index] === "Absent"}
                    onChange={() => handleATN(index, "Absent")}
                    disabled={holiday}
                  />
                }
              />
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>No Students Found</p>
        </div>
      )}
    </div>
  );
};

export default ATNentry;
