export const timeTranslate = (timeStamp: number = Date.now()) => {
  const target = new Date(timeStamp);
  target.setHours(0);
  target.setMinutes(0);
  target.setSeconds(0);
  target.setMilliseconds(0);

  return target.getTime();
};

export const getMonthStartTime = (timeStamp: number = Date.now()) => {
  const target = new Date(timeStamp);
  target.setHours(0);
  target.setMinutes(0);
  target.setSeconds(0);
  target.setMilliseconds(0);
  target.setDate(1)

  return target;
};

