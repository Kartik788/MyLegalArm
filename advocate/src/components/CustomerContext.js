// CustomerContext.js
import React, { createContext, useContext, useState } from 'react';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customerId, setCustomerId] = useState(null);

  const setCustomer = (id) => {
    setCustomerId(id);
  };

  return (
    <CustomerContext.Provider value={{ customerId, setCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomer must be used within a CustomerProvider');
  }
  return context;
};
