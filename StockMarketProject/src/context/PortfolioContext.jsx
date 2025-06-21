import React, { createContext, useState, useEffect } from 'react';

export const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [stocks, setStocks] = useState(() => {
    const saved = localStorage.getItem('portfolioStocks');
    return saved ? JSON.parse(saved) : [];
  });
  const [mutualFunds, setMutualFunds] = useState(() => {
    const saved = localStorage.getItem('portfolioMFs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('portfolioStocks', JSON.stringify(stocks));
  }, [stocks]);

  useEffect(() => {
    localStorage.setItem('portfolioMFs', JSON.stringify(mutualFunds));
  }, [mutualFunds]);

  const addStock = (stock) => {
    setStocks((prev) => [...prev, stock]);
  };

  const removeStock = (stockName) => {
    setStocks((prev) => prev.filter(s => s.name !== stockName));
  };

  const addMF = (mf) => {
    setMutualFunds((prev) => [...prev, mf]);
  };

  const removeMF = (mfName) => {
    setMutualFunds((prev) => prev.filter(m => m.name !== mfName));
  };

  return (
    <PortfolioContext.Provider
      value={{ stocks, addStock, removeStock, mutualFunds, addMF, removeMF }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
