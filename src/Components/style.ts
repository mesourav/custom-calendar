import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  cutomCalendar: {},
  todayDate: {
    padding: "20px",
    fontSize: "20px",
    fontWeight: 600,
  },
  calendarTable: {
    background: "white",
    padding: " 20px",
    borderRadius: "20px",
    "& th": {
      padding: "10px",
      color: "#67798a",
    },
    "& tr": {
      "& td": {
        padding: "12px",
      },
    },
  },
  todaySelectedDate: {
    background: "#DE6E46",
    color: "#ffffff",
    borderRadius: "5px",
  },
});
