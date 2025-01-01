import CalendarPreviewEvent from "./CalendarPreviewEvent";

function CalendarPreview() {
  return (
    <a className="calendar-preview">
      <h2 className="font-header1">Calendar</h2>
      <section className="calendar-preview-container">
        <h3 className="font-header2">4/10</h3>
        <CalendarPreviewEvent time="10:00 - 11:30" title="Training"/>
        <CalendarPreviewEvent time="12:00 - 13:00" title="Lunch"/>
        <CalendarPreviewEvent time="14:00 - 16:00" title="Meeting"/>
        <hr/>
      </section>
      <section className="calendar-preview-container">
        <h3 className="font-header2">5/10</h3>
        <CalendarPreviewEvent time="10:00 - 11:30" title="Training"/>
        <CalendarPreviewEvent time="12:00 - 13:00" title="Lunch"/>
        <CalendarPreviewEvent time="14:00 - 16:00" title="Meeting"/>
        <hr/>
      </section>
            <section className="calendar-preview-container">
        <h3 className="font-header2">4/10</h3>
        <CalendarPreviewEvent time="10:00 - 11:30" title="Training"/>
        <CalendarPreviewEvent time="12:00 - 13:00" title="Lunch"/>
        <CalendarPreviewEvent time="14:00 - 16:00" title="Meeting"/>
        <hr/>
      </section>
    </a>
  );
}

export default CalendarPreview;