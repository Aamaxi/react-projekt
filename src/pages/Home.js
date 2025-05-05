import CalendarPreview from "../components/CalendarPreview";
import LineUpPreview from "../components/LineupPreview";
import Navbar from "../components/Navbar";
import CompactNavbar from "../components/CompactNavbar";

function Home() {
  return (
    <>
      <CompactNavbar />
      <Navbar />
      <main className="app-container">
        <CalendarPreview />
        <LineUpPreview />
      </main>
    </>
  );
}

export default Home;