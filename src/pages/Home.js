import CalendarPreview from "../components/CalendarPreview";
import LineUpPreview from "../components/LineupPreview";
import Navbar from "../components/Navbar";
import CompactNavbar from "../components/CompactNavbar";

function Home() {
  return (
    <>
      <CompactNavbar />
      <Navbar />
      <div className="app-container">
        <CalendarPreview />
        <LineUpPreview />
      </div>
    </>
  );
}

export default Home;