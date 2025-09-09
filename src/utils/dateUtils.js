// Simple date comparison helpers
export const isToday = (date) => {
  const today = new Date();
  const taskDate = new Date(date);
  return (
    today.toDateString() === taskDate.toDateString()
  );
};

export const isUpcoming = (date) => {
  const today = new Date();
  const taskDate = new Date(date);
  return taskDate > today;
};
