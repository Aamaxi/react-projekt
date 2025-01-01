import CalendarDay from "./CalendarDay";

function Calendar() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  return (
    <div className="calendar">
      <h3 className="font-header2 calendar-font">10/2024</h3>
      <div className="calendar-container">
        <div className="calendar-week">
          <p>v.41</p>
          <p>v.42</p>
          <p>v.43</p>
          <p>v.44</p>
          <p>v.45</p>
        </div>
        {Array.from({ length: 30 }, (_, i) => (
          <CalendarDay key={i} day={`${i + 1} / ${days[(i % 7)]}`} />
        ))}
      </div>
    </div>
  );
}

export default Calendar;