function CalendarPreviewEvent({ time, title }) {
  return (
    <div className="calendar-preview-event">
      <p>{time}</p>
      <p>{title}</p>
    </div>
  );
}

export default CalendarPreviewEvent;