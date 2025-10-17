import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import StudentDetailsList from "../../_data/STD names";
import ExamList from "../../_data/Exam";
import SubjectList from "../../_data/Subjects";
import "./academic.css";
import Swal from "sweetalert2";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";


const MarkEntry = () => {
  const studDetail = [...StudentDetailsList];
  const exam = [...ExamList];
  const subject = [...SubjectList];
  const [selectedClass, setSelectedClass] = useState("");
  const [selectSections, setSelectedSection] = useState("");
  const [examList, setExamList] = useState(null);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [subjectList1, setSubjectList] = useState("");
  const [mark, setMark] = useState([]);
  const [studentMark, setStudentMark] = useState([]);
  const navigate = useNavigate();

  const Subjects = (list) => {
    setSubjectList(list);

    // console.log(SubjectList);
  };
  const handleClass = (e) => {
    setSelectedClass(e.target.value);
    setFilteredStudents([]);
    setMark([]);
  };

  const handleSection = (e) => {
    setSelectedSection(e.target.value);
    setFilteredStudents([]);
  };

  const ExamValue = (value) => {
    setExamList(value);
  };

  const handleFilter = () => {
    if (!subjectList1 || !examList) {
      alert("Select Exam & Subject");
    } else {
      const students = studDetail.filter(
        (student) =>
          student.classes === selectedClass &&
          student.sections === selectSections
      );
      setFilteredStudents(students);
    }
  };

  useEffect(() => {
    console.log(studentMark);
  }, [studentMark]);

  const handleSubmit = () => {
    if (
      !selectedClass ||
      !selectSections ||
      !subjectList1 ||
      !examList ||
      !mark.some((m) => m !== undefined && m !== null && m !== "")
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Mark!",
      });
    } else {
      const arrayStudentMark = filteredStudents.map((student, index) => ({
        class: selectedClass,
        section: selectSections,
        exam: examList,
        subject: subjectList1,
        studentName: student.name,
        mark: mark[index],
      }));
      setStudentMark(arrayStudentMark);
     
      Swal.fire({
        title: "Do you want to save the Marks?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
        
      }).then((result) => {
        setMark("");
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/ISRA/AcademicReport",{ state: arrayStudentMark });
          Swal.fire("Mark has been Saved!", "");
        } else if (result.isDenied) {
          Swal.fire("Marks are not saved", "");
        }
      });
    }
  };

  const handleMarks = (index, value) => {
    const mainMark = Number(value);

    if (mainMark > 50) {
      alert(
        `mark is about than 50 . you enters in ${value} mark not is acceptable`
      );
      value = "";
    } else {
      value = Math.max(Math.min(mainMark, 50), 0);
    }

    const newMarks = [...mark];
    newMarks[index] = value;
    setMark(newMarks);
  };

  return (
    <div className="main-class">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          margin: 10,
        }}
      >
        {/*  Select Exam */}

        <Box sx={{ width: "30%", marginLeft: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-Exam">Exam</InputLabel>
            <Select
              value={examList}
              onChange={(e) => ExamValue(e.target.value)}
              labelId="demo-Exam"
              id="exam"
              label="Exam"
            >
              {exam.map((item) => (
                <MenuItem
                  key={item.id}
                  value={item.name}
                  style={{ width: "130%" }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/*  Select Exam */}
        {/*Select Subjects*/}
        <Box sx={{ width: "30%", marginLeft: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-subject"> Subject</InputLabel>
            <Select
              labelId="demo-subject"
              id="demo-Subjects"
              label="Select Subject"
              value={subjectList1}
              onChange={(e) => Subjects(e.target.value)}
            >
              {subject.map((item) => (
                <MenuItem
                  value={item.name}
                  key={item.id}
                  style={{ width: "130%" }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        {/*Select Subjects*/}

        <Box sx={{ width: "30%", marginLeft: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Class</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={selectedClass}
              label="Class"
              onChange={handleClass}
            >
              {Array.from(
                new Set(studDetail.map((student) => student.classes))
              ).map((classes) => (
                <MenuItem value={classes} style={{ width: "130%" }}>
                  {classes}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Other MAtiral*/}

        <Box sx={{ width: "30%", marginLeft: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-Section">Section</InputLabel>
            <Select
              labelId="demo-Section"
              id="demoSections"
              value={selectSections}
              onChange={handleSection}
              label="Section"
            >
              {Array.from(
                new Set(studDetail.map((section) => section.sections))
              ).map((sec) => (
                <MenuItem value={sec} style={{ width: "130%" }}>
                  {sec}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      {/* SubjectList */}

      <button onClick={handleFilter}>Enquire</button>
      <div>
        <div style={{ display: "flex" }}>
          {filteredStudents.length > 0 ? (
            <p> Student Name </p>
          ) : (
            <p> Select Class & Sections </p>
          )}
          <p style={{ paddingLeft: 50 }}> {selectedClass}-</p>
          <p> {selectSections} </p>
          <p style={{ paddingLeft: 50 }}>
            {examList || (
              <span style={{ color: "red" }}>Please Select Exam</span>
            )}
          </p>
          <p style={{ paddingLeft: 50 }}>
            {subjectList1 || (
              <span style={{ color: "red" }}>Please Select Exam</span>
            )}
          </p>
          <p style={{ paddingLeft: 50 }}>
            <span
              style={{
                color: "red",
                fontSize: 20,
                fontFamily: "serif",
                fontWeight: 600,
              }}
            >
              Maximum Mark : 50
            </span>
          </p>
        </div>
        {filteredStudents.length > 0 ? (
          <div>
            <div style={{ display: "flex" }}>
              <div>
                {filteredStudents.map((student, index) => (
                  <div
                    key={student.name}
                    style={{ display: "flex", marginTop: 10 }}
                  >
                    <p style={{ width: 170 }}>{student.name}</p>
                    <Stack component="form" sx={{ width: "20ch" }}>
                      <TextField
                        hiddenLabel
                        value={mark[index] || ""}
                        onChange={(e) => handleMarks(index, e.target.value)}
                      />
                    </Stack>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" onClick={handleSubmit}>
              Save
            </button>
          </div>
        ) : (
          <p style={{ display: "none" }}>No Students found in this Class</p>
        )}
      </div>
    </div>
  );
};

export default MarkEntry;
