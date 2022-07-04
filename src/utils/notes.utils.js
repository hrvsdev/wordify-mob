// Convert date to format like "15 Jan"
export const convertDateToString = (date) => {
    const months = [
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
    const d = new Date(date);
    const day = d.getDate();
    const month = months[d.getMonth()];
    return `${day} ${month}`;
  }
  