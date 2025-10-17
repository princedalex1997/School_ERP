import React from "react";

const List = ({ formdata  }) => {
  console.log(formdata);
  return (
    <div>
      {formdata.length > 0 ? (
        <div>
          {formdata.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
      ) : (
        <div>
          <h1>
            No Students Found
            </h1>
            </div>
      )}
    </div>
  );
};

export default List;
