import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useState } from "react";
import "./addstaff.css";
import img1 from "../../_assests/image/img1.jpg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Adminst from "./_Card/Adminst";
import Proff from "./_Card/Proff";
import Doct from "./_Card/Doct";
import { useFormContext } from "./Hooks/FormProvider";

const AddStaff = () => {
  const [image, setImage] = useState("");
  const{formArray , setFormArray}  = useFormContext()
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    jobRole: "",
    department: "",
    email: "",
    number: "",
    employeId: "",
    qulifications: "",
    previousCompanyName: "",
    designations: "",
    duration: "",
    previousCompanyExperience: "",
    previousCompanyContactName: "",
    previousCompanyEmail: "",
    image: "",
    previousCompanyNumber:"",
    role:"",
    salary:"",
    allowances:"",
    deductions:"",
    bankName:"",
    acctNumber:"",
    ifscCode:"",
    payRollNumber:""


  });
  // const [date, setDate] = useState(new Date());

  const handelImage = (e) => {
   const imageUrl = URL.createObjectURL(e.target.files[0]);
   setImage(imageUrl);
   setFormData({...formdata,image:imageUrl})
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = () => {
    if (!formdata.firstname === "") {
      alert("Data not Uploaded  ");
      
    }
   
    setFormArray([...formArray,formdata]);
    setFormData({
      firstname: "",
    lastname: "",
    gender: "",
    jobRole: "",
    department: "",
    email: "",
    number: "",
    employeId: "",
    qulifications: "",
    previousCompanyName: "",
    designations: "",
    duration: "",
    previousCompanyExperience: "",
    previousCompanyContactName: "",
    previousCompanyEmail: "",
    image: "",
    previousCompanyNumber:"",
    role:"",
    salary:"",
    allowances:"",
    deductions:"",
    bankName:"",
    acctNumber:"",
    ifscCode:"",
    payRollNumber:""
    })
    alert("Data Uploaded Successfully ");
    console.log(formdata);
    
  };

  return (
    <div
      className="mainClassStaff"
      style={{ margin: "20px", borderRadius: 1, borderWidth: 1 }}
    >
      <div style={{ flexDirection: "column" }}>
        <h3>Personal Information:</h3>
        <div
          className="staffPro"
          style={{ width: 120, height: 130, marginLeft: 50 }}
        >
          {image ? (
            <img
              src={image}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <img src={img1} alt="" style={{ width: "100%", height: "100%" }} />
          )}
          <input
            type="file"
            name=""
            id=""
            style={{ marginTop: 10 }}
            onChange={handelImage}
          />
        </div>
        <form>
          <div style={{ marginTop: 20 }}>
            <TextField
              id="outlined-basic"
              label="First Name"
              name="firstname"
              value={formdata.firstname}
              variant="outlined"
              style={{ width: "35%", marginTop: 15 }}
              onChange={handleChange}
            />
          </div>

          <TextField
            id="outlined-basic"
            label="Last Name"
            name="lastname"
            value={formdata.lastname}
            variant="outlined"
            style={{ width: "35%", marginTop: 15 }}
            onChange={handleChange}
          />
        </form>
        <RadioGroup
          row
          aria-label="Gender"
          name="gender"
          value={formdata.gender}
          onChange={handleChange}
        >
          <h3>Gender</h3>
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
            style={{ paddingLeft: 10 }}
          />
          <FormControlLabel value="female" control={<Radio />} label="female" />
        </RadioGroup>
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
              name="department"
              value={formdata.department}
              onChange={handleChange}
              style={{ paddingTop: 10 }}
            >
              <MenuItem value="Academic"> Academic </MenuItem>
              <MenuItem value="Administrative"> Administrative </MenuItem>
              <MenuItem value="IT"> IT </MenuItem>
              <MenuItem value="Finance"> Finance </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="jobRole-label">Job Title</InputLabel>
            <Select
              labelId="jobRole-label"
              id="jobRole"
              name="jobRole"
              value={formdata.jobRole}
              onChange={handleChange}
            >
              <MenuItem value="Teacher">Teacher</MenuItem>
              <MenuItem value="Principal">Principal</MenuItem>
              <MenuItem value="VicePrincipal">Vice Principal</MenuItem>
              <MenuItem value="AssistantPrincipal">
                Assistant Principal
              </MenuItem>
              <MenuItem value="DepartmentHeads">Department Heads</MenuItem>
              <MenuItem value="SchoolCounselors">School Counselors</MenuItem>
              <MenuItem value="Librarians">Librarians</MenuItem>
              <MenuItem value="ITStaff">IT Staff</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="dateOfBirth" style={{ marginTop: 15 }}>
          Date of Birth
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker style={{ width: "30%" }} />
          </LocalizationProvider>
        </div>

        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          value={formdata.email}
          name="email"
          variant="outlined"
          onChange={handleChange}
          style={{ width: "35%", marginTop: 15 }}
        />

        <TextField
          id="outlined-basic"
          label="Mobile"
          variant="outlined"
          name="number"
          value={formdata.number}
          onChange={handleChange}
          style={{ width: "35%", marginTop: 15 }}
        />
      </div>

      <div className="cardInfo">
        <Proff formdata={formdata} handleChange={handleChange} />
        <Adminst formdata={formdata} handleChange={handleChange} />
        <Doct formdata={formdata} handleChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default AddStaff;
