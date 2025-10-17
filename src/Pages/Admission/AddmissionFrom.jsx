import React, { useEffect, useState } from "react";
import "../Admission/adm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const AddmissionFrom = ({ addform }) => {
  const [selectDate, setSelectDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState(false);
  const [classes, setClasses] = useState("");
  const [sections, setSections] = useState("");
  const [id, setId] = useState(null);

  const Mainclass = [
    {
      id: "1",
      name: "I",
    },
    {
      id: "2",
      name: "II",
    },
    {
      id: "3",
      name: "III",
    },
    {
      id: "4",
      name: "IV",
    },
    {
      id: "5",
      name: "V",
    },
    {
      id: "6",
      name: "VI",
    },
    {
      id: "7",
      name: "VII",
    },
    {
      id: "8",
      name: "VIII",
    },
    {
      id: "9",
      name: "IX",
    },
    {
      id: "10",
      name: "X",
    },
  ];
  const MainSections = [
    {
      id: "1",
      name: "A",
    },
    {
      id: "2",
      name: "B",
    },
    {
      id: "3",
      name: "C",
    },
  ];

  const handleSubmit = () => {
    if (
      name === "" ||
      email === "" ||
      mobile === "" ||
      gender === false ||
      selectDate === null ||
      classes === "" ||
      sections === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill the all fields!",
        
      });
    } else {
      addform({ name, mobile, email, selectDate, gender, classes, sections,id });
      setName("");
      setSelectDate(null);
      setEmail("");
      setMobile("");
      setGender(false);
      setClasses("");
      setSections("");
      
      Swal.fire({
        title: `${name} is Added in the System`,
        // text: "You clicked the button!",
        icon: "success",
      });

      const random = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

      const getId = random.toString().padStart(4, "0");
      setId(getId);

      console.log(id);
    }
  };
  useEffect(()=>{
    if(id !==null){
      console.log(id);
    }
  },[id])
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <div>
        <div className="name">
          <input
            type="text"
            value={name}
            className="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label className="username">Enter Name</label>
        </div>
        <div className="name">
          <input
            type="text"
            className="name"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="username">Email</label>
        </div>
        <div className="name">
          <input
            type="text"
            className="name"
            value={mobile}
            required
            onChange={(e) => setMobile(e.target.value)}
          />
          <label className="username">Mobile Number</label>
        </div>

        {/* DateOF Birth */}

        <div style={{ display: "flex", alignItems: "baseline" }}>
          <h4>Date of Birth :</h4>
          <div style={{ marginLeft: "13px" }}>
            <DatePicker
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              selected={selectDate}
              onChange={(date) => setSelectDate(date)}
              maxDate={new Date()}
            />
          </div>
        </div>
        {/* nexline */}
        <div>
          Gender:
          <label>
            <input
              type="radio"
              name={gender}
              value="Male"
              checked={gender === "Male"}
              onChange={handleGender}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name={gender}
              value="Female"
              checked={gender === "Female"}
              onChange={handleGender}
            />
            Female
          </label>
        </div>

        {/* Class Drop Down */}
        <div>
          Class :
          <select value={classes} onChange={(e) => setClasses(e.target.value)}>
            <option value="">Select Class</option>
            {Mainclass.map((data, index) => (
              <option key={index} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
          <select
            value={sections}
            onChange={(e) => setSections(e.target.value)}
          >
            <option value="">Select Sections</option>
            {MainSections.map((data, index) => (
              <option key={index} value={data.name}>
                {data.name}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddmissionFrom;
