import "./App.css";
import Calendar from "./Components/Calendar";

function CustomCalendar() {
  const date = "21/06/2023";
  return (
    <div className="App">
      <Calendar date={date} />
    </div>
  );
}

export default CustomCalendar;
