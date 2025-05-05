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
      <main className="app-container">
        <CompactCalendar />
      </main>
    </>
  );
}

export default CalendarPage;