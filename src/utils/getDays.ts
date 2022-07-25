const getDays = (date: string) => {
  // milliseconds * seconds * minutes * hours
  const oneDay = 1000 * 60 * 60 * 24;
  const currentDate = Date.now();
  const newDate = new Date(date);
  // @ts-ignore
  const days = Math.round((currentDate - newDate) / oneDay);

  return days
};

export default getDays;
