import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./login.css";

const Login = ( ) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [project, setProject] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(username==="123" && password==="123" ){
      navigation("/ISRA/Dashboard");
      setUsername("");
    setPassword("");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You are successfully logged in",
      showConfirmButton: false,
      timer: 1500
    });
    console.log("Username:",username,"Password:",password,"Project",project);
    }
    else{
      alert("Invalid UserId & Password")
      setUsername("");
    setPassword("");
    }
  };

  return (
    <div  >
    <div
      className="container"
      style={{
        backgroundColor: "white",
        borderRadius: 30,
        boxShadow: "0 5px 15px rgba(0,0,0,0.35)",
        position: "relative",
        overflow: "hidden",
        maxWidth: "60%",
        minHeight: "480px",
        marginTop:'5%',
        marginLeft:'20%'
      }}
    >
      <div
        className="form"
        style={{
          // position: "absolute",
          top: 0,
          height: "100%",
          transition: "all 0.6 ease-in-out",
          left: 0,
          // width: "50%",
          zIndex: 2,
        }}
      >
        <form
          
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "0px 40px",
            // height:300
          }}
        >
          <div className="login">
            <h1 style={{color:'white'}} >Login</h1>
          </div>
          <div className="input-pannel" style={{width:'43%', marginTop:60}} >
          <input type="user" placeholder="UserID" style={style.input} value={username} onChange={(e)=>setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" style={style.input} value={password} onChange={(e)=>setPassword(e.target.value)} required />
          <input type="project" placeholder="Project" style={style.input} value={project} onChange={(e)=>setProject(e.target.value)} required />
          <div className="link" style={{marginTop:20,marginLeft:59}} >
          <button
            style={{
              backgroundColor: "blue",
              color: "#fff",
              fontSize: 12,
              padding: "10px 45px",
              border: "1px solid white",
              borderRadius: 8,
              fontWeight: 600,
              letterSpacing: "0.5px",
              textDecoration: "none",
              top: "20px",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Login
          </button>
          </div>
          <p style={{paddingLeft:30}} >Create an Account ? 
            <Link to='/register' style={{textDecoration:'none', color:'white', paddingLeft:8}} >
             Click Here
            </Link>
             </p>
          </div>
        </form>
      </div>
      <div
        className="toggle-contain"
        style={{
         
        }}
      >
        <div
          className="toggle"
          style={{
            background: "liner-gradient(to right ,#e21313 , #7324ce)",
            color: "#fff",
            left: "-100%",
            height: "100%",
            width: "800%",
            transform: "translateX(0)",
            transition: "all 0.6 ease-in-out",
          }}
        >
          <div
            className="toggle-pannel"
            style={{
            
            }}
          >
            <h1 style={{display:'none'}} >welcome</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;

const style = {
  input: {
    backgroundColor: "#eee",
    border: "none",
    margin: "8px 0px",
    padding: "10px 15px",
    fontSize: 13,
    borderRadius: 8,
    width: "80%",
    outline: "none",
    textTransform:'uppercase'
    
  },
};
