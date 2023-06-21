import { weekDays } from "../Constants";
import { datesToShow, getDataFromDate, getFirstWeekdayOfMonth } from "../Utils";

import { useStyles } from "./style";

interface CalendarProps {
  date: string;
}

const Calendar = (props: CalendarProps) => {
  const { date } = props;

  const classes = useStyles();

  const { monthName, year, todayDate, totaldaysInMonth } = getDataFromDate(date);

  const getFirstWeekDayOfMonth = getFirstWeekdayOfMonth(year, monthName);
  const calendarDates = datesToShow(getFirstWeekDayOfMonth, totaldaysInMonth);

  const renderWeekDays = () => {
    return weekDays.map((data) => {
      return <th key={data}>{data}</th>;
    });
  };

  const allDates = (data: Array<string | number>) => {
    return data && data !== undefined
      ? data.map((date, index) => {
          return (
            <td
              className={todayDate === date ? classes.todaySelectedDate : ""}
              key={`Dates${index}`}
            >
              {date}
            </td>
          );
        })
      : null;
  };

  const renderDates = () => {
    return calendarDates.map((data, index) => {
      return <tr key={index}>{allDates(data[`row${index}`])}</tr>;
    });
  };

  return (
    <div className={classes.cutomCalendar}>
      <div className={classes.todayDate}>
        {monthName} {year}
      </div>
      <table className={classes.calendarTable}>
        <tbody>
          <tr>{renderWeekDays()}</tr>
          {renderDates()}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
