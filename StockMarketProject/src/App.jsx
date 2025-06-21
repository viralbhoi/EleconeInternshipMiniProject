import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import StocksPage from './pages/StocksPage';
import MutualFundsPage from './pages/MutualFundsPage';
import PortfolioPage from './pages/PortfolioPage';
import { PortfolioProvider } from './context/PortfolioContext';

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stocks" element={<StocksPage />} />
          <Route path="/mutualfunds" element={<MutualFundsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </PortfolioProvider>
  );
}

export default App;
