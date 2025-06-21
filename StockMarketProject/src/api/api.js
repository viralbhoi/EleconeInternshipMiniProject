const BASE_URL = 'https://stock.indianapi.in';
const API_KEY = 'Add YOUR API KEY';

const headers = {
  'X-Api-Key': API_KEY,
};

export async function getIPO() {
  const res = await fetch(`${BASE_URL}/ipo`, { headers });
  return res.json();
}

export async function getTrendingStocks() {
  const res = await fetch(`${BASE_URL}/trending`, { headers });
  return res.json();
}

export async function getStockDetails(name) {
  const res = await fetch(`${BASE_URL}/stock?name=${encodeURIComponent(name)}`, { headers });
  return res.json();
}

export async function getMutualFunds() {
  const res = await fetch(`${BASE_URL}/mutual_funds`, { headers });
  return res.json();
}

export async function getMutualFundDetails(stock_name) {
  const res = await fetch(`${BASE_URL}/mutual_funds_details?stock_name=${encodeURIComponent(stock_name)}`, { headers });
  return res.json();
}

export async function get52WeekData() {
  const res = await fetch(`${BASE_URL}/fetch_52_week_high_low_data`, { headers });
  return res.json();
}

export async function getHistoricalStats(stock_name, stats) {
  const res = await fetch(`${BASE_URL}/historical_stats?stock_name=${encodeURIComponent(stock_name)}&stats=${encodeURIComponent(stats)}`, { headers });
  return res.json();
}
