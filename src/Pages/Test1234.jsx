import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

const AddStaff = () => {
  const [jobRole, setJobRole] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");

  const JobRoleFun = (e) => {
    setJobRole(e.target.value);
  };

  const departmentFun = (e) => {
    setDepartment(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="mainClass" style={{ margin: "20px" }}>
      <div style={{ flexDirection: "column" }}>
        <h3>General Information:</h3>
        <div>
          <TextField label="First Name" variant="standard" />
        </div>
        <div>
          <TextField label="Last Name" variant="standard" />
        </div>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Sex</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
            <InputLabel
              id="department-label"
              style={{ color: "black", fontSize: 25, marginBottom: 10 }}
            >
              Department :
            </InputLabel>
            <Select
              labelId="department-label"
              id="department"
              label="Department"
              value={department}
              onChange={departmentFun}
              style={{ paddingTop: 10 }}
            >
              <MenuItem value={1}>Academic</MenuItem>
              <MenuItem value={2}>Administrative</MenuItem>
              <MenuItem value={3}>IT</MenuItem>
              <MenuItem value={4}>Finance</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="jobRole-label">Job Title</InputLabel>
            <Select
              labelId="jobRole-label"
              id="jobRole"
              value={jobRole}
              onChange={JobRoleFun}
            >
              <MenuItem value={1}>Teacher</MenuItem>
              <MenuItem value={2}>Principal</MenuItem>
              <MenuItem value={3}>Assistant Principal</MenuItem>
              <MenuItem value={4}>Department Heads</MenuItem>
              <MenuItem value={5}>School Counselors</MenuItem>
              <MenuItem value={6}>Librarians</MenuItem>
              <MenuItem value={7}>IT Staff</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="contactInformation">
        <h3>Contact Information:</h3>
      </div>
    </div>
  );
};

export default AddStaff;
