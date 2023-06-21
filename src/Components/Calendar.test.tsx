import { render, screen } from "@testing-library/react";
import moment from "moment";
import Calendar from "./Calendar";
import { weekDays } from "../Constants";

const date = moment().format("DD/MM/YYYY");
const defaultProps = { date };

it("Should display month name and year", () => {
  render(<Calendar {...defaultProps} />);
  const monthName = moment().format("MMMM");
  const year = moment().format("YYYY");
  const text = screen.getByText(`${monthName} ${year}`);
  expect(text).toBeInTheDocument();
});

it("Should display week names", () => {
  render(<Calendar {...defaultProps} />);
  weekDays.map((day) => {
    const text = screen.getByText(`${day}`);
    expect(text).toBeInTheDocument();
  });
});

it("Should display todays date", () => {
  render(<Calendar {...defaultProps} />);
  const todayDate = moment().format("DD");
  const text = screen.getByText(`${todayDate}`);
  expect(text).toBeInTheDocument();
});
