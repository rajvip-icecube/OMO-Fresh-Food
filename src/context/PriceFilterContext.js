import React, { createContext, useState } from 'react';

export const PriceFilterContext = createContext();

export const PriceFilterProvider = ({ children }) => {
  const [price, setPrice] = useState(12); // Initial value is the max price

  return (
    <PriceFilterContext.Provider value={{ price, setPrice }}>
      {children}
    </PriceFilterContext.Provider>
  );
};
