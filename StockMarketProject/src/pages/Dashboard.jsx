import React, { useEffect, useState } from 'react';
import { getIPO, getTrendingStocks, getMutualFunds } from '../api/api';
import IPOList from '../components/IPOList';
import StockList from '../components/StockList';
import MFList from '../components/MFList';

export default function Dashboard() {
  const [ipos, setIpos] = useState([]);
  const [trending, setTrending] = useState([]);
  const [mfs, setMfs] = useState([]);

  useEffect(() => {
    getIPO().then(setIpos);
    getTrendingStocks().then(setTrending);
    getMutualFunds().then(setMfs);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Finance Dashboard</h1>
      <IPOList data={ipos} />
      <StockList data={trending} title="Trending Stocks" />
      <MFList data={mfs} />
    </div>
  );
}
