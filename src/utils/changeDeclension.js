export function changeDeclension(number) {
  if (number > 10 && number < 20) {
    return `${number} ходов`;
  } else {
    const numberString = String(number);
    if (numberString.match(/1\b/)) {
      return `${number} ход`;
    } else if (numberString.match(/[2-4]\b/)) {
      return `${number} хода`;
    } else {
      return `${number} ходов`;
    }
}
}
