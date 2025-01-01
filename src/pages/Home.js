import CalendarPreview from "../components/CalendarPreview";
import LineUpPreview from "../components/LineupPreview";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <LineUpPreview />
        <CalendarPreview />
      </div>
    </>
  );
}

export default Home;