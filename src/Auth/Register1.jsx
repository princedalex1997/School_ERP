import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img1 from "../_assests/image/img1.jpg";
import "./register.css";
import Webcam from "./Webcam";

const Register1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [showWebcam, setShowWebcam] = useState(false);
  const navigation = useNavigate();
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (!name || !email || !password || password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          !name || !email || !password
            ? "Fill all the fields!"
            : "Password is Not Matching",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password is Not Matching!",
      });
    }
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Confirm Password:", confirmPassword);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigation("/");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Login has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleImage = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  const handleOpenCamera = () => {
    setShowWebcam(true);
  };

  return (
    <div>
      <div style={{  marginTop:60}}>
        <div style={{ display: "grid" }} onClick={handleImage}>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="img1"
              style={{ width: 90, height: 90 }}
            />
          ) : (
            <img src={img1} alt="img1" style={{ width: 90, height: 90 }} />
          )}
          <input
            type="file"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <button className="btn-1" style={{ width: "90px" }}>
            Upload{" "}
          </button>
        </div>
        <button onClick={handleOpenCamera} className="btn-1" style={{ width: "90px" }}>
          Open Camera
        </button>
        {showWebcam && <Webcam />}
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="text"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
      </div>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register1;
