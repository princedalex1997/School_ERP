import React from 'react'
import "./card.css"
import { TextField } from '@mui/material'

const Adminst = ({formdata, handleChange}) => {
  return (
    <div>
      <h3>

      Administrative Information:
      </h3>
        <div className='prof' >
            <TextField
            className="inputMain"
            id="outlined-basic"
            label="Role"
            variant="outlined"
            style={{marginTop:15}}
            name="role"
            value={formdata.role}
            onChange={handleChange}
            />
            <h3>Salary Details</h3>
            <TextField
            className="inputMain"
            id="outlined-basic"
            label="Basic Salary"
            variant="outlined"
            style={{marginTop:15}}
            name="salary"
            value={formdata.salary}
            onChange={handleChange}
            />
            <TextField
            className="inputMain"
            id="outlined-basic"
            label="Allowances"
            variant="outlined"
            style={{marginTop:15}}
            name="allowances"
            value={formdata.allowances}
            onChange={handleChange}
            />
            <TextField
            className="inputMain"
            id="outlined-basic"
            label="Deductions"
            variant="outlined"
            style={{marginTop:15}}
            name="deductions"
            value={formdata.deductions}
            onChange={handleChange}
            />
            <h3>Bank Account Details
            </h3>
            <TextField
            className="inputMain"
            id="outlined-basic"
            label="Bank Name"
            variant="outlined"
            style={{marginTop:15}}
            name="bankName"
            value={formdata.bankName}
            onChange={handleChange}
            />
            <TextField
            className="inputMain"
            id="outlined-basic"
            label="Account Number"
            variant="outlined"
            style={{marginTop:15}}
            name="acctNumber"
            value={formdata.acctNumber}
            onChange={handleChange}
            />
            <TextField
            className="inputMain"
            id="outlined-basic"
            label="IFSC Code"
            variant="outlined"
            style={{marginTop:15}}
            name="ifscCode"
            value={formdata.ifscCode}
            onChange={handleChange}
            />
            <TextField
            className="inputMain"
            id="outlined-basic"
            label="Payroll Number"
            variant="outlined"
            style={{marginTop:15}}
            name="payRollNumber"
            value={formdata.payRollNumber}
            onChange={handleChange}
            />
        </div>
    </div>
  )
}

export default Adminst
