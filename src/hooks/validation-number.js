function validationNumber(number) {
  number = number.trim();

  return /^\d+$/.test(number);
}

module.exports = validationNumber;
