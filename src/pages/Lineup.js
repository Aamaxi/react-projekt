import Navbar from "../components/Navbar";
import LineupPreview from "../components/LineupPreview";
import LineupStats from "../components/LineupStats";
import CompactNavbar from "../components/CompactNavbar";

function Lineup() {
  return(
    <>
      <CompactNavbar />
      <Navbar />
      <main className="app-container">
        <LineupPreview />
        <LineupStats name="Lionel Messi" image="/messi_headshot.png" position="Position: FW" matches="Matches (W/L/D): 300/100/20"/>
      </main>
    </>
  );
}

export default Lineup;