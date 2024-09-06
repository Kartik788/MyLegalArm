// LawyerContext.js
import React, { createContext, useContext, useState } from 'react';

const LawyerContext = createContext();

export const LawyerProvider = ({ children }) => {
  const [lawyerId, setLawyerId] = useState(null);

  const setLawyer = (id) => {
    setLawyerId(id);
  };

  return (
    <LawyerContext.Provider value={{ lawyerId, setLawyer }}>
      {children}
    </LawyerContext.Provider>
  );
};

export const useLawyer = () => {
  const context = useContext(LawyerContext);
  if (!context) {
    throw new Error('useLawyer must be used within a LawyerProvider');
  }
  return context;
};
