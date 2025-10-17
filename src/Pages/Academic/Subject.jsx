import React from "react";
import SubjectList from "../../_data/Subjects";
import "./academic.css"

function useRandomId() {
  const list = [...SubjectList];


  console.log(list);

  return (
    <div>
      <table
        style={{ width: "800px", height: "180px", bordercollapse: "collapse" , background:'#50787a', color:'white' }}
      >
        <tr
          style={{
            borderbottom: "1px solid black",
            border: "2px solid black",
            // backgroundColor:'blue',
            height: "71px",
          }}
        >
          <th  >Subject</th>
          <th>Pass Mark</th>
          <th>Fail Mark</th>
        </tr>
        {list.map((item, index) => {
          return (
            <tr
              key={index}
              style={{
                textAlign: "center",
                border: "0px solid black",
                background: "lightblue",
                height: "40px",
              }}
            >
              <td style={{color:'black'}}>{item.name}</td>
              <td style={{color:'black'}}>{item.pass}</td>
              <td style={{color:'red'}} >{item.fail}</td>
              <tb>
                
              </tb>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default useRandomId;
