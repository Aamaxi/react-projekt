function LineupButtons({ number, player, icon}) {
  return (
    <button className="lineup-button">
      <div className="lineup-button-container">
        <p>{number}</p>
        <p>{player}</p>
      </div>
      <img src={icon} alt="player icon" className="icon"/>
    </button>
  );
}

export default LineupButtons;