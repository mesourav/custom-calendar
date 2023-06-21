import moment from "moment";

export const getDataFromDate = (date: string) => {
  const providedDate = moment(date, "DD/MM/YYYY");
  var data = {
    monthName: providedDate.format("MMMM"),
    year: providedDate.year(),
    todayDate: providedDate.date(),
    totaldaysInMonth: providedDate.daysInMonth(),
  };
  return data;
};

export const getFirstWeekdayOfMonth = (year: number, monthName: string) => {
  var month = moment().month(monthName).format("M");
  var day = new Date(year + "-" + month + "-01").getDay();
  return day;
};

const chunkIntoN = (arr: Array<string | number>, n: number) => {
  var slicedArray = [];
  for (let i = 0; i < arr.length; i += n) {
    let tempArray;
    tempArray = arr.slice(i, i + n);
    slicedArray.push(tempArray);
  }
  return slicedArray;
};

export const datesToShow = (startingWeekDay: number, totalDaysInMonth: number) => {
  let array = [];
  let temp: Array<number> = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);
  let emptyDateValue = new Array(startingWeekDay).fill("");
  let finalDateArray = chunkIntoN(emptyDateValue.concat(temp), 7);
  for (let i = 0; i < 6; i++) {
    array.push({
      [`row${i}`]: finalDateArray[i],
    });
  }
  return array;
};
