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
    const weekDaysUi = weekDays.map((data, index) => {
      return <th key={index}>{data}</th>;
    });
    return weekDaysUi;
  };

  const renderDates = () => {
    var datesUi = calendarDates.map((data, index) => {
      return (
        <tr key={index}>
          {data[`row${index}`] && data[`row${index}`] !== undefined
            ? data[`row${index}`].map((dates, innerIndex) => {
                return (
                  <td
                    className={todayDate === dates ? classes.todaySelectedDate : ""}
                    key={innerIndex}
                  >
                    {dates}
                  </td>
                );
              })
            : null}
        </tr>
      );
    });

    return datesUi;
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
