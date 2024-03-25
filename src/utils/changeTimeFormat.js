const changeTimeFormat = number => {
  if (number < 10) {
    return '0' + number;
  }
  return number;
};

export const getMinutes = time => {
  const min = Math.floor(time / 60);
  return changeTimeFormat(min);
};

export const getSeconds = time => {
  const sec = time - Math.floor(time / 60) * 60;
  return changeTimeFormat(sec);
};

export const changeTimerFormat = time => {
  return `${getMinutes(time)} : ${getSeconds(time)}`;
};
