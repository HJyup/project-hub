export const formatDate = (dateInput: Date) => {
  const monthNamesShort = [
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

  const date = new Date(dateInput);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;

  return `${formattedDay} ${monthNamesShort[monthIndex]} ${year}`;
};
