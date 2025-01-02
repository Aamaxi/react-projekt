import LineupButton from './LineupButton';
import { Link } from 'react-router-dom';

function LineUpPreview() {
  return (
    <Link className="lineup-preview link" to="/lineup">
      <h2 className="font-header1">Line up</h2>
      <section className="lineup-container">
        <h3>Line up</h3>
        <LineupButton number="1" player="Ronaldo" icon="/logo192.png"/>
        <LineupButton number="2" player="Messi" icon="/logo192.png"/>
        <LineupButton number="3" player="Neymar" icon="/logo192.png"/>
        <LineupButton number="4" player="Mbappe" icon="/logo192.png"/>
        <LineupButton number="5" player="Lewandowski" icon="/logo192.png"/>
        <LineupButton number="6" player="Salah" icon="/logo192.png"/>
        <LineupButton number="7" player="De Bruyne" icon="/logo192.png"/>
        <LineupButton number="8" player="Kane" icon="/logo192.png"/>
        <LineupButton number="9" player="Hazard" icon="/logo192.png"/>
        <LineupButton number="10" player="Modric" icon="/logo192.png"/>
        <LineupButton number="11" player="Benzema" icon="/logo192.png"/>
      </section>
      <section className="lineup-container">
        <h3>Substitutes</h3>
        <LineupButton number="12" player="Griezmann" icon="/logo192.png"/>
        <LineupButton number="13" player="Sterling" icon="/logo192.png"/>
        <LineupButton number="14" player="Sancho" icon="/logo192.png"/>
        <LineupButton number="15" player="Foden" icon="/logo192.png"/>
        <LineupButton number="16" player="Haaland" icon="/logo192.png"/>
      </section>
    </Link>
  );
}

export default LineUpPreview;