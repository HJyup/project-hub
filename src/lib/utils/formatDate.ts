const MONTHS_NAME = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (dateInput: Date) => {
  const date = new Date(dateInput);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;

  return `${formattedDay} ${MONTHS_NAME[monthIndex]} ${year}`;
};
