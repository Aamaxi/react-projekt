import '../App.css';
import Calendar from '../components/Calendar';
import Navbar from '../components/Navbar';
import CompactNavbar from '../components/CompactNavbar';
import CompactCalendar from '../components/CompactCalendar';

function CalendarPage() {
  return (
    <>
      <CompactNavbar />
      <Navbar />
      <div className="app-container">
        <CompactCalendar />
      </div>
    </>
  );
}

export default CalendarPage;