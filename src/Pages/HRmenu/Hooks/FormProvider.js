import React, { createContext, useContext, useState } from 'react';

// Corrected naming convention: `FormContext`
const FormContext = createContext();

// Corrected typo in `children`
export const FormProvider = ({ children }) => {
  const [formArray, setFormArray] = useState([]);

  return (
    <FormContext.Provider value={{ formArray, setFormArray }}>
      {children}
    </FormContext.Provider>
  );
};

// Corrected custom hook to use `useContext`
export const useFormContext = () => {
  return useContext(FormContext);
};
