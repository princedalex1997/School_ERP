import React from 'react'
import { useLocation } from 'react-router'

const Report = () => {
  const location = useLocation()
  const data = location.state;

  return (
    <div>
      {data && data.length >0 ? (
        data.map((items, index)=> (
          <div key={index} >
            {items.studentName}
            -{items.mark}
          </div>
        ))
      ) :(
        <div>
          <p>no students found</p>
        </div>
      )}
    </div>
  )
}

export default Report