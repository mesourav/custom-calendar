import "./App.css";
import Calendar from "./Components/Calendar";

function CustomCalendar() {
  const date = "23/02/2024";
  return (
    <div className="App">
      <Calendar date={date} />
    </div>
  );
}

export default CustomCalendar;
