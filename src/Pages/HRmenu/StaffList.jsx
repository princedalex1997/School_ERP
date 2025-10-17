import React from "react";
import { useFormContext } from "./Hooks/FormProvider";

const StaffList = () => {
  const { formArray } = useFormContext();
  console.log(formArray);

  return (
    <div>
      {formArray.length > 0 ? (
        formArray.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" style={{ width: 340, height: 300 }} />
            <p>First Name: {item.firstname}</p>
            <p>Last Name {item.lastname}</p>
          </div>
        ))
      ) : (
        <p>Not Staff List is founded</p>
      )}
    </div>
  );
};

export default StaffList;
