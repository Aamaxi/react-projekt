function LineupStats({ name, image, position, matches}) {
  return (
    <section className="lineup-stats">
      <h3 className="font-header2 font-lineup">Lineup Stats</h3>
        <div className="lineup-stats-content">
          <div className="lineup-stats-container">
            <img src={image} alt="player picture" className="lineup-picture"></img>
            <h4 className="font-header3">{name}</h4>
            <p>{position}</p>
            <p>{matches}</p>
          </div>
          <div className="lineup-stats-container">
            <h4 className="font-header3">General info</h4>
            <div className="lineup-p-container"><p>Goals</p><p>100</p></div>
            <div className="lineup-p-container"><p>Assists</p><p>7</p></div>
            <div className="lineup-p-container"><p>Yellow Cards</p><p>3</p></div>
            <div className="lineup-p-container"><p>Red Cards</p><p>1</p></div>
            <div className="lineup-p-container"><p>Height</p><p>180 cm</p></div>
            <div className="lineup-p-container"><p>Weight</p><p>75 kg</p></div>
            <div className="lineup-p-container"><p>Nationality</p><p>Spanish</p></div>
            <div className="lineup-p-container"><p>Age</p><p>28</p></div>
          </div>
          <div className="lineup-stats-container">
            <h4 className="font-header3">General info</h4>
            <div className="lineup-p-container"><p>Goals</p><p>100</p></div>
            <div className="lineup-p-container"><p>Assists</p><p>7</p></div>
            <div className="lineup-p-container"><p>Yellow Cards</p><p>3</p></div>
            <div className="lineup-p-container"><p>Red Cards</p><p>1</p></div>
            <div className="lineup-p-container"><p>Height</p><p>180 cm</p></div>
            <div className="lineup-p-container"><p>Weight</p><p>75 kg</p></div>
            <div className="lineup-p-container"><p>Nationality</p><p>Spanish</p></div>
            <div className="lineup-p-container"><p>Age</p><p>28</p></div>
          </div>
          <div className="lineup-stats-container">
            <h4 className="font-header3">General info</h4>
            <div className="lineup-p-container"><p>Goals</p><p>100</p></div>
            <div className="lineup-p-container"><p>Assists</p><p>7</p></div>
            <div className="lineup-p-container"><p>Yellow Cards</p><p>3</p></div>
            <div className="lineup-p-container"><p>Red Cards</p><p>1</p></div>
            <div className="lineup-p-container"><p>Height</p><p>180 cm</p></div>
            <div className="lineup-p-container"><p>Weight</p><p>75 kg</p></div>
            <div className="lineup-p-container"><p>Nationality</p><p>Spanish</p></div>
            <div className="lineup-p-container"><p>Age</p><p>28</p></div>
          </div>
        </div>
    </section>
  );
}

export default LineupStats;