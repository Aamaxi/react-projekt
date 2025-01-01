import '../App.css';
import Calendar from '../components/Calendar';
import Navbar from '../components/Navbar';

function CalendarPage() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Calendar />
      </div>
    </>
  );
}

export default CalendarPage;