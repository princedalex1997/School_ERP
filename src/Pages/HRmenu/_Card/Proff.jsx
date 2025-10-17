import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "./card.css";

import React from "react";

const Proff = ({ formdata, handleChange }) => {
  return (
    <div>
      <h3>Professional Information:</h3>
      <div className="mainDetails" style={{ paddingTop: 20 }}>
        <div className="prof">
          <TextField
            className="inputMain"
            id="outlined-basic"
            label="Employee ID"
            variant="outlined"
            name="employeId"
            value={formdata.employeId}
            onChange={handleChange}
            style={{ marginTop: 15 }}
          />
          <div>
            <h3>Date of Joining</h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
          <FormControl variant="standard" style={{ marginTop: 25 }}>
            <InputLabel id="qulifications_label">Qulifications</InputLabel>

            <Select
              labelId="qulifications_label"
              id="qulifications"
              label="Qulifications"
              name="qulifications"
              value={formdata.qulifications}
              onChange={handleChange}
              style={{ width: 190 }}
            >
              <MenuItem value="B.Ed"> B.Ed</MenuItem>
              <MenuItem value="D.El.Ed"> D.El.Ed</MenuItem>
              <MenuItem value="B.Sc.">B.Sc. </MenuItem>
              <MenuItem value="B.A">B.A </MenuItem>
              <MenuItem value="M.Sc"> M.Sc</MenuItem>
              <MenuItem value="M.A"> M.A</MenuItem>
              <MenuItem value="Ph.D">Ph.D </MenuItem>
              <MenuItem value="M.Ed"> M.Ed</MenuItem>
              <MenuItem value="Ed.D">Ed.D </MenuItem>
              <MenuItem value="Diploma">Diploma </MenuItem>
            </Select>
          </FormControl>
          <div>
            <h4>Experience</h4>
            <TextField
              className="inputMain"
              id="outlined-basic"
              label="Experience"
              variant="outlined"
              style={{ width: "30%" }}
              name="previousCompanyExperience"
              value={formdata.previousCompanyExperience}
              onChange={handleChange}
            />
          </div>

          <TextField
            className="inputMain"
            id="outlined-basic"
            label="Specialization"
            variant="outlined"
            style={{ marginTop: 15 }}
            name="previousCompanyspecilization"
            value={formdata.previousCompanyspecilization}
            onChange={handleChange}
          />
        </div>
        <div className="previous">
          <h2>
            Previous Employment Details
            <div className="details">
              <TextField
                className="inputMain"
                id="outlined-basic"
                label="Organization Name"
                variant="outlined"
                name="previousCompanyName"
                value={formdata.previousCompanyName}
                onChange={handleChange}
                style={{ marginTop: 15 }}
              />
              <TextField
                className="inputMain"
                id="outlined-basic"
                label="Designation"
                variant="outlined"
                name="designations"
                value={formdata.designations}
                onChange={handleChange}
                style={{ marginTop: 15 }}
              />
              <TextField
                className="inputMain"
                id="outlined-basic"
                label="Duration"
                variant="outlined"
                name="duration"
                value={formdata.duration}
                onChange={handleChange}
                style={{ marginTop: 15 }}
              />
              <div className="info">
                <h6>Contact Information of Previous Company</h6>
                <TextField
                  className="inputMain"
                  id="outlined-basic"
                  label="Name "
                  variant="outlined"
                  name="previousCompanyContactName"
                  value={formdata.previousCompanyContactName}
                  onChange={handleChange}
                  style={{ marginTop: 15 }}
                />
                <TextField
                  className="inputMain"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="previousCompanyEmail"
                  value={formdata.previousCompanyEmail}
                  onChange={handleChange}
                  style={{ marginTop: 15, marginLeft: 10 }}
                />
                <TextField
                  className="inputMain"
                  id="outlined-basic"
                  label="Number"
                  variant="outlined"
                  name="previousCompanyNumber"
                  value={formdata.previousCompanyNumber}
                  onChange={handleChange}
                  style={{ marginTop: 15, marginLeft: 10 }}
                />
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Proff;
