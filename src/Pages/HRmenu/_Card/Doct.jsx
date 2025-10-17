import React, { useState } from "react";
import "./card.css";

const Doct = ({formdata, handleChange}) => {
  const [file, setFile] = useState();
  const [edu, setEdu] = useState();
  const [Id, setId] = useState();
  const [medical, setMedical] = useState();
  const [idPicker, setIdPicker] = useState(false);
  const [medicalPicker, setMedicalPicker] = useState(false);
  const [eduPicker, setEduPicker] = useState(false);
  const [pickFile, setPickFile] = useState(false);

  const handleFilePicker = (e) => {
    setFile(e.target.files[0]);
    setPickFile(true);
  };
  const handleEduPicker = (e) => {
    setEdu(e.target.files[0]);
    setEduPicker(true);
  };
  const handleIdPicker = (e) => {
    setId(e.target.files[0]);
    setIdPicker(true);
  };
  const handleMedPicker = (e) => {
    setMedical(e.target.files[0]);
    setMedicalPicker(true);
  };

  const handdleSubmission = () => {
    const formdata = new FormData();

    formdata.append("resume", file);
    formdata.append("education", edu);
    formdata.append("identification", Id);
    formdata.append("medical", medical);
    fetch("url-key", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Succedd", result);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  return (
    <div>
      <h3>Documents</h3>
      <div className="mainProf">
        {/* Resume/CV */}
        <div className="prof-card">
          <h3>Resume/CV</h3>
          <input type="file" name="file" onChange={handleFilePicker} />
          {pickFile ? (
            <div>
              <p>File NAme : {file.name}</p>
              <p>File Type: {file.type}</p>
              <p>Size in bytes:{file.size}</p>
              <p>
                lastModifiedDate: {file.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <div>
              <p>No File is uploaded</p>
            </div>
          )}
          <div>
            <button type="button" onClick={handdleSubmission}>
              Submit
            </button>
          </div>
        </div>
        {/* Educational Certificates */}
        <div className="prof-card">
          <h3>Educational Certificates</h3>
          <input type="file" name="file" onChange={handleEduPicker} />
          {eduPicker ? (
            <div>
              <p>File NAme : {edu.name}</p>
              <p>File Type: {edu.type}</p>
              <p>Size in bytes:{edu.size}</p>
              <p>
                lastModifiedDate: {edu.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <div>
              <p>No File is uploaded</p>
            </div>
          )}
          <div>
            <button type="button" onClick={handdleSubmission}>
              Submit
            </button>
          </div>
        </div>
        {/* Medical Certificate */}
        <div className="prof-card">
          <h3>Medical Certificate</h3>
          <input type="file" name="file" onChange={handleMedPicker} />
          {medicalPicker ? (
            <div>
              <p>File NAme : {medical.name}</p>
              <p>File Type: {medical.type}</p>
              <p>Size in bytes:{medical.size}</p>
              <p>
                lastModifiedDate: {edu.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <div>
              <p>No File is uploaded</p>
            </div>
          )}
          <div>
            <button type="button" onClick={handdleSubmission}>
              Submit
            </button>
          </div>
        </div>
        {/* Identification Proof */}
        <div className="prof-card">
          <h3>Identification Proof</h3>
          <input type="file" name="file" onChange={handleIdPicker} />
          {idPicker ? (
            <div>
              <p>File NAme : {Id.name}</p>
              <p>File Type: {Id.type}</p>
              <p>Size in bytes:{Id.size}</p>
              <p>
                lastModifiedDate: {edu.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <div>
              <p>No File is uploaded</p>
            </div>
          )}
          <div>
            <button type="button" onClick={handdleSubmission}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doct;
