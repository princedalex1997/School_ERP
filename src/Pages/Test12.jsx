import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const RandomCodeGenerator = () => {
  const [code, setCode] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isEditable, setIsEditable] = useState(true);
  const [isSaveVisible, setIsSaveVisible] = useState(false);

  // Function to generate a sequential code starting with '000001'
  const generateSequentialCode = () => {
    if (!code) { // Only generate code if the field is empty
      // Retrieve the last generated code from localStorage or default to '000000'
      const lastCode = localStorage.getItem('lastCode') || '000000';
      // Increment the code by 1
      let newCode = (parseInt(lastCode, 10) + 1).toString().padStart(6, '0');
      // Update state and localStorage
      setCode(newCode);
      localStorage.setItem('lastCode', newCode);
      setIsButtonVisible(false); // Hide the "Generate" button after generating the code
      setIsEditable(false); // Make the input read-only
      setIsSaveVisible(true); // Show the "Save" button
    }
  };

  const handleInputChange = (event) => {
    if (isEditable) {
      setCode(event.target.value);
    }
  };

  const saveCode = () => {
    // Implement save functionality here
    console.log('Code saved:', code);
    // After saving, you can hide the save button or perform any other action
    setIsSaveVisible(false);
  };

  return (
    <div>
      <TextField
        className="inputMain"
        id="outlined-basic"
        label="Generated Code"
        variant="outlined"
        value={code}
        onChange={handleInputChange}
        InputProps={{
          readOnly: !isEditable,
        }}
        style={{ marginTop: 15 }}
      />
      {isButtonVisible && (
        <Button
          variant="contained"
          color="primary"
          onClick={generateSequentialCode}
          style={{ marginTop: 15, marginLeft: 10 }}
        >
          Generate Code
        </Button>
      )}
      {isSaveVisible && (
        <Button
          variant="contained"
          color="secondary"
          onClick={saveCode}
          style={{ marginTop: 15, marginLeft: 10 }}
        >
          Save Code
        </Button>
      )}
    </div>
  );
};

export default RandomCodeGenerator;
