import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import Home from './pages/Home';
import Lineup from './pages/Lineup';

function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/lineup" element={<Lineup />} />
      </Routes>
    </Router>
  );
}

export default RoutesPage;